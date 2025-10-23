import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import leagueLogo from "@/assets/league-logo.jpg";

interface Task {
  id: number;
  title: string;
  description: string;
  points: number;
  completed: boolean;
}

const Tasks = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Подпишись на телеграм канал",
      description: "Подпишись на наш официальный канал",
      points: 50,
      completed: false,
    },
    {
      id: 2,
      title: "Поделись приложением",
      description: "Отправь мини-апп 3 друзьям",
      points: 100,
      completed: false,
    },
    {
      id: 3,
      title: "Собери команду в фэнтези",
      description: "Создай свою первую команду",
      points: 150,
      completed: false,
    },
    {
      id: 4,
      title: "Посети игру",
      description: "Приди на любую игру сезона",
      points: 200,
      completed: false,
    },
    {
      id: 5,
      title: "Сделай 10 бросков",
      description: "Забрось 10 мячей в кольцо",
      points: 75,
      completed: false,
    },
  ]);

  const totalPoints = tasks.reduce((sum, task) => sum + (task.completed ? task.points : 0), 0);

  const completeTask = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: true } : task
    ));
    
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      toast({
        title: "✅ Задание выполнено!",
        description: `+${task.points} очков`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-card border-b border-border">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/game")}
            className="shrink-0"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <img src={leagueLogo} alt="Лига" className="h-10 w-10 rounded-lg" />
          <div className="flex-1">
            <h1 className="text-lg font-bold text-foreground">Задания</h1>
            <p className="text-xs text-muted-foreground">Выполняй и получай очки</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Всего</p>
            <p className="text-2xl font-bold text-primary">{totalPoints}</p>
          </div>
        </div>
      </header>

      {/* Tasks List */}
      <div className="max-w-md mx-auto px-4 py-6 space-y-3">
        {tasks.map((task) => (
          <Card 
            key={task.id} 
            className={`transition-all ${task.completed ? 'opacity-60 border-primary/30' : 'hover:border-primary'}`}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <CardTitle className="text-base flex items-center gap-2">
                    {task.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 text-muted-foreground shrink-0" />
                    )}
                    <span className={task.completed ? "line-through text-muted-foreground" : ""}>
                      {task.title}
                    </span>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1 ml-7">
                    {task.description}
                  </p>
                </div>
                <Badge 
                  variant="outline" 
                  className={task.completed ? "bg-primary/10 text-primary" : ""}
                >
                  +{task.points}
                </Badge>
              </div>
            </CardHeader>
            {!task.completed && (
              <CardContent className="pt-0">
                <Button
                  onClick={() => completeTask(task.id)}
                  className="w-full"
                  size="sm"
                >
                  Выполнить
                </Button>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
