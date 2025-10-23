import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Sphere, Cylinder, Box, useTexture } from "@react-three/drei";
import { Mesh, Vector3 } from "three";
import { useToast } from "@/hooks/use-toast";
import leagueLogo from "@/assets/league-logo.jpg";

interface BallProps {
  onShoot: (success: boolean) => void;
}

function Ball({ onShoot }: BallProps) {
  const meshRef = useRef<Mesh>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [velocity, setVelocity] = useState<Vector3 | null>(null);
  const [isFlying, setIsFlying] = useState(false);
  const { camera } = useThree();

  useFrame(() => {
    if (meshRef.current && velocity && isFlying) {
      meshRef.current.position.add(velocity);
      velocity.y -= 0.02; // gravity
      
      // Check if ball reached hoop height and distance
      const distanceToHoop = Math.sqrt(
        Math.pow(meshRef.current.position.x, 2) + 
        Math.pow(meshRef.current.position.z - 5, 2)
      );
      
      if (meshRef.current.position.y > 3 && meshRef.current.position.y < 4 && distanceToHoop < 0.8) {
        // Success!
        onShoot(true);
        resetBall();
      } else if (meshRef.current.position.y < -2) {
        // Missed
        onShoot(false);
        resetBall();
      }
    }
  });

  const resetBall = () => {
    setIsFlying(false);
    setVelocity(null);
    if (meshRef.current) {
      meshRef.current.position.set(0, -1, 0);
    }
  };

  const handlePointerDown = (e: any) => {
    e.stopPropagation();
    setIsDragging(true);
    setStartY(e.clientY);
  };

  const handlePointerUp = (e: any) => {
    if (isDragging && !isFlying) {
      const deltaY = startY - e.clientY;
      const power = Math.min(deltaY / 100, 3);
      
      if (power > 0.3) {
        const angle = 45 * (Math.PI / 180);
        setVelocity(new Vector3(
          0,
          power * Math.sin(angle) * 0.15,
          power * Math.cos(angle) * 0.15
        ));
        setIsFlying(true);
      }
    }
    setIsDragging(false);
  };

  return (
    <Sphere
      ref={meshRef}
      args={[0.3, 32, 32]}
      position={[0, -1, 0]}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      <meshStandardMaterial color="#ff6b35" roughness={0.5} metalness={0.2} />
    </Sphere>
  );
}

function Hoop() {
  const texture = useTexture(leagueLogo);
  
  return (
    <group position={[0, 3.5, 5]}>
      {/* Backboard with logo */}
      <Box args={[2, 1.5, 0.1]} position={[0, 0, 0]}>
        <meshStandardMaterial map={texture} />
      </Box>
      
      {/* Rim */}
      <Cylinder args={[0.75, 0.75, 0.05, 32]} position={[0, -0.5, 0.4]} rotation={[0, 0, 0]}>
        <meshStandardMaterial color="#ff6b35" metalness={0.8} roughness={0.2} />
      </Cylinder>
      
      {/* Net */}
      <Cylinder args={[0.7, 0.5, 0.8, 16, 1, true]} position={[0, -0.9, 0.4]}>
        <meshStandardMaterial color="#ffffff" wireframe opacity={0.5} transparent />
      </Cylinder>
      
      {/* Pole */}
      <Cylinder args={[0.1, 0.1, 3.5, 16]} position={[0, -1.75, -0.5]}>
        <meshStandardMaterial color="#333333" metalness={0.6} roughness={0.4} />
      </Cylinder>
    </group>
  );
}

function Court() {
  return (
    <>
      {/* Floor */}
      <Box args={[10, 0.1, 12]} position={[0, -3, 3]}>
        <meshStandardMaterial color="#8b4513" />
      </Box>
      
      {/* Court lines */}
      <Box args={[0.05, 0.11, 6]} position={[0, -2.94, 3]}>
        <meshStandardMaterial color="#ffffff" />
      </Box>
    </>
  );
}

const Basketball3DGame = () => {
  const { toast } = useToast();
  const [score, setScore] = useState(0);

  const handleShoot = (success: boolean) => {
    if (success) {
      setScore(prev => prev + 2);
      toast({
        title: "🎯 Попадание!",
        description: "+2 очка",
      });
    } else {
      toast({
        title: "😢 Промах",
        description: "Попробуй еще раз!",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="relative w-full h-[500px] bg-gradient-to-b from-background to-card rounded-lg overflow-hidden border border-border">
      {/* Score display */}
      <div className="absolute top-4 left-4 z-10 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
        <p className="text-sm text-muted-foreground">Очки</p>
        <p className="text-3xl font-bold text-primary">{score}</p>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
        <p className="text-xs text-center text-muted-foreground">
          Свайпай мяч вверх для броска
        </p>
      </div>

      <Canvas camera={{ position: [0, 0, -3], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[0, 3, 0]} intensity={0.5} />
        
        <Ball onShoot={handleShoot} />
        <Hoop />
        <Court />
      </Canvas>
    </div>
  );
};

export default Basketball3DGame;
