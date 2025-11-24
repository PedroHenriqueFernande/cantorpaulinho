import { Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";


const Hero = () => {
  return (
    <section
      className="relative pt-32 pb-20 px-4 overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(rgba(20, 30, 100, 0.6), rgba(20, 30, 100, 0.6)),
          url('/Novo fundo.jpeg')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto flex justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center justify-items-center">
          <div className="space-y-8 text-center z-10">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
                Paulinho Vasconcellos
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium">
                Pagode, Samba e Axé com voz marcante e presença de palco contagiante.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                variant="hero-outline"
                size="lg"
                className="text-lg px-8 py-6"
              >
                <a
                  href="https://wa.me/5561983783820?text=Ol%C3%A1%2C%20gostaria%20de%20marcar%20um%20show!"
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
            </div>
          </div>

          <div className="relative w-full mt-12 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 items-center">
              <div className="col-span-1">
                <img
                  src="/Imagem Paulinho 1.jpeg"
                  alt="Paulinho Vasconcellos cantando no palco"
                  className="rounded-2xl shadow-hover w-full h-auto max-h-[450px] object-cover lg:transform lg:scale-110"
                />
              </div>
              <div className="col-span-1">
                <img
                  src="/Imagem Paulinho 3.jpeg"
                  alt="Paulinho Vasconcellos em show ao vivo"
                  className="rounded-2xl shadow-hover w-full h-auto max-h-[450px] object-cover lg:transform lg:scale-110 lg:translate-y-12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20 pointer-events-none" />
    </section>
  );
};

export default Hero;
