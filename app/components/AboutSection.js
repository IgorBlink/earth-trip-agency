'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Retro background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #ff00ff 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, #00ffff 2px, transparent 2px)
            `,
            backgroundSize: '100px 100px',
            animation: 'float-pattern 15s ease-in-out infinite'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title with extreme Y2K styling */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 
              className="text-5xl md:text-7xl font-black mb-4"
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
              О НАС
            </h2>
            
            <div className="bg-black border-4 border-cyan-400 p-4 mt-4 relative">
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-cyan-400"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-400"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-cyan-400"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-cyan-400"></div>
              
              <p className="text-yellow-300 font-bold text-xl font-mono">
                 САМОЕ КРУТОЕ ТУРАГЕНТСТВО ГАЛАКТИКИ 
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* History Card */}
          <Card className="bg-gradient-to-br from-purple-900 to-pink-900 border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <CardHeader className="bg-black/50">
              <CardTitle 
                className="text-2xl font-black text-center"
                style={{
                  color: '#ff00ff',
                  textShadow: '0 0 10px #ff00ff',
                  fontFamily: 'Arial Black, sans-serif'
                }}
              >
                🏢 ИСТОРИЯ
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="bg-black/70 p-4 border-2 border-cyan-400">
                <CardDescription className="text-white font-bold">
                  <span className="text-yellow-300 font-mono">EST. 2157</span><br/>
                  Начинали с продажи "билетов на Луну" за 5 кредитов. 
                  Теперь мы МОНОПОЛИСТЫ межгалактического туризма! 💪
                  <br/><br/>
                  <span className="text-green-400">FUN FACT:</span> Наш первый клиент до сих пор летает вокруг Юпитера!
                </CardDescription>
              </div>
            </CardContent>
          </Card>

          {/* Achievements Card */}
          <Card className="bg-gradient-to-br from-green-900 to-blue-900 border-4 border-white transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <CardHeader className="bg-black/50">
              <CardTitle 
                className="text-2xl font-black text-center"
                style={{
                  color: '#00ff00',
                  textShadow: '0 0 10px #00ff00',
                  fontFamily: 'Arial Black, sans-serif'
                }}
              >
                🏆 АЧИВКИ
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="bg-black/70 p-4 border-2 border-yellow-400">
                <CardDescription className="text-white font-bold">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-400">🥇</span>
                      <span>Лучшие в галактике 2159-2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">👽</span>
                      <span>50,000+ довольных клиентов</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400">🛸</span>
                      <span>0 случаев похищения (официально)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-400">💎</span>
                      <span>Эксклюзивная лицензия на Землю</span>
                    </div>
                  </div>
                </CardDescription>
              </div>
            </CardContent>
          </Card>

          {/* Team Card */}
          <Card className="bg-gradient-to-br from-cyan-900 to-purple-900 border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <CardHeader className="bg-black/50">
              <CardTitle 
                className="text-2xl font-black text-center"
                style={{
                  color: '#00ffff',
                  textShadow: '0 0 10px #00ffff',
                  fontFamily: 'Arial Black, sans-serif'
                }}
              >
                👽 КОМАНДА
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="bg-black/70 p-4 border-2 border-pink-400">
                <CardDescription className="text-white font-bold">
                  <div className="text-center mb-3">
                    <span className="text-yellow-300 text-2xl font-black">847</span>
                    <br/>
                    <span className="text-sm">ПРОФЕССИОНАЛОВ</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>🛸 234 пилота</div>
                    <div>🗣️ 156 гидов</div>
                    <div>🥸 89 маскировщиков</div>
                    <div>⚡ 368 телепортеров</div>
                  </div>
                </CardDescription>
              </div>
            </CardContent>
          </Card>

          {/* Safety Card */}
          <Card className="bg-gradient-to-br from-yellow-900 to-red-900 border-4 border-white transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <CardHeader className="bg-black/50">
              <CardTitle 
                className="text-2xl font-black text-center"
                style={{
                  color: '#ffff00',
                  textShadow: '0 0 10px #ffff00',
                  fontFamily: 'Arial Black, sans-serif'
                }}
              >
                🛡️ БЕЗОПАСНОСТЬ
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="bg-black/70 p-4 border-2 border-green-400">
                <CardDescription className="text-white font-bold">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-purple-400">👻</span>
                      <span>Невидимость 3.0</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-400">📡</span>
                      <span>Анти-радар система</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400">⚡</span>
                      <span>Аварийная телепортация</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">🤖</span>
                      <span>AI переводчики</span>
                    </div>
                  </div>
                </CardDescription>
              </div>
            </CardContent>
          </Card>

          {/* Certificates Card */}
          <Card className="bg-gradient-to-br from-pink-900 to-cyan-900 border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <CardHeader className="bg-black/50">
              <CardTitle 
                className="text-2xl font-black text-center"
                style={{
                  color: '#ff69b4',
                  textShadow: '0 0 10px #ff69b4',
                  fontFamily: 'Arial Black, sans-serif'
                }}
              >
                📜 ЛИЦЕНЗИИ
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="bg-black/70 p-4 border-2 border-purple-400">
                <CardDescription className="text-white font-bold text-sm">
                  <div className="space-y-1">
                    <div>🎫 Межгалактическая лицензия #42069</div>
                    <div>✅ Сертификат Совета Андромеды</div>
                    <div>🔬 Разрешение на изучение людей</div>
                    <div>💰 Страховка Космического Ллойда</div>
                    <div>🏅 ISO 9001 (Галактический стандарт)</div>
                  </div>
                </CardDescription>
              </div>
            </CardContent>
          </Card>

          {/* Mission Card */}
          <Card className="bg-gradient-to-br from-red-900 to-yellow-900 border-4 border-white transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <CardHeader className="bg-black/50">
              <CardTitle 
                className="text-2xl font-black text-center"
                style={{
                  color: '#ff4444',
                  textShadow: '0 0 10px #ff4444',
                  fontFamily: 'Arial Black, sans-serif'
                }}
              >
                🎯 МИССИЯ
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="bg-black/70 p-4 border-2 border-cyan-400">
                <CardDescription className="text-white font-bold">
                  Показать всей галактике, что Земля - это не просто планета с водой, 
                  а НАСТОЯЩИЙ МЕМОГЕНЕРАТОР! 🤣
                  <br/><br/>
                  <span className="text-yellow-300">Наблюдайте:</span> "понедельники", "налоги", "тикток" и другие странные ритуалы!
                </CardDescription>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Bottom stats */}
        <div className="mt-16 text-center">
          <div className="bg-black border-4 border-white p-6 inline-block transform hover:scale-105 transition-transform">
            <p className="text-2xl font-black text-yellow-300 mb-2" style={{ textShadow: '0 0 10px #ffff00' }}>
              🔥 СТАТИСТИКА ОГОНЬ 🔥
            </p>
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-black text-green-400">99.9%</div>
                <div className="text-white text-sm">ВЫЖИВАЕМОСТЬ</div>
              </div>
              <div>
                <div className="text-3xl font-black text-cyan-400">24/7</div>
                <div className="text-white text-sm">ПОДДЕРЖКА</div>
              </div>
              <div>
                <div className="text-3xl font-black text-pink-400">∞</div>
                <div className="text-white text-sm">МЕМОВ В ЧАС</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float-pattern {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
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