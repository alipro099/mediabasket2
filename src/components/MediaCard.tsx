import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

interface MediaCardProps {
  title: string;
  description: string;
}

const MediaCard = ({ title, description }: MediaCardProps) => {
  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:glow-green animate-fade-in cursor-pointer group">
      <CardContent className="p-0">
        <div className="relative aspect-video bg-secondary flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center group-hover:bg-primary/30 transition-all group-hover:scale-110">
            <Play className="w-8 h-8 text-primary fill-primary" />
          </div>
        </div>
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-bold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MediaCard;
