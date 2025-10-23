import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, TrendingUp, Users } from "lucide-react";
import leagueLogo from "@/assets/league-logo.jpg";

const Fantasy = () => {
  const topPlayers = [
    { rank: 1, name: "Игрок A", points: 1250, trend: "+15%" },
    { rank: 2, name: "Игрок B", points: 1180, trend: "+12%" },
    { rank: 3, name: "Игрок C", points: 1120, trend: "+8%" },
  ];

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

      {/* Content */}
      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* My Team Card */}
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl">Моя команда</CardTitle>
                <CardDescription>Ваш рейтинг: #42</CardDescription>
              </div>
              <Trophy className="w-8 h-8 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-3xl font-bold text-foreground">850</p>
                <p className="text-sm text-muted-foreground">Очков</p>
              </div>
              <Badge className="bg-primary/20 text-primary border-primary/30">
                <TrendingUp className="w-3 h-3 mr-1" />
                +5%
              </Badge>
            </div>
            <Button className="w-full" variant="default">
              Управлять командой
            </Button>
          </CardContent>
        </Card>

        {/* Top Players */}
        <div>
          <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
            <Star className="w-5 h-5 text-primary" />
            Топ игроков
          </h2>
          <div className="space-y-2">
            {topPlayers.map((player) => (
              <Card key={player.rank} className="hover:border-primary transition-colors">
                <CardContent className="py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        player.rank === 1 ? "bg-yellow-500/20 text-yellow-500" :
                        player.rank === 2 ? "bg-gray-400/20 text-gray-400" :
                        "bg-orange-500/20 text-orange-500"
                      }`}>
                        {player.rank}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{player.name}</p>
                        <p className="text-sm text-muted-foreground">{player.points} очков</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-primary border-primary/30">
                      {player.trend}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Create Team */}
        <Card className="border-dashed">
          <CardContent className="py-8 text-center space-y-4">
            <Users className="w-12 h-12 text-muted-foreground mx-auto" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Создай команду мечты</h3>
              <p className="text-sm text-muted-foreground">
                Выбери игроков и соревнуйся за призы
              </p>
            </div>
            <Button variant="outline" className="w-full">
              Начать
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Fantasy;
