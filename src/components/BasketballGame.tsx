import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface Task {
  id: number;
  title: string;
  points: number;
  completed: boolean;
}

const BasketballGame = () => {
  const [score, setScore] = useState(0);
  const [ballPosition, setBallPosition] = useState({ x: 50, y: 70 });
  const [isThrowingBall, setIsThrowingBall] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Подписаться на Telegram", points: 50, completed: false },
    { id: 2, title: "Пригласить 3 друзей", points: 100, completed: false },
    { id: 3, title: "Посмотреть 5 видео", points: 75, completed: false },
    { id: 4, title: "Поделиться в соцсетях", points: 60, completed: false },
  ]);

  const throwBall = () => {
    if (isThrowingBall) return;
    
    setIsThrowingBall(true);
    
    // Simulate ball trajectory
    const randomSuccess = Math.random() > 0.4; // 60% success rate
    
    if (randomSuccess) {
      setTimeout(() => {
        setBallPosition({ x: 50, y: 15 });
        setTimeout(() => {
          setScore(prev => prev + 10);
          toast.success("Попадание! +10 очков");
          resetBall();
        }, 300);
      }, 400);
    } else {
      setTimeout(() => {
        setBallPosition({ x: 30 + Math.random() * 40, y: 30 });
        toast.error("Мимо! Попробуй еще раз");
        resetBall();
      }, 400);
    }
  };

  const resetBall = () => {
    setTimeout(() => {
      setBallPosition({ x: 50, y: 70 });
      setIsThrowingBall(false);
    }, 500);
  };

  const completeTask = (taskId: number) => {
    setTasks(prev => prev.map(task => {
      if (task.id === taskId && !task.completed) {
        setScore(prevScore => prevScore + task.points);
        toast.success(`Задание выполнено! +${task.points} очков`);
        return { ...task, completed: true };
      }
      return task;
    }));
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Game Section */}
      <Card className="bg-card border-border">
        <CardContent className="p-8">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold text-primary mb-2">
              Счет: {score}
            </h3>
            <p className="text-muted-foreground">Попади в кольцо!</p>
          </div>
          
          {/* Game Area */}
          <div className="relative w-full aspect-square bg-secondary/50 rounded-2xl overflow-hidden border-2 border-primary/30">
            {/* Basketball Hoop */}
            <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-24 h-3 bg-primary rounded-full shadow-lg">
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-20 h-20 border-4 border-primary/50 rounded-full" />
            </div>
            
            {/* Basketball */}
            <div 
              className={`absolute w-12 h-12 bg-primary rounded-full transition-all duration-500 shadow-xl ${isThrowingBall ? 'scale-90' : 'scale-100'}`}
              style={{
                left: `${ballPosition.x}%`,
                top: `${ballPosition.y}%`,
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 0 20px rgba(0, 230, 118, 0.5)',
              }}
            >
              <div className="w-full h-full rounded-full border-2 border-background" style={{
                background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)) 50%, transparent 50%)',
              }} />
            </div>
          </div>
          
          <Button 
            onClick={throwBall}
            disabled={isThrowingBall}
            className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 text-lg"
          >
            {isThrowingBall ? "Бросаем..." : "Бросить мяч"}
          </Button>
        </CardContent>
      </Card>

      {/* Tasks Section */}
      <Card className="bg-card border-border">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Задания
          </h3>
          
          <div className="space-y-4">
            {tasks.map(task => (
              <div 
                key={task.id}
                className={`p-4 rounded-xl border-2 transition-all ${
                  task.completed 
                    ? 'bg-primary/10 border-primary/50' 
                    : 'bg-secondary/50 border-border hover:border-primary/30'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-foreground">{task.title}</h4>
                  <span className="text-primary font-bold">+{task.points}</span>
                </div>
                
                <Button
                  onClick={() => completeTask(task.id)}
                  disabled={task.completed}
                  variant={task.completed ? "outline" : "default"}
                  className="w-full mt-2"
                >
                  {task.completed ? "✓ Выполнено" : "Выполнить"}
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-primary/10 rounded-xl border-2 border-primary/30">
            <p className="text-center text-muted-foreground text-sm">
              Зарабатывай очки за броски и выполнение заданий!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BasketballGame;
