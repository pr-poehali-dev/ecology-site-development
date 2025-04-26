import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-eco-bg py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-eco-dark">
                Забота о планете начинается с каждого из нас
              </h1>
              <p className="max-w-[600px] text-gray-700 md:text-xl">
                Наш проект посвящен экологическим проблемам современности и способам их решения. 
                Вместе мы можем сделать мир чище и безопаснее для будущих поколений.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-eco hover:bg-eco-dark">Узнать больше</Button>
              <Button variant="outline" className="border-eco text-eco hover:bg-eco-bg">
                Как помочь
              </Button>
            </div>
          </div>
          <div className="mx-auto lg:mr-0 w-full max-w-[500px] aspect-video rounded-xl overflow-hidden">
            <img
              alt="Экология планеты"
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
