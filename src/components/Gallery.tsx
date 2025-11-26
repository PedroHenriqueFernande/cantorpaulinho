import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Gallery = () => {
  const images = [
    "/Imagem Paulinho 4.jpeg",
    "/Imagem Paulinho 2.jpeg",
    "/Imagem Paulinho 5.jpeg",
    "/Imagem Paulinho 6.jpeg",
    "/Imagem Paulinho 7.jpeg",
    "/novas 1.jfif",
    "/novas 2.jfif",
    "/novas 3.jpeg",
  ];

  return (
    <section id="galeria" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            No Palco
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada clique conta um pedaço da vibe e da paixão pelo palco.
          </p>
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full mx-auto" style={{ maxWidth: '345px' }}>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="overflow-hidden rounded-2xl shadow-soft hover:shadow-hover transition-smooth">
                    <AspectRatio ratio={9 / 16}>
                      <img
                        src={image}
                        alt={`Show ao vivo de Paulinho Vasconcellos ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-2xl shadow-soft hover:shadow-hover transition-smooth">
              <AspectRatio ratio={9 / 16}>
                <img
                  src={image}
                  alt={`Show ao vivo de Paulinho Vasconcellos ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
