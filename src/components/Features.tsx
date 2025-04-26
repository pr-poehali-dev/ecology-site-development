import { Recycle, Droplets, Leaf } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-eco-dark sm:text-4xl">
            Ключевые экологические проблемы
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Современный мир столкнулся с рядом серьезных экологических вызовов, 
            требующих немедленного внимания.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-eco-light/20 transition-all hover:shadow-md hover:scale-[1.01]">
            <CardHeader className="pb-2">
              <Recycle className="h-10 w-10 text-eco mb-2" />
              <CardTitle className="text-xl text-eco-dark">Загрязнение пластиком</CardTitle>
              <CardDescription>
                Пластиковые отходы наносят непоправимый вред экосистемам Земли
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Ежегодно в мировой океан попадает около 8 миллионов тонн пластика,
                что угрожает морской флоре и фауне. Микропластик обнаружен даже
                в самых отдаленных уголках планеты.
              </p>
            </CardContent>
          </Card>
          <Card className="border-eco-light/20 transition-all hover:shadow-md hover:scale-[1.01]">
            <CardHeader className="pb-2">
              <Droplets className="h-10 w-10 text-eco mb-2" />
              <CardTitle className="text-xl text-eco-dark">Истощение водных ресурсов</CardTitle>
              <CardDescription>
                Пресная вода становится всё более дефицитным ресурсом
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Загрязнение водоемов промышленными стоками, чрезмерное использование
                подземных вод и изменение климата приводят к глобальной нехватке 
                питьевой воды во многих регионах мира.
              </p>
            </CardContent>
          </Card>
          <Card className="border-eco-light/20 transition-all hover:shadow-md hover:scale-[1.01]">
            <CardHeader className="pb-2">
              <Leaf className="h-10 w-10 text-eco mb-2" />
              <CardTitle className="text-xl text-eco-dark">Исчезновение лесов</CardTitle>
              <CardDescription>
                "Лёгкие планеты" нуждаются в нашей защите
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Ежегодно исчезает около 10 миллионов гектаров лесных массивов.
                Это приводит к потере биоразнообразия, эрозии почв и усугублению
                климатических изменений.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
