'use client';
import { Button } from '@/components/ui/button';

export default function ViewEarthButton() {
  const scrollToAttractions = () => {
    document.getElementById('attractions')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 0, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 0, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
            animation: 'grid-pulse 4s ease-in-out infinite'
          }}
        ></div>
      </div>

      {/* Floating neon elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              backgroundColor: ['#ff00ff', '#00ffff', '#ffff00'][Math.floor(Math.random() * 3)],
              borderRadius: '50%',
              boxShadow: `0 0 20px currentColor`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Main title */}
        <div className="mb-12">
          <h2 
            className="text-6xl md:text-8xl font-black mb-8"
            style={{
              background: 'linear-gradient(45deg, #00ffff, #ff00ff, #ffff00, #00ffff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '400% 400%',
              animation: 'rainbow 3s ease infinite',
              textShadow: '0 0 30px #00ffff',
              fontFamily: 'Impact, Arial Black, sans-serif',
              letterSpacing: '0.1em'
            }}
          >
            ЗЕМЛЯ ЖДЁТ!
          </h2>
          
          {/* Retro info box */}
          <div className="bg-black border-4 border-cyan-400 p-6 mb-8 relative max-w-4xl mx-auto">
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-cyan-400"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-400"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-cyan-400"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-cyan-400"></div>
            
            <p className="text-2xl font-bold text-yellow-300 mb-4 font-mono">
               ПЛАНЕТА ПОЛНАЯ МЕМОВ И ХАОСА
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🌊</span>
                  <span className="text-white font-bold">71% ЖИДКОЙ ВОДЫ</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🧠</span>
                  <span className="text-white font-bold">"РАЗУМНАЯ" ЖИЗНЬ*</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🗣️</span>
                  <span className="text-white font-bold">7000+ ЯЗЫКОВ</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🍕</span>
                  <span className="text-white font-bold">ИЗОБРЕЛИ ПИЦЦУ!</span>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-400 mt-4 font-mono">
              * Разумность спорна, но очень весело наблюдать
            </p>
          </div>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-pink-600 to-purple-600 p-6 border-4 border-white transform rotate-2 hover:rotate-0 transition-transform">
            <div className="text-4xl mb-2">🎭</div>
            <div className="text-white font-black text-lg">СТРАННЫЕ РИТУАЛЫ</div>
            <div className="text-yellow-300 text-sm">"Работа", "Отдых", "Налоги"</div>
          </div>
          
          <div className="bg-gradient-to-br from-green-600 to-blue-600 p-6 border-4 border-white transform -rotate-2 hover:rotate-0 transition-transform">
            <div className="text-4xl mb-2">📱</div>
            <div className="text-white font-black text-lg">ТИКТОК В РЕАЛЬНОМ ВРЕМЕНИ</div>
            <div className="text-yellow-300 text-sm">Танцы 24/7!</div>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-600 to-red-600 p-6 border-4 border-white transform rotate-2 hover:rotate-0 transition-transform">
            <div className="text-4xl mb-2">🤡</div>
            <div className="text-white font-black text-lg">ПОЛИТИКА = МЕМЫ</div>
            <div className="text-yellow-300 text-sm">Лучше любого шоу!</div>
          </div>
        </div>
        
        {/* Main CTA Button */}
        <div className="relative">
          <Button 
            onClick={scrollToAttractions}
            className="relative bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white font-black py-8 px-16 text-3xl transform hover:scale-110 transition-all duration-300 border-4 border-white"
            style={{
              textShadow: '3px 3px 0px #000',
              boxShadow: '0 0 40px #ff00ff, inset 0 0 40px rgba(255,255,255,0.2)',
              animation: 'button-glow 2s infinite'
            }}
          >
            <span className="flex items-center gap-4">
              🌍 СМОТРЕТЬ ДОСТОПРИМЕЧАТЕЛЬНОСТИ
              <span 
                className="text-4xl"
                style={{
                  animation: 'arrow-bounce 1s infinite'
                }}
              >
                →
              </span>
            </span>
          </Button>
          
          {/* Button glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-30 blur-xl animate-pulse -z-10"></div>
        </div>
        
        {/* Bottom text */}
        <div className="mt-8">
          <div className="bg-black/80 border-2 border-yellow-400 p-4 inline-block">
            <p className="text-yellow-300 font-bold font-mono">
              ⚠️ ВНИМАНИЕ: Может вызвать неконтролируемый смех! ⚠️
            </p>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes grid-pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
        @keyframes rainbow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes button-glow {
          0%, 100% { box-shadow: 0 0 40px #ff00ff, inset 0 0 40px rgba(255,255,255,0.2); }
          50% { box-shadow: 0 0 60px #00ffff, inset 0 0 60px rgba(255,255,255,0.4); }
        }
        @keyframes arrow-bounce {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(10px); }
        }
      `}</style>
    </section>
  );
}