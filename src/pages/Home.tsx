import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";
import seasonLogo from "@/assets/season-logo.jpg";
import leagueLogo from "@/assets/league-logo.jpg";

const Home = () => {
  const matches = [
    {
      id: 1,
      team1: "Команда A",
      team2: "Команда B",
      date: "25 Октября",
      time: "19:00",
      location: "Арена Север",
      status: "upcoming"
    },
    {
      id: 2,
      team1: "Команда C",
      team2: "Команда D",
      date: "26 Октября",
      time: "20:00",
      location: "Арена Юг",
      status: "upcoming"
    },
    {
      id: 3,
      team1: "Команда E",
      team2: "Команда F",
      date: "27 Октября",
      time: "18:30",
      location: "Центральная арена",
      status: "upcoming"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-card border-b border-border">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center gap-3">
          <img src={leagueLogo} alt="Лига" className="h-10 w-10 rounded-lg" />
          <div>
            <h1 className="text-lg font-bold text-foreground">Media Basket</h1>
            <p className="text-xs text-muted-foreground">Сезон 6 • Осень 2025</p>
          </div>
        </div>
      </header>

      {/* Season Banner */}
      <div className="max-w-md mx-auto px-4 py-6">
        <img 
          src={seasonLogo} 
          alt="2K25 Сезон 6" 
          className="w-full rounded-2xl shadow-lg"
        />
      </div>

      {/* Matches Section */}
      <div className="max-w-md mx-auto px-4 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-foreground">Расписание игр</h2>
          <Badge variant="secondary">3 матча</Badge>
        </div>

        <div className="space-y-3">
          {matches.map((match) => (
            <Card key={match.id} className="overflow-hidden hover:border-primary transition-colors">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-bold">
                    {match.team1} vs {match.team2}
                  </CardTitle>
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    Скоро
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{match.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{match.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{match.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
