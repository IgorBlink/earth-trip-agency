'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const getDangerColor = (level) => {
  switch(level) {
    case 'Низкий': return 'text-green-400';
    case 'Средний': return 'text-yellow-400';
    case 'Высокий': return 'text-orange-400';
    case 'Экстремальный': return 'text-red-400';
    default: return 'text-gray-400';
  }
};

export default function EarthAttractionsMap() {
  const attractions = [
    {
      emoji: '🗽',
      name: 'Статуя Свободы',
      location: 'Нью-Йорк, США',
      description: 'Гигантская зеленая тётка с факелом. Местные думают, что она их защищает от налогов.',
      rating: 4.8,
      dangerLevel: 'Низкий',
      memeLevel: '🔥🔥🔥'
    },
    {
      emoji: '🏰',
      name: 'Эйфелева башня',
      location: 'Париж, Франция',
      description: 'Металлическая антенна для связи с космосом. Французы думают, что это красиво.',
      rating: 4.9,
      dangerLevel: 'Низкий',
      memeLevel: '🔥🔥'
    },
    {
      emoji: '🏔️',
      name: 'Эверест',
      location: 'Непал/Тибет',
      description: 'Самая высокая свалка планеты. Люди платят $50k, чтобы оставить там мусор.',
      rating: 4.2,
      dangerLevel: 'Экстремальный',
      memeLevel: '🔥🔥🔥🔥🔥'
    },
    {
      emoji: '🌊',
      name: 'Ниагарский водопад',
      location: 'США/Канада',
      description: 'Вода падает. Люди смотрят. Все довольны. Иногда кто-то прыгает в бочке.',
      rating: 4.6,
      dangerLevel: 'Средний',
      memeLevel: '🔥🔥🔥'
    },
    {
      emoji: '🏛️',
      name: 'Колизей',
      location: 'Рим, Италия',
      description: 'Древний стадион смерти. Сейчас туристы делают селфи на костях гладиаторов.',
      rating: 4.7,
      dangerLevel: 'Низкий',
      memeLevel: '🔥🔥🔥🔥'
    },
    {
      emoji: '🏜️',
      name: 'Пирамиды Гизы',
      location: 'Египет',
      description: 'Треугольные гробницы. Построены явно не людьми. Подозрительно...',
      rating: 4.5,
      dangerLevel: 'Средний',
      memeLevel: '🔥🔥🔥🔥🔥'
    },
    {
      emoji: '🌋',
      name: 'Йеллоустоун',
      location: 'США',
      description: 'Супервулкан-убийца. Американцы устраивают там барбекю. Логика = 0.',
      rating: 4.4,
      dangerLevel: 'Экстремальный',
      memeLevel: '🔥🔥🔥🔥🔥'
    },
    {
      emoji: '🏖️',
      name: 'Мальдивы',
      location: 'Индийский океан',
      description: 'Острова, которые скоро станут Атлантидой 2.0. Поторопитесь с фотками!',
      rating: 4.9,
      dangerLevel: 'Низкий',
      memeLevel: '🔥🔥'
    },
    {
      emoji: '🎡',
      name: 'Диснейленд',
      location: 'Калифорния, США',
      description: 'Место, где взрослые тратят зарплату, чтобы обнимать мышь в костюме.',
      rating: 4.3,
      dangerLevel: 'Высокий',
      memeLevel: '🔥🔥🔥🔥🔥'
    }
  ];

  return (
    <section id="attractions" className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Retro grid background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 0, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'grid-drift 25s linear infinite'
          }}
        ></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 2}px`,
              height: `${Math.random() * 3 + 2}px`,
              backgroundColor: ['#ff00ff', '#00ffff', '#ffff00', '#ff0080'][Math.floor(Math.random() * 4)],
              borderRadius: '50%',
              boxShadow: `0 0 15px currentColor`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 
            className="text-5xl md:text-7xl font-black mb-6"
            style={{
              background: 'linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '400% 400%',
              animation: 'rainbow 3s ease infinite',
              textShadow: '0 0 30px #ff00ff',
              fontFamily: 'Impact, Arial Black, sans-serif',
              letterSpacing: '0.1em'
            }}
          >
            ДОСТОПРИМЕЧАТЕЛЬНОСТИ
          </h2>
          
          <div className="bg-black border-4 border-cyan-400 p-4 inline-block relative">
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-cyan-400"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-400"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-cyan-400"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-cyan-400"></div>
            
            <p className="text-yellow-300 font-bold text-xl font-mono">
               САМЫЕ БЕЗУМНЫЕ МЕСТА ПЛАНЕТЫ
            </p>
          </div>
        </div>
        
        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map((attraction, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-purple-900/80 to-pink-900/80 border-4 border-white hover:border-cyan-400 transition-all duration-300 hover:scale-105 transform hover:rotate-1"
              style={{
                boxShadow: '0 0 20px rgba(255, 0, 255, 0.3)'
              }}
            >
              <CardHeader className="bg-black/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-5xl animate-bounce" style={{ animationDelay: `${index * 0.1}s` }}>
                    {attraction.emoji}
                  </span>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      <span className="text-yellow-400 text-xl">⭐</span>
                      <span className="text-white font-black text-lg">{attraction.rating}</span>
                    </div>
                    <div className="text-xs text-gray-300">МЕМНОСТЬ: {attraction.memeLevel}</div>
                  </div>
                </div>
                <CardTitle 
                  className="text-xl font-black"
                  style={{
                    color: '#00ffff',
                    textShadow: '0 0 10px #00ffff',
                    fontFamily: 'Arial Black, sans-serif'
                  }}
                >
                  {attraction.name}
                </CardTitle>
                <CardDescription className="text-green-400 font-bold">
                  📍 {attraction.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <div className="bg-black/70 p-3 border-2 border-yellow-400 mb-3">
                  <p className="text-white font-bold text-sm">
                    {attraction.description}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300 font-bold">ОПАСНОСТЬ:</span>
                  <span 
                    className={`font-black text-lg ${getDangerColor(attraction.dangerLevel)}`}
                    style={{
                      textShadow: '0 0 5px currentColor'
                    }}
                  >
                    {attraction.dangerLevel}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mt-16 text-center">
          <div className="bg-black border-4 border-white p-8 inline-block relative">
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-white"></div>
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-white"></div>
            <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-white"></div>
            <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-white"></div>
            
            <h3 
              className="text-3xl font-black mb-6"
              style={{
                color: '#ffff00',
                textShadow: '0 0 15px #ffff00',
                fontFamily: 'Arial Black, sans-serif'
              }}
            >
              📊 СТАТИСТИКА ПЛАНЕТЫ
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-green-600 to-blue-600 p-4 border-2 border-white transform rotate-2">
                <div className="text-3xl font-black text-white">197</div>
                <div className="text-yellow-300 font-bold">СТРАН</div>
                <div className="text-xs text-gray-300">И все воюют</div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-4 border-2 border-white transform -rotate-2">
                <div className="text-3xl font-black text-white">8B</div>
                <div className="text-yellow-300 font-bold">ЛЮДЕЙ</div>
                <div className="text-xs text-gray-300">Слишком много</div>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-4 border-2 border-white transform rotate-2">
                <div className="text-3xl font-black text-white">∞</div>
                <div className="text-yellow-300 font-bold">МЕМОВ</div>
                <div className="text-xs text-gray-300">В секунду</div>
              </div>
              <div className="bg-gradient-to-br from-pink-600 to-red-600 p-4 border-2 border-white transform -rotate-2">
                <div className="text-3xl font-black text-white">42</div>
                <div className="text-yellow-300 font-bold">ОТВЕТ</div>
                <div className="text-xs text-gray-300">На всё</div>
              </div>
            </div>
            
            <div className="mt-6 bg-red-600 border-2 border-white p-3">
              <p className="text-white font-black text-lg">
                ⚠️ ВНИМАНИЕ: Планета может вызвать зависимость! ⚠️
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes grid-drift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }
        @keyframes rainbow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}