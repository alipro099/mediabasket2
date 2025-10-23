import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Sphere, Cylinder, Box, useTexture } from "@react-three/drei";
import { Group, Vector3 } from "three";
import { useToast } from "@/hooks/use-toast";
import leagueLogo from "@/assets/league-logo.jpg";

interface BallProps {
  onShoot: (success: boolean) => void;
}

function Ball({ onShoot }: BallProps) {
  const ballRef = useRef<Group>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [velocity, setVelocity] = useState<Vector3 | null>(null);
  const [isFlying, setIsFlying] = useState(false);

  useFrame(() => {
    if (ballRef.current && velocity && isFlying) {
      ballRef.current.position.add(velocity);
      velocity.y -= 0.02; // gravity
      
      // Check if ball reached hoop height and distance
      const distanceToHoop = Math.sqrt(
        Math.pow(ballRef.current.position.x, 2) + 
        Math.pow(ballRef.current.position.z - 5, 2)
      );
      
      if (ballRef.current.position.y > 3 && ballRef.current.position.y < 4 && distanceToHoop < 0.8) {
        // Success!
        onShoot(true);
        resetBall();
      } else if (ballRef.current.position.y < -2) {
        // Missed
        onShoot(false);
        resetBall();
      }
    }
  });

  const resetBall = () => {
    setIsFlying(false);
    setVelocity(null);
    if (ballRef.current) {
      ballRef.current.position.set(0, -1, 0);
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
    <group ref={ballRef} position={[0, -1, 0]}>
      <Sphere
        args={[0.3, 32, 32]}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        <meshStandardMaterial 
          color="hsl(145, 100%, 35%)" 
          roughness={0.6} 
          metalness={0.1}
        />
      </Sphere>
      {/* Basketball lines */}
      <mesh rotation={[0, 0, 0]}>
        <torusGeometry args={[0.3, 0.015, 8, 32, Math.PI]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.4} />
      </mesh>
      <mesh rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[0.3, 0.015, 8, 32, Math.PI]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.4} />
      </mesh>
    </group>
  );
}

function Hoop() {
  const texture = useTexture(leagueLogo);
  
  return (
    <group position={[0, 3.5, 5]}>
      {/* Backboard with red border */}
      <Box args={[2.2, 1.7, 0.05]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#ff0000" />
      </Box>
      
      {/* Inner white backboard with logo */}
      <Box args={[1.9, 1.4, 0.06]} position={[0, 0, 0.06]}>
        <meshStandardMaterial map={texture} color="#ffffff" />
      </Box>
      
      {/* Rim attachment */}
      <Box args={[0.3, 0.2, 0.1]} position={[0, -0.7, 0.15]}>
        <meshStandardMaterial color="#ff0000" />
      </Box>
      
      {/* Rim */}
      <Cylinder args={[0.75, 0.75, 0.05, 32]} position={[0, -0.9, 0.4]} rotation={[0, 0, 0]}>
        <meshStandardMaterial color="#ff0000" metalness={0.8} roughness={0.2} />
      </Cylinder>
      
      {/* Net */}
      <Cylinder args={[0.7, 0.5, 0.8, 16, 1, true]} position={[0, -1.3, 0.4]}>
        <meshStandardMaterial color="#ffffff" wireframe opacity={0.5} transparent />
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
    <div className="relative w-full h-screen bg-gradient-to-b from-background to-card overflow-hidden">
      {/* Score display */}
      <div className="absolute top-20 left-4 z-10 bg-card/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
        <p className="text-sm text-muted-foreground">Очки</p>
        <p className="text-3xl font-bold text-primary">{score}</p>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 bg-card/70 backdrop-blur-sm px-6 py-3 rounded-lg border border-border">
        <p className="text-sm text-center text-foreground font-medium">
          Свайпай мяч вверх для броска 🏀
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
