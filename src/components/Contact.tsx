import { Button } from "@/components/ui/button";
import { Instagram, Briefcase } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contato"
      className="relative py-20 px-4 overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(rgba(20, 30, 100, 0.6), rgba(20, 30, 100, 0.6)),
          url('/Novo fundo.jpeg')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto max-w-4xl text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
            Contratações & Contato
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Fale com a equipe para datas, valores e formato de show.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
          <Button
            asChild
            variant="hero-outline"
            size="lg"
            className="text-lg px-8 py-6"
          >
            <a
              href="https://wa.me/61983783820?text=Ol%C3%A1%2C%20gostaria%20de%20marcar%20um%20show!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <img src="/whatsapp-chama-icone-psd-editavel.png" alt="WhatsApp" className="w-5 h-5" />
              WhatsApp
            </a>
          </Button>

          <Button
            asChild
            variant="hero-outline"
            size="lg"
            className="text-lg px-8 py-6"
          >
            <a
              href="https://www.instagram.com/CantorPaulinhoo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
          </Button>

          <Button
            asChild
            variant="hero-outline"
            size="lg"
            className="text-lg px-8 py-6"
          >
            <a
              href="https://drive.google.com/drive/folders/1ljq6ctFonzgiVklJpx3IryjZ4l85lgaJ?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <Briefcase className="w-5 h-5" />
              Fotos Para Contratantes
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
