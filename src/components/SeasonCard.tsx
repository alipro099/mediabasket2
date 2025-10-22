import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SeasonCardProps {
  season: number;
  year: string;
  status?: "past" | "current";
}

const SeasonCard = ({ season, year, status = "past" }: SeasonCardProps) => {
  return (
    <Card className={`bg-card border-border transition-all duration-300 ${status === "current" ? "border-primary glow-green" : "hover:border-primary/50"} animate-fade-in`}>
      <CardContent className="p-6 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-foreground">Сезон {season}</h3>
          {status === "current" && (
            <Badge className="bg-primary text-primary-foreground">Текущий</Badge>
          )}
        </div>
        <p className="text-muted-foreground">{year}</p>
      </CardContent>
    </Card>
  );
};

export default SeasonCard;
