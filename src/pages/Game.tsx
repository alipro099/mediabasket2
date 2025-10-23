import BasketballGame from "@/components/BasketballGame";
import leagueLogo from "@/assets/league-logo.jpg";

const Game = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-card border-b border-border">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center gap-3">
          <img src={leagueLogo} alt="Лига" className="h-10 w-10 rounded-lg" />
          <div>
            <h1 className="text-lg font-bold text-foreground">Игра и задания</h1>
            <p className="text-xs text-muted-foreground">Зарабатывай очки</p>
          </div>
        </div>
      </header>

      {/* Game Content */}
      <div className="max-w-md mx-auto px-4 py-6">
        <BasketballGame />
      </div>
    </div>
  );
};

export default Game;
