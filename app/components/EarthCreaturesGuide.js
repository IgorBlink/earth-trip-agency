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

export default function EarthCreaturesGuide() {
  const creatures = [
    {
      emoji: '/back.png',
      name: 'Бахредин',
      classification: 'САМОЕ ЗАВОЗНОЕ ЖИВОТНОЕ НА ПЛАНЕТЕ ЗЕМЛЯ',
      description: 'Четвероногий раб человека. Виляет хвостом за еду. Лает на всё подряд. IQ = 0.',
      dangerLevel: 'Низкий',
      abilities: ['Лай 24/7', 'Поедание носков', 'Слюни везде'],
      habitat: 'Диван хозяина',
      memeRating: '🔥🔥🔥'
    },
    {
      emoji: '🐱',
      name: 'Кошка',
      classification: 'Домашний диктатор',
      description: 'Пушистый тиран. Игнорирует людей, но требует еду. Царапает мебель из принципа.',
      dangerLevel: 'Средний',
      abilities: ['Игнор 9000', 'Уничтожение мебели', 'Мяуканье в 3 утра'],
      habitat: 'Везде, где нельзя',
      memeRating: '🔥🔥🔥🔥🔥'
    },
    {
      emoji: '🐧',
      name: 'Пингвин',
      classification: 'Формальная птица',
      description: 'Птица в смокинге, которая забыла как летать. Ходит как важный чиновник.',
      dangerLevel: 'Низкий',
      abilities: ['Скольжение на пузе', 'Групповые обнимашки', 'Стильный вид'],
      habitat: 'Ледяная тюрьма',
      memeRating: '🔥🔥🔥🔥'
    },
    {
      emoji: '🦒',
      name: 'Жираф',
      classification: 'Высокое недоразумение',
      description: 'Лошадь, которая слишком много вытягивала шею. Видит всё, но молчит.',
      dangerLevel: 'Низкий',
      abilities: ['Подглядывание', 'Длинный язык', 'Медленная походка'],
      habitat: 'Африканская саванна',
      memeRating: '🔥🔥'
    },
    {
      emoji: '🐙',
      name: 'Осьминог',
      classification: 'Морской хакер',
      description: 'Восьминогий гений. Взламывает аквариумы. Подозрительно умный. Возможно, шпион.',
      dangerLevel: 'Высокий',
      abilities: ['Невидимость', 'Взлом замков', 'Побег из тюрьмы'],
      habitat: 'Секретные лаборатории',
      memeRating: '🔥🔥🔥🔥🔥'
    },
    {
      emoji: '🦅',
      name: 'Орёл',
      classification: 'Воздушный снайпер',
      description: 'Птица с комплексом превосходства. Символ свободы, но сидит в зоопарке.',
      dangerLevel: 'Высокий',
      abilities: ['Снайперское зрение', 'Воздушные атаки', 'Позирование'],
      habitat: 'Флаги стран',
      memeRating: '🔥🔥🔥'
    },
    {
      emoji: '🐘',
      name: 'Слон',
      classification: 'Ходячий танк',
      description: 'Серый гигант с пылесосом вместо носа. Помнит всё, включе твои грехи.',
      dangerLevel: 'Высокий',
      abilities: ['Память как у компьютера', 'Хобот-манипулятор', 'Топтание врагов'],
      habitat: 'Цирки и зоопарки',
      memeRating: '🔥🔥🔥🔥'
    },
    {
      emoji: '🦈',
      name: 'Акула',
      classification: 'Морской терминатор',
      description: 'Плавающая пила с зубами. Ест всё, что движется. Боится дельфинов.',
      dangerLevel: 'Экстремальный',
      abilities: ['Режущие зубы', 'Турбо-плавание', 'Запах крови'],
      habitat: 'Кошмары пловцов',
      memeRating: '🔥🔥🔥🔥🔥'
    },
    {
      emoji: '🐨',
      name: 'Коала',
      classification: 'Профессиональный лентяй',
      description: 'Сонное чудо природы. Спит 20 часов в день. Ест наркотические листья.',
      dangerLevel: 'Низкий',
      abilities: ['Сон мастер-класс', 'Поедание наркоты', 'Милый вид'],
      habitat: 'Эвкалиптовый рай',
      memeRating: '🔥🔥🔥🔥🔥'
    }
  ];

  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(255, 0, 255, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(0, 255, 255, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(255, 255, 0, 0.3) 0%, transparent 50%)
            `,
            animation: 'float 15s ease-in-out infinite'
          }}
        ></div>
      </div>

      {/* Matrix rain effect */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 font-mono text-xs"
            style={{
              left: `${i * 5}%`,
              animation: `matrix-rain ${Math.random() * 3 + 2}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {Array.from({length: 20}, () => Math.random() > 0.5 ? '1' : '0').join('')}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 
            className="text-5xl md:text-7xl font-black mb-6"
            style={{
              background: 'linear-gradient(45deg, #00ff00, #ff00ff, #00ffff, #ffff00)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '400% 400%',
              animation: 'rainbow 4s ease infinite',
              textShadow: '0 0 30px #00ff00',
              fontFamily: 'Impact, Arial Black, sans-serif',
              letterSpacing: '0.1em'
            }}
          >
            СПРАВОЧНИК СУЩЕСТВ
          </h2>
          
          <div className="bg-black border-4 border-green-400 p-4 inline-block relative transform rotate-1">
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-green-400 animate-pulse"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-400 animate-pulse"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-400 animate-pulse"></div>
            
            <p className="text-green-300 font-bold text-xl font-mono">
         
            </p>
          </div>
        </div>
        
        {/* Creatures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {creatures.map((creature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-green-900/80 to-blue-900/80 border-4 border-white hover:border-green-400 transition-all duration-300 hover:scale-105 transform hover:-rotate-1"
              style={{
                boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)'
              }}
            >
              <CardHeader className="bg-black/60">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-5xl animate-bounce" style={{ animationDelay: `${index * 0.15}s` }}>
                    {creature.emoji.startsWith('/') ? (
                      <img 
                         src={creature.emoji} 
                         alt={creature.name} 
                         className="w-24 h-24 object-cover rounded-lg border-2 border-yellow-400" 
                         style={{ filter: 'drop-shadow(0 0 10px #ffff00)' }}
                       />
                    ) : (
                      creature.emoji
                    )}
                  </span>
                  <div className="text-right">
                    <span 
                      className={`px-3 py-1 rounded-full text-xs font-black border-2 ${getDangerColor(creature.dangerLevel)}`}
                      style={{
                        backgroundColor: 'black',
                        borderColor: 'currentColor',
                        textShadow: '0 0 5px currentColor'
                      }}
                    >
                      {creature.dangerLevel}
                    </span>
                    <div className="text-xs text-gray-300 mt-1">МЕМНОСТЬ: {creature.memeRating}</div>
                  </div>
                </div>
                <CardTitle 
                  className="text-xl font-black"
                  style={{
                    color: '#00ff00',
                    textShadow: '0 0 10px #00ff00',
                    fontFamily: 'Arial Black, sans-serif'
                  }}
                >
                  {creature.name}
                </CardTitle>
                <CardDescription 
                  className="font-bold"
                  style={{
                    color: '#00ffff',
                    textShadow: '0 0 5px #00ffff'
                  }}
                >
                  {creature.classification}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <div className="bg-black/70 p-3 border-2 border-yellow-400 mb-4">
                  <p className="text-white font-bold text-sm">
                    {creature.description}
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-black text-purple-400 mb-2" style={{ textShadow: '0 0 5px #a855f7' }}>
                      СПОСОБНОСТИ:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {creature.abilities.map((ability, idx) => (
                        <span 
                          key={idx} 
                          className="px-2 py-1 bg-purple-600 text-white text-xs rounded border-2 border-purple-400 font-bold"
                          style={{
                            boxShadow: '0 0 10px rgba(168, 85, 247, 0.5)'
                          }}
                        >
                          {ability}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-black text-blue-400 mb-1" style={{ textShadow: '0 0 5px #3b82f6' }}>
                      СРЕДА ОБИТАНИЯ:
                    </h4>
                    <span 
                      className="text-blue-300 text-sm font-bold bg-blue-900/50 px-2 py-1 rounded border border-blue-400"
                      style={{
                        textShadow: '0 0 5px #93c5fd'
                      }}
                    >
                      {creature.habitat}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mt-16 text-center">
          <div className="bg-black border-4 border-white p-8 inline-block relative transform -rotate-1">
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-white animate-spin"></div>
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-white animate-spin" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-white animate-spin" style={{ animationDelay: '1s' }}></div>
            <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-white animate-spin" style={{ animationDelay: '1.5s' }}></div>
            
            <h3 
              className="text-3xl font-black mb-6"
              style={{
                color: '#ff00ff',
                textShadow: '0 0 15px #ff00ff',
                fontFamily: 'Arial Black, sans-serif'
              }}
            >
              🧬 НАУЧНЫЕ ФАКТЫ
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-600 to-yellow-600 p-4 border-2 border-white transform rotate-3">
                <div className="text-3xl font-black text-white">8.7M</div>
                <div className="text-black font-bold">ВИДОВ</div>
                <div className="text-xs text-gray-800">На планете</div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-4 border-2 border-white transform -rotate-3">
                <div className="text-3xl font-black text-white">99%</div>
                <div className="text-yellow-300 font-bold">НЕ ИЗУЧЕНЫ</div>
                <div className="text-xs text-gray-300">Загадка</div>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-4 border-2 border-white transform rotate-3">
                <div className="text-3xl font-black text-white">∞</div>
                <div className="text-yellow-300 font-bold">МЕМОВ</div>
                <div className="text-xs text-gray-300">О животных</div>
              </div>
            </div>
            
            <div className="mt-6 bg-red-600 border-2 border-white p-3 transform rotate-1">
              <p className="text-white font-black text-lg">
                ⚠️ ОСТОРОЖНО: Некоторые существа могут быть мемными! ⚠️
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes matrix-rain {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
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