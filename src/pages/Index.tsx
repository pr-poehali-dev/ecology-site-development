import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        
        <section className="py-16 bg-eco-bg">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-eco-dark sm:text-4xl">
                Как вы можете помочь?
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Небольшие действия каждого человека складываются в большие перемены.
                Вот несколько простых шагов, которые может сделать каждый.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-eco-dark mb-2">1</div>
                <h3 className="text-lg font-semibold mb-2">Сократите использование пластика</h3>
                <p className="text-gray-600">
                  Используйте многоразовые бутылки, сумки и контейнеры вместо одноразовых пластиковых.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-eco-dark mb-2">2</div>
                <h3 className="text-lg font-semibold mb-2">Экономьте энергию</h3>
                <p className="text-gray-600">
                  Выключайте неиспользуемые приборы и свет, используйте энергосберегающие лампы.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-eco-dark mb-2">3</div>
                <h3 className="text-lg font-semibold mb-2">Сортируйте мусор</h3>
                <p className="text-gray-600">
                  Разделение отходов позволяет перерабатывать материалы и снижать количество мусора.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-eco-dark sm:text-4xl mb-6">
              Присоединяйтесь к движению за экологию!
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Экологические проблемы касаются каждого из нас. Вместе мы можем изменить мир к лучшему!
            </p>
            <a 
              href="#" 
              className="inline-flex items-center justify-center rounded-md bg-eco px-6 py-3 text-md font-medium text-white shadow transition-colors hover:bg-eco-dark focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Стать эко-волонтером
            </a>
          </div>
        </section>
      </main>
      
      <footer className="border-t py-6 md:py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <p className="text-center text-sm text-gray-500 md:text-left">
                &copy; 2025 ЭкоМир. Итоговый проект по информатике для 9 класса.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
