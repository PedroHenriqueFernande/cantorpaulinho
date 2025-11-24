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

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="group overflow-hidden rounded-2xl shadow-soft hover:shadow-hover transition-smooth">
                  <img
                    src={image}
                    alt={`Show ao vivo de Paulinho Vasconcellos ${index + 1}`}
                    className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-smooth"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery;
