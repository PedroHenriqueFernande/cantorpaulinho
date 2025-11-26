import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CustomVideoPlayer from "./CustomVideoPlayer";

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

        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full mx-auto" style={{ maxWidth: '345px' }}>
            <CarouselContent>
              {videos.map((video, index) => (
                <CarouselItem key={index}>
                  <div className="rounded-2xl shadow-soft overflow-hidden border border-border hover:shadow-hover transition-smooth">
                    <AspectRatio ratio={9 / 16}>
                      <CustomVideoPlayer
                        src={video}
                        className="w-full h-full object-cover rounded-2xl"
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
        <div className="hidden md:grid md:grid-cols-5 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <div key={index} className="rounded-2xl shadow-soft overflow-hidden border border-border hover:shadow-hover transition-smooth">
              <AspectRatio ratio={9 / 16}>
                <CustomVideoPlayer
                  src={video}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shows;
