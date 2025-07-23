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
      <section id="booking" className="py-20 px-4 bg-gradient-to-b from-indigo-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-br from-green-900/60 to-blue-900/60 border-green-500/50">
            <CardContent className="p-12">
              <div className="text-6xl mb-6">🎉</div>
              <h2 className="text-4xl font-bold text-green-400 mb-4">
                Заявка отправлена!
              </h2>
              <p className="text-xl text-cyan-300 mb-6">
                Наш менеджер свяжется с вами телепатически в течение 24 земных часов
              </p>
              <div className="space-y-2 text-yellow-300">
                <p>📡 Сигнал отправлен в центр управления</p>
                <p>🛸 НЛО уже готовится к вылету</p>
                <p>🎫 Билеты будут материализованы автоматически</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 px-4 bg-gradient-to-b from-indigo-900 to-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            🎫 Форма Бронирования Тура
          </h2>
          <p className="text-xl md:text-2xl text-cyan-300 max-w-3xl mx-auto">
            Заполните форму и приготовьтесь к самому странному приключению в галактике!
          </p>
          <div className="mt-4 text-yellow-300">
            ⚡ Мгновенное подтверждение через квантовую связь
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-yellow-300 text-lg">
                    👽 Имя/Позывной/Номер
                  </Label>
                  <Input
                    id="name"
                    placeholder="Зорг-7, Блип-Блоп, X-Æ-A-12..."
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-black/50 border-cyan-500/50 text-white placeholder-gray-400"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="planet" className="text-yellow-300 text-lg">
                    🪐 Планета происхождения
                  </Label>
                  <Input
                    id="planet"
                    placeholder="Альфа Центавра, Вега, Неизвестно..."
                    value={formData.planet}
                    onChange={(e) => handleInputChange('planet', e.target.value)}
                    className="bg-black/50 border-cyan-500/50 text-white placeholder-gray-400"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="tentacles" className="text-yellow-300 text-lg">
                    🐙 Количество щупалец/конечностей
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('tentacles', value)} required>
                    <SelectTrigger className="bg-black/50 border-cyan-500/50 text-white">
                      <SelectValue placeholder="Выберите количество" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-cyan-500/50">
                      <SelectItem value="0">0 (Энергетическое существо)</SelectItem>
                      <SelectItem value="2">2 (Как у людей)</SelectItem>
                      <SelectItem value="4">4 (Стандарт)</SelectItem>
                      <SelectItem value="6">6 (Удобно)</SelectItem>
                      <SelectItem value="8">8 (Оптимально)</SelectItem>
                      <SelectItem value="много">Много (Не считал)</SelectItem>
                      <SelectItem value="переменное">Переменное количество</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="headSize" className="text-yellow-300 text-lg">
                    🧠 Размер головы/мозга
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('headSize', value)} required>
                    <SelectTrigger className="bg-black/50 border-cyan-500/50 text-white">
                      <SelectValue placeholder="Выберите размер" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-cyan-500/50">
                      <SelectItem value="микро">Микро (Как у людей)</SelectItem>
                      <SelectItem value="стандарт">Стандарт (1 метр)</SelectItem>
                      <SelectItem value="большой">Большой (2-3 метра)</SelectItem>
                      <SelectItem value="огромный">Огромный (размер планеты)</SelectItem>
                      <SelectItem value="виртуальный">Виртуальный</SelectItem>
                      <SelectItem value="коллективный">Коллективный разум</SelectItem>
                    </SelectContent>
                  </Select>
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