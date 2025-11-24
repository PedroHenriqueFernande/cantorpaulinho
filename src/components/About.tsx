import { MapPin, Users, Clock } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Sobre Paulinho Vasconcellos
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Meu nome é Paulo Santos de Vasconcellos Filho, mais conhecido como Cantor Paulinho Vasconcellos. Nascido no Rio de Janeiro em 30/12, sou filho e irmão de músico, então a paixão pela música vem de berço. Com 13 anos comecei a tocar cavaquinho e, aos 14, iniciei minhas apresentações nos palcos de Brasília. Fui vocalista de algumas bandas de pagode em Brasília, como Papel Marche, Grupo Moleque e Sabor do Samba. Fui integrante da banda de axé KaiPrak, juntamente com meu irmão, por sete anos, porém minha paixão é o pagode. Desde 2022, estou em carreira solo, onde já tive a oportunidade de abrir shows para Neguinho da Beija-Flor, Chrigor (Exaltasamba), Márcio (Art Popular) e Salgadinho (Katinguelê). Em 2024, gravei meu primeiro audiovisual em Sobradinho-DF, no qual fui muito bem acolhido pelo público de Brasília. Desde então, sigo fazendo meus shows e trazendo uma energia vibrante em todos os palcos por onde passo. Para mim, eu não apenas canto, mas me expresso com amor ao que faço.
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-soft p-8 space-y-6 border border-border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">De onde sou</p>
                <p className="font-semibold text-foreground">Brasília, DF</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Formato</p>
                <p className="font-semibold text-foreground">Solo / Banda</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">O que canto</p>
                <p className="font-semibold text-foreground">Pagode/Samba/Axé</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
