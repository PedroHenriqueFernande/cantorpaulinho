import { Music2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-md bg-primary flex items-center justify-center shadow-soft">
            <img src="/Logomarca_Paulinho-removebg-preview.png" alt="Logomarca Paulinho Vasconcellos" className="h-10 w-10" />
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("sobre")}
            className="text-foreground hover:text-primary transition-smooth font-medium"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("shows")}
            className="text-foreground hover:text-primary transition-smooth font-medium"
          >
            Shows
          </button>
          <button
            onClick={() => scrollToSection("galeria")}
            className="text-foreground hover:text-primary transition-smooth font-medium"
          >
            Galeria
          </button>
          <button
            onClick={() => scrollToSection("contato")}
            className="text-foreground hover:text-primary transition-smooth font-medium"
          >
            Contato
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            asChild
            className="hidden sm:inline-flex bg-primary hover:bg-accent text-primary-foreground shadow-soft hover:shadow-hover transition-smooth"
          >
            <a
              href="https://wa.me/5561983783820?text=Ol%C3%A1%2C%20quero%20contratar%20o%20Paulinho%20Vasconcellos%20para%20um%20show!"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contratar
            </a>
          </Button>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-sm border-b border-border shadow-lg">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-smooth font-medium text-left py-2"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("shows")}
              className="text-foreground hover:text-primary transition-smooth font-medium text-left py-2"
            >
              Shows
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="text-foreground hover:text-primary transition-smooth font-medium text-left py-2"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-smooth font-medium text-left py-2"
            >
              Contato
            </button>
            <Button
              asChild
              className="bg-primary hover:bg-accent text-primary-foreground shadow-soft hover:shadow-hover transition-smooth"
            >
              <a
                href="https://wa.me/5561983783820?text=Ol%C3%A1%2C%20quero%20contratar%20o%20Paulinho%20Vasconcellos%20para%20um%20show!"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contratar
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
