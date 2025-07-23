'use client';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background stars effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <span className="text-6xl mb-4 block">🛸</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            ЗЕМЛЯ ТУР
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-cyan-300">
            Покажи людям, кто тут настоящий доминирующий вид!
          </h2>
        </div>
        
        <div className="space-y-4 mb-12">
          <p className="text-xl md:text-2xl text-yellow-300">
            🌍 Отдохни на планете, где воздух бесплатный (пока что)
          </p>
          <p className="text-lg md:text-xl text-green-300">
            ⭐ Единственная планета с танцующими двуногими существами
          </p>
          <p className="text-lg md:text-xl text-pink-300">
            🎭 Наблюдай за странными ритуалами "работы" и "отдыха"
          </p>
        </div>
        
        <Button 
          size="lg" 
          className="text-xl px-8 py-6 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
        >
          🛸 НЛО? Нет, бронирование включено! 🛸
        </Button>
        
        <div className="mt-8 text-sm text-gray-400">
          * Гарантируем 99.7% выживаемость при посадке
        </div>
      </div>
      
      <style jsx>{`
        .stars {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="0.5" fill="white"/><circle cx="80" cy="40" r="0.3" fill="white"/><circle cx="40" cy="60" r="0.4" fill="white"/><circle cx="90" cy="80" r="0.2" fill="white"/><circle cx="10" cy="90" r="0.6" fill="white"/></svg>') repeat;
          animation: move-stars 50s linear infinite;
        }
        
        .twinkling {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="30" cy="30" r="0.3" fill="yellow" opacity="0.8"/><circle cx="70" cy="70" r="0.2" fill="cyan" opacity="0.6"/></svg>') repeat;
          animation: move-twinkling 100s linear infinite;
        }
        
        @keyframes move-stars {
          from { transform: translateY(0px); }
          to { transform: translateY(-100px); }
        }
        
        @keyframes move-twinkling {
          from { transform: translateY(0px); }
          to { transform: translateY(-200px); }
        }
      `}</style>
    </section>
  );
}