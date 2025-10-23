import { Home, Gamepad2, Trophy, Users } from "lucide-react";
import { NavLink } from "react-router-dom";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="max-w-md mx-auto flex items-center justify-around h-16">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-lg transition-colors ${
              isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`
          }
        >
          <Home className="w-5 h-5" />
          <span className="text-xs font-medium">Дом</span>
        </NavLink>

        <NavLink
          to="/game"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-lg transition-colors ${
              isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`
          }
        >
          <Gamepad2 className="w-5 h-5" />
          <span className="text-xs font-medium">Игра</span>
        </NavLink>

        <NavLink
          to="/fantasy"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-lg transition-colors ${
              isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`
          }
        >
          <Trophy className="w-5 h-5" />
          <span className="text-xs font-medium">Фэнтези</span>
        </NavLink>

        <NavLink
          to="/meet"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-lg transition-colors ${
              isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`
          }
        >
          <Users className="w-5 h-5" />
          <span className="text-xs font-medium">Знакомства</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNav;
