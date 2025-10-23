import Basketball3DGame from "@/components/Basketball3DGame";
import { Button } from "@/components/ui/button";
import { ListTodo } from "lucide-react";
import { useNavigate } from "react-router-dom";
import leagueLogo from "@/assets/league-logo.jpg";

const Game = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 bg-card/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={leagueLogo} alt="Лига" className="h-10 w-10 rounded-lg" />
            <div>
              <h1 className="text-lg font-bold text-foreground">Игра</h1>
              <p className="text-xs text-muted-foreground">Зарабатывай очки</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/tasks")}
            className="gap-2"
          >
            <ListTodo className="w-4 h-4" />
            Задания
          </Button>
        </div>
      </header>

      {/* Game Content - Full Screen */}
      <Basketball3DGame />
    </div>
  );
};

export default Game;
