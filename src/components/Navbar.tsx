import { useState } from "react";
import Icon from "@/components/ui/icon";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { id: "home", label: "Главная" },
  { id: "shved", label: "Швед" },
  { id: "khorkina", label: "Хоркина" },
  { id: "emelianenko", label: "Емельяненко" },
  { id: "kislyak", label: "Кисляк" },
  { id: "author", label: "Об авторе" },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <button
          onClick={() => onNavigate("home")}
          className="font-oswald text-xl font-bold tracking-widest uppercase"
        >
          <span className="text-gradient">БЕЛ</span>
          <span className="text-foreground opacity-60 text-sm font-medium ml-1">СПОРТ</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`nav-link ${currentPage === item.id ? "active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-card border-b border-border px-4 py-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { onNavigate(item.id); setMenuOpen(false); }}
              className={`nav-link text-left py-2 ${currentPage === item.id ? "active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
