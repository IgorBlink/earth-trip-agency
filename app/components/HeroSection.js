'use client';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Retro grid background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-purple-500/20"></div>
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}
        ></div>
      </div>

      {/* Floating neon shapes */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              backgroundColor: ['#ff00ff', '#00ffff', '#ffff00', '#ff0080'][Math.floor(Math.random() * 4)],
              boxShadow: `0 0 10px currentColor`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 1}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Main title with Y2K styling */}
        <div className="mb-8">
          <h1 
            className="text-7xl md:text-9xl font-black text-transparent bg-clip-text mb-4"
            style={{
              background: 'linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff)',
              WebkitBackgroundClip: 'text',
              backgroundSize: '400% 400%',
              animation: 'rainbow 3s ease infinite',
              textShadow: '0 0 30px #ff00ff, 0 0 60px #00ffff',
              fontFamily: 'Impact, Arial Black, sans-serif',
              letterSpacing: '0.1em'
            }}
          >
            ЗЕМЛЯ ТУР
          </h1>
          
          <div className="relative">
            <p 
              className="text-2xl md:text-4xl font-bold text-yellow-300 mb-6"
              style={{
                textShadow: '0 0 20px #ffff00, 0 0 40px #ffff00',
                fontFamily: 'Arial Black, sans-serif',
                animation: 'blink 1.5s infinite'
              }}
            >
              🛸 ИНТЕРГАЛАКТИЧЕСКИЕ ТУРЫ НА ЗЕМЛЮ 🛸
            </p>
          </div>
        </div>
        
        {/* Subtitle with retro styling */}
        <div className="bg-black/80 border-2 border-cyan-400 p-6 mb-8 relative">
          <div className="absolute -top-1 -left-1 w-4 h-4 bg-cyan-400"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-400"></div>
          <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-cyan-400"></div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-cyan-400"></div>
          
          <p className="text-lg md:text-xl text-green-400 mb-4 font-mono">
             ДОБРО ПОЖАЛОВАТЬ В БУДУЩЕЕ ТУРИЗМА!
          </p>
          
          <p className="text-base md:text-lg text-white mb-4">
            Устали от скучных газовых гигантов? Надоели безжизненные астероиды? 
            ЗЕМЛЯ - это ТОТ САМЫЙ хайп, который вы искали во всей галактике!
          </p>
        </div>
        
        {/* Features with 2000s styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 border-2 border-white transform rotate-1">
            <p className="text-white font-bold text-lg">⭐ 8+ МИЛЛИАРДОВ</p>
            <p className="text-yellow-300">местных существ!</p>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 border-2 border-white transform -rotate-1">
            <p className="text-white font-bold text-lg">🌊 ЖИДКАЯ ВОДА</p>
            <p className="text-yellow-300">без радиации!</p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-yellow-500 p-4 border-2 border-white transform rotate-1">
            <p className="text-white font-bold text-lg">🎭 МЕМЫ И ТИКТОК</p>
            <p className="text-purple-300">в реальном времени!</p>
          </div>
        </div>
        
        {/* CTA Button with extreme Y2K styling */}
        <div className="relative">
          <Button 
            onClick={scrollToBooking}
            className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600 text-white font-black py-6 px-12 text-2xl transform hover:scale-110 transition-all duration-300 border-4 border-white"
            style={{
              textShadow: '2px 2px 0px #000',
              boxShadow: '0 0 30px #ff00ff, inset 0 0 30px rgba(255,255,255,0.2)',
              animation: 'pulse-glow 2s infinite'
            }}
          >
            🚀 ЗАБРОНИРОВАТЬ СЕЙЧАС! 🚀
          </Button>
          
          <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-30 blur-lg animate-pulse -z-10"></div>
        </div>
        
        <p className="text-sm text-gray-400 mt-6 font-mono">
          * Гарантия возврата щупалец | Лицензия №42069 | Est. 2024
        </p>
      </div>
      
      <style jsx>{`
        @keyframes rainbow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.7; }
        }
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 30px #ff00ff, inset 0 0 30px rgba(255,255,255,0.2); }
          50% { box-shadow: 0 0 50px #00ffff, inset 0 0 50px rgba(255,255,255,0.4); }
        }
      `}</style>
    </section>
  );
}