import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Users, Coins } from "lucide-react";
import { useState } from "react";
import leagueLogo from "@/assets/league-logo.jpg";

type Position = "Профессионал" | "Медиаигрок" | "Медиа";

interface Player {
  id: number;
  name: string;
  position: Position;
  price: number;
  team: string;
  selected: boolean;
}

const Fantasy = () => {
  const TOTAL_BUDGET = 1600;
  const [budget, setBudget] = useState(TOTAL_BUDGET);
  const [selectedPlayers, setSelectedPlayers] = useState<{
    [key in Position]?: Player;
  }>({});

  const players: Player[] = [
    { id: 1, name: "VUK", position: "Профессионал", price: 1000, team: "AUF", selected: false },
    { id: 2, name: "TY GLOVER", position: "Медиаигрок", price: 900, team: "BLATO", selected: false },
    { id: 3, name: "MOZZY", position: "Медиаигрок", price: 900, team: "ROCKET", selected: false },
    { id: 4, name: "RJRELOADED", position: "Медиаигрок", price: 800, team: "КАЧАЕТ РОССИЯ", selected: false },
    { id: 5, name: "PATRICK SANDER", position: "Медиа", price: 800, team: "AUF", selected: false },
    { id: 6, name: "SERGE", position: "Медиаигрок", price: 800, team: "AUF", selected: false },
    { id: 7, name: "ГАРИ", position: "Профессионал", price: 800, team: "GOATS", selected: false },
  ];

  const selectPlayer = (player: Player) => {
    const currentSelected = selectedPlayers[player.position];
    
    if (currentSelected?.id === player.id) {
      // Deselect
      setSelectedPlayers(prev => {
        const updated = { ...prev };
        delete updated[player.position];
        return updated;
      });
      setBudget(prev => prev + player.price);
    } else if (!currentSelected && budget >= player.price) {
      // Select
      setSelectedPlayers(prev => ({
        ...prev,
        [player.position]: player
      }));
      setBudget(prev => prev - player.price);
    } else if (currentSelected) {
      // Replace
      setBudget(prev => prev + currentSelected.price - player.price);
      setSelectedPlayers(prev => ({
        ...prev,
        [player.position]: player
      }));
    }
  };

  const isTeamComplete = Object.keys(selectedPlayers).length === 3;

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-card border-b border-border">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center gap-3">
          <img src={leagueLogo} alt="Лига" className="h-10 w-10 rounded-lg" />
          <div>
            <h1 className="text-lg font-bold text-foreground">Фэнтези</h1>
            <p className="text-xs text-muted-foreground">Собери свою команду</p>
          </div>
        </div>
      </header>

      {/* Budget Display */}
      <div className="max-w-md mx-auto px-4 py-4 bg-card/50 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Coins className="w-5 h-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Остаток бюджета</p>
              <p className="text-xl font-bold text-foreground">{budget}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">из {TOTAL_BUDGET}</p>
            <p className="text-sm text-primary">{Object.keys(selectedPlayers).length}/3 игроков</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Selected Team */}
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-primary" />
              Твоя команда
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {(["Профессионал", "Медиаигрок", "Медиа"] as Position[]).map(position => (
              <div 
                key={position} 
                className="flex items-center justify-between p-3 rounded-lg bg-card/50 border border-border"
              >
                <div>
                  <p className="text-xs text-muted-foreground">{position}</p>
                  <p className="font-semibold text-foreground">
                    {selectedPlayers[position]?.name || "Не выбран"}
                  </p>
                </div>
                {selectedPlayers[position] && (
                  <Badge variant="outline" className="text-primary">
                    {selectedPlayers[position]?.price}
                  </Badge>
                )}
              </div>
            ))}
            
            {isTeamComplete && (
              <Button className="w-full mt-4" variant="default">
                Подтвердить команду
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Available Players */}
        <div>
          <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
            <Star className="w-5 h-5 text-primary" />
            Доступные игроки
          </h2>
          <div className="space-y-2">
            {players.map((player) => {
              const isSelected = selectedPlayers[player.position]?.id === player.id;
              const canAfford = budget >= player.price || isSelected;
              
              return (
                <Card 
                  key={player.id} 
                  className={`transition-all ${
                    isSelected ? 'border-primary bg-primary/5' : 
                    !canAfford ? 'opacity-40' : 
                    'hover:border-primary'
                  }`}
                >
                  <CardContent className="py-3">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">{player.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {player.position}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{player.team}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className="bg-primary/20 text-primary border-primary/30">
                          {player.price}
                        </Badge>
                        <Button
                          size="sm"
                          variant={isSelected ? "default" : "outline"}
                          onClick={() => selectPlayer(player)}
                          disabled={!canAfford && !isSelected}
                        >
                          {isSelected ? "Убрать" : "Выбрать"}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Rules */}
        <Card className="border-dashed">
          <CardContent className="py-6 space-y-3">
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Правила фэнтези</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Бюджет: 1600 монет</li>
                  <li>• Выбери 3 игроков: Профессионал, Медиаигрок, Медиа</li>
                  <li>• Очки начисляются за реальные действия игроков</li>
                  <li>• Победитель получает призы!</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Fantasy;
