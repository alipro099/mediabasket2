import { Card } from "@/components/ui/card";

interface PhoneMockupProps {
  label: string;
}

const PhoneMockup = ({ label }: PhoneMockupProps) => {
  return (
    <div className="flex flex-col items-center space-y-3 animate-fade-in">
      <div className="relative w-full max-w-[200px] aspect-[9/19] bg-card border-4 border-border rounded-[2rem] p-2 shadow-xl">
        <div className="w-full h-full bg-secondary/50 rounded-[1.5rem] flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary/50" />
        </div>
      </div>
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
    </div>
  );
};

export default PhoneMockup;
