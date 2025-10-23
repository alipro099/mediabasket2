import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Heart, MessageCircle, MapPin } from "lucide-react";
import leagueLogo from "@/assets/league-logo.jpg";

const Meet = () => {
  const users = [
    { id: 1, name: "Алексей", age: 25, location: "Москва", interests: ["Баскетбол", "NBA", "Стритбол"], initials: "АЛ" },
    { id: 2, name: "Мария", age: 23, location: "Санкт-Петербург", interests: ["Баскетбол", "Фэнтези", "Игры"], initials: "МА" },
    { id: 3, name: "Дмитрий", age: 28, location: "Казань", interests: ["NBA", "Стритбол", "Данки"], initials: "ДМ" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-card border-b border-border">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center gap-3">
          <img src={leagueLogo} alt="Лига" className="h-10 w-10 rounded-lg" />
          <div>
            <h1 className="text-lg font-bold text-foreground">Знакомства</h1>
            <p className="text-xs text-muted-foreground">Найди единомышленников</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 py-6 space-y-4">
        {users.map((user) => (
          <Card key={user.id} className="overflow-hidden hover:border-primary transition-colors">
            <CardHeader className="pb-3">
              <div className="flex items-start gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarFallback className="bg-primary/20 text-primary text-lg font-bold">
                    {user.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-lg">
                    {user.name}, {user.age}
                  </CardTitle>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                    <MapPin className="w-3 h-3" />
                    <span>{user.location}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {user.interests.map((interest, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {interest}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1" size="sm">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  Написать
                </Button>
                <Button variant="default" className="flex-1" size="sm">
                  <Heart className="w-4 h-4 mr-1" />
                  Лайк
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Empty State */}
        <Card className="border-dashed">
          <CardContent className="py-8 text-center">
            <p className="text-sm text-muted-foreground">
              Больше фанатов баскетбола появится скоро!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Meet;
