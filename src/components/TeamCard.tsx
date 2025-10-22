import { Card, CardContent } from "@/components/ui/card";

interface TeamCardProps {
  name: string;
  icon: string;
}

const TeamCard = ({ name, icon }: TeamCardProps) => {
  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:glow-green animate-fade-in cursor-pointer">
      <CardContent className="p-6 flex flex-col items-center justify-center space-y-4 min-h-[200px]">
        <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center text-4xl">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-center text-foreground">{name}</h3>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
