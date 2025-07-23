'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    planet: '',
    tentacles: '',
    headSize: '',
    climate: '',
    duration: '',
    specialRequests: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        planet: '',
        tentacles: '',
        headSize: '',
        climate: '',
        duration: '',
        specialRequests: ''
      });
    }, 3000);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="relative py-20 px-4 bg-black overflow-hidden">
        {/* Matrix rain effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='15' font-family='monospace' font-size='12' fill='%2300ff00' text-anchor='middle'%3E1%3C/text%3E%3C/svg%3E")`,
            animation: 'matrix-fall 3s linear infinite'
          }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <Card className="relative bg-black border-4 border-green-500">
            {/* Success glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-lime-600 rounded-lg blur opacity-50 animate-pulse"></div>
            
            <CardContent className="relative p-12">
              <div className="text-6xl mb-6 animate-bounce">🎉</div>
              <h2 className="text-4xl font-bold text-green-400 mb-4 font-mono animate-pulse">
                BOOKING CONFIRMED! POGGERS!
              </h2>
              <p className="text-xl text-cyan-300 mb-6 font-mono">
                Our manager will contact you telepathically within 24 Earth hours 📡
              </p>
              <div className="space-y-2 text-yellow-300 font-mono">
                <p className="animate-bounce">📡 Signal sent to command center</p>
                <p className="animate-bounce" style={{animationDelay: '0.5s'}}>🛸 UFO already preparing for departure</p>
                <p className="animate-bounce" style={{animationDelay: '1s'}}>🎫 Tickets will be materialized automatically</p>
              </div>
              
              <div className="mt-8 flex justify-center space-x-4 text-sm">
                <span className="bg-green-500/20 border border-green-500 px-3 py-1 rounded text-green-300 font-mono animate-pulse">
                  ✅ EPIC WIN
                </span>
                <span className="bg-blue-500/20 border border-blue-500 px-3 py-1 rounded text-blue-300 font-mono animate-pulse">
                  🚀 STONKS
                </span>
                <span className="bg-yellow-500/20 border border-yellow-500 px-3 py-1 rounded text-yellow-300 font-mono animate-pulse">
                  💯 BASED
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <style jsx>{`
          @keyframes matrix-fall {
            0% { transform: translateY(-100vh); }
            100% { transform: translateY(100vh); }
          }
        `}</style>
      </section>
    );
  }

  return (
    <section id="booking" className="relative py-20 px-4 bg-black overflow-hidden">
      {/* Retro Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(#ff00ff 1px, transparent 1px),
            linear-gradient(90deg, #ff00ff 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
          animation: 'grid-pulse 4s ease-in-out infinite'
        }}></div>
      </div>
      
      {/* Floating Neon Elements */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-pink-500 rounded-full blur-xl opacity-40 animate-bounce"></div>
      <div className="absolute top-32 right-20 w-20 h-20 bg-cyan-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-yellow-500 rounded-full blur-xl opacity-35 animate-bounce" style={{animationDelay: '1s'}}></div>
      
      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-pink-500 via-cyan-500 to-yellow-500 bg-clip-text text-transparent animate-pulse font-mono">
              🎮 BOOK UR TRIP NOW! 🎮
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-cyan-600 to-yellow-600 rounded-lg blur opacity-30 animate-pulse"></div>
          </h2>
          <p className="text-xl md:text-2xl text-cyan-300 max-w-3xl mx-auto font-mono">
            Fill out this form and prepare for the MOST EPIC adventure in the galaxy! 💯
          </p>
          <div className="mt-4 text-yellow-300 font-bold text-lg animate-bounce">
            ⚡ INSTANT CONFIRMATION VIA QUANTUM LINK ⚡
          </div>
          <div className="mt-2 text-pink-400 text-sm font-mono">
            🔥 NO CAP - 100% LEGIT SPACE TRAVEL 🔥
          </div>
        </div>
        
        <Card className="bg-gradient-to-br from-purple-900/60 to-indigo-900/60 border-orange-500/40">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-orange-400">
              🚀 Телепортироваться на это безумие!
            </CardTitle>
            <CardDescription className="text-cyan-300 text-lg">
              Все поля обязательны для межгалактической безопасности
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="relative bg-black/90 backdrop-blur-sm rounded-2xl p-8 border-4 border-pink-500 shadow-2xl space-y-6" style={{
              boxShadow: '0 0 50px #ff00ff, inset 0 0 50px rgba(255, 0, 255, 0.1)'
            }}>
              {/* Form Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-cyan-600 to-yellow-600 rounded-2xl blur opacity-20 animate-pulse"></div>
              
              <div className="relative">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-yellow-400 font-mono animate-pulse">🚀 EPIC FORM TIME! 🚀</h3>
                  <p className="text-pink-400 text-sm mt-2 font-mono">pls fill out correctly or ur trip will be CRINGE 😬</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 relative">
                    <Label htmlFor="name" className="text-cyan-300 text-lg font-mono">
                      👽 NAME (what ur homies call u)
                    </Label>
                    <Input
                      id="name"
                      placeholder="e.g: Zorg-42 or xX_AlienBoi_Xx"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="bg-gray-900 border-2 border-pink-500 text-white placeholder-gray-400 font-mono transition-all duration-300"
                      style={{
                        boxShadow: '0 0 20px rgba(255, 0, 255, 0.3)'
                      }}
                      required
                    />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                  </div>
                  
                  <div className="space-y-2 relative">
                    <Label htmlFor="planet" className="text-cyan-300 text-lg font-mono">
                      🪐 HOME PLANET (where u from bro)
                    </Label>
                    <Input
                      id="planet"
                      placeholder="Mars, Venus, ur mom's basement..."
                      value={formData.planet}
                      onChange={(e) => handleInputChange('planet', e.target.value)}
                      className="bg-gray-900 border-2 border-pink-500 text-white placeholder-gray-400 font-mono transition-all duration-300"
                      style={{
                        boxShadow: '0 0 20px rgba(255, 0, 255, 0.3)'
                      }}
                      required
                    />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 relative">
                  <Label htmlFor="tentacles" className="text-yellow-300 text-lg font-mono">
                    🦑 TENTACLE COUNT (how many u got?)
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('tentacles', value)} required>
                    <SelectTrigger className="bg-gray-900 border-2 border-pink-500 text-white font-mono transition-all duration-300" style={{
                      boxShadow: '0 0 20px rgba(255, 0, 255, 0.3)'
                    }}>
                      <SelectValue placeholder="Pick ur tentacle vibe" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-cyan-500/50">
                      <SelectItem value="0">0 (basic humanoid) 🚶</SelectItem>
                      <SelectItem value="2">2 (standard issue) ✌️</SelectItem>
                      <SelectItem value="4">4 (getting spicy) 🐙</SelectItem>
                      <SelectItem value="6">6 (pro gamer mode) 🎮</SelectItem>
                      <SelectItem value="8">8 (octopus mode) 🐙🐙</SelectItem>
                      <SelectItem value="много">Many (lost count lol) ♾️</SelectItem>
                      <SelectItem value="переменное">Variable (mood dependent) 🎭</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                </div>
                
                <div className="space-y-2 relative">
                  <Label htmlFor="headSize" className="text-yellow-300 text-lg font-mono">
                    🧠 HEAD SIZE (big brain energy?)
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('headSize', value)} required>
                    <SelectTrigger className="bg-gray-900 border-2 border-pink-500 text-white font-mono transition-all duration-300" style={{
                      boxShadow: '0 0 20px rgba(255, 0, 255, 0.3)'
                    }}>
                      <SelectValue placeholder="Choose ur brain size" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-cyan-500/50">
                      <SelectItem value="микро">Smol (but cute) 🥺</SelectItem>
                      <SelectItem value="стандарт">Normal (human-like) 😐</SelectItem>
                      <SelectItem value="большой">Large (galaxy brain) 🧠</SelectItem>
                      <SelectItem value="огромный">HUGE (200 IQ) 🤯</SelectItem>
                      <SelectItem value="виртуальный">Virtual (in the cloud) ☁️</SelectItem>
                      <SelectItem value="коллективный">Hive mind (we are legion) 👥</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="climate" className="text-yellow-300 text-lg">
                    🌡️ Предпочитаемый климат
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('climate', value)} required>
                    <SelectTrigger className="bg-black/50 border-cyan-500/50 text-white">
                      <SelectValue placeholder="Выберите климат" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-cyan-500/50">
                      <SelectItem value="теплый">Тёплый (как в пустыне)</SelectItem>
                      <SelectItem value="холодный">Холодный (как в космосе)</SelectItem>
                      <SelectItem value="тревожный">Тревожный (с грозами)</SelectItem>
                      <SelectItem value="кукурузный">Кукурузный (влажный)</SelectItem>
                      <SelectItem value="радиоактивный">Радиоактивный</SelectItem>
                      <SelectItem value="любой">Любой (адаптируюсь)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="duration" className="text-yellow-300 text-lg">
                    ⏰ Длительность тура
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('duration', value)} required>
                    <SelectTrigger className="bg-black/50 border-cyan-500/50 text-white">
                      <SelectValue placeholder="Выберите длительность" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-cyan-500/50">
                      <SelectItem value="1день">1 земной день</SelectItem>
                      <SelectItem value="1неделя">1 земная неделя</SelectItem>
                      <SelectItem value="1месяц">1 земной месяц</SelectItem>
                      <SelectItem value="1год">1 земной год</SelectItem>
                      <SelectItem value="навсегда">Навсегда (переезд)</SelectItem>
                      <SelectItem value="пока-не-надоест">Пока не надоест</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="specialRequests" className="text-yellow-300 text-lg">
                  ✨ Особые пожелания
                </Label>
                <textarea
                  id="specialRequests"
                  placeholder="Хочу встретиться с котами, попробовать пиццу, изучить человеческие танцы..."
                  value={formData.specialRequests}
                  onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                  className="w-full h-24 bg-black/50 border border-cyan-500/50 rounded-md px-3 py-2 text-white placeholder-gray-400 resize-none"
                  rows={3}
                />
              </div>
              
              <div className="text-center pt-6">
                <Button 
                  type="submit"
                  size="lg"
                  className="text-2xl px-12 py-6 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-orange-500/25"
                >
                  🚀 ТЕЛЕПОРТИРОВАТЬСЯ НА ЭТО БЕЗУМИЕ! 🌍
                </Button>
                
                <div className="mt-6 text-sm text-gray-400 space-y-1">
                  <p>* Гарантируем возврат в исходное измерение</p>
                  <p>* Страховка от временных парадоксов включена</p>
                  <p>* Wi-Fi на борту НЛО бесплатный</p>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
        
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-lg p-6 border border-red-500/30">
            <h3 className="text-2xl font-bold text-red-300 mb-4">🎁 Специальные Предложения</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-black/30 rounded p-3">
                <div className="text-green-400 font-bold">🎯 Первый тур</div>
                <div className="text-gray-300">Скидка 50% на дезинфекцию</div>
              </div>
              <div className="bg-black/30 rounded p-3">
                <div className="text-blue-400 font-bold">👨‍👩‍👧‍👦 Семейный пакет</div>
                <div className="text-gray-300">+1 щупалец бесплатно</div>
              </div>
              <div className="bg-black/30 rounded p-3">
                <div className="text-purple-400 font-bold">🔄 Повторный визит</div>
                <div className="text-gray-300">Бесплатная память о прошлом</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}