import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Shows = () => {
  const videos = [
    "/555.mov",
    "/Video Paulinho 3.mp4",
    "/444.mov",
    "/Video Paulinho 4.mp4",
    "/1124.mp4",
  ];

  return (
    <section id="shows" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Shows ao vivo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sinta o ritmo, a energia e a alegria dos shows ao vivo.
          </p>
        </div>

        <Carousel className="w-full max-w-xl mx-auto">
          <CarouselContent>
            {videos.map((video, index) => (
              <CarouselItem key={index}>
                <div className="rounded-2xl shadow-soft overflow-hidden border border-border hover:shadow-hover transition-smooth">
                  <AspectRatio ratio={9 / 16}>
                    <video controls preload="metadata" className="w-full h-full object-cover rounded-2xl">
                      <source src={`${video}#t=0.1`} type="video/mp4" />

                    </video>
                  </AspectRatio>
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

export default Shows;
