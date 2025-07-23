'use client';
import { Button } from '@/components/ui/button';

export default function ViewEarthButton() {
  const scrollToAttractions = () => {
    document.getElementById('attractions')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-purple-900 to-indigo-900">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-yellow-300">
            Готов исследовать эту странную планету?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Предупреждение: может вызвать неконтролируемый смех и желание переехать
          </p>
        </div>
        
        <div className="relative">
          <Button 
            onClick={scrollToAttractions}
            size="lg"
            className="text-2xl md:text-3xl px-12 py-8 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 hover:from-red-600 hover:via-yellow-600 hover:to-green-600 transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-green-500/25 animate-pulse"
          >
            👉 СКАНИРОВАТЬ ГРЯЗНЫЙ ШАР 🌍
          </Button>
          
          {/* Animated arrow pointing down */}
          <div className="mt-8 flex justify-center">
            <div className="animate-bounce">
              <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-black/30 rounded-lg p-4 border border-cyan-500/30">
            <span className="text-green-400">✅ Безопасно</span>
            <p className="text-gray-400">Вероятность выживания: 99.7%</p>
          </div>
          <div className="bg-black/30 rounded-lg p-4 border border-cyan-500/30">
            <span className="text-yellow-400">⚡ Быстро</span>
            <p className="text-gray-400">Всего 3 световых года в пути</p>
          </div>
          <div className="bg-black/30 rounded-lg p-4 border border-cyan-500/30">
            <span className="text-purple-400">🎭 Весело</span>
            <p className="text-gray-400">Гарантированные приключения</p>
          </div>
        </div>
      </div>
    </section>
  );
}