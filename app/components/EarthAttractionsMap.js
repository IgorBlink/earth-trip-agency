import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function EarthAttractionsMap() {
  const attractions = [
    {
      emoji: "🕳️",
      name: "Секретная яма с танцующими людьми",
      location: "Подземелья больших городов",
      description: "Странные ритуалы под громкие звуки. Люди трясут конечностями в темноте. Ученые до сих пор изучают этот феномен.",
      rating: "⭐⭐⭐⭐⭐",
      danger: "Низкий"
    },
    {
      emoji: "🦆",
      name: "Парк говорящих уток",
      location: "Все парки с водоемами",
      description: "Удивительные существа, которые требуют еду в обмен на странные звуки. Местные жители их кормят и разговаривают с ними.",
      rating: "⭐⭐⭐⭐",
      danger: "Очень низкий"
    },
    {
      emoji: "⛰️",
      name: "Гора, которую все обходят",
      location: "Эверест, Земля",
      description: "Высокая каменная структура. Люди тратят месяцы, чтобы добраться до вершины, а потом сразу спускаются. Логика неясна.",
      rating: "⭐⭐⭐",
      danger: "Высокий"
    },
    {
      emoji: "🏢",
      name: "Башни для хранения людей",
      location: "Мегаполисы",
      description: "Вертикальные структуры, где люди живут в маленьких коробках друг над другом. Очень эффективно для наблюдения.",
      rating: "⭐⭐⭐⭐",
      danger: "Средний"
    },
    {
      emoji: "🏖️",
      name: "Места для жарки людей",
      location: "Побережья океанов",
      description: "Люди лежат под звездой и меняют цвет кожи. Иногда закапывают друг друга в песок. Ритуал непонятен.",
      rating: "⭐⭐⭐⭐⭐",
      danger: "Низкий"
    },
    {
      emoji: "🎡",
      name: "Машины для кружения людей",
      location: "Парки развлечений",
      description: "Механизмы, которые крутят людей в разные стороны. Люди платят за это и кричат от радости. Или ужаса.",
      rating: "⭐⭐⭐⭐⭐",
      danger: "Средний"
    },
    {
      emoji: "🍕",
      name: "Храмы круглой еды",
      location: "Пиццерии по всему миру",
      description: "Священные места, где люди поклоняются плоским круглым объектам с расплавленным сыром. Очень популярно.",
      rating: "⭐⭐⭐⭐⭐",
      danger: "Очень низкий"
    },
    {
      emoji: "📱",
      name: "Зоны гипноза прямоугольниками",
      location: "Везде",
      description: "Люди смотрят в светящиеся прямоугольники и не замечают окружающий мир. Идеально для незаметного наблюдения.",
      rating: "⭐⭐⭐⭐⭐",
      danger: "Очень низкий"
    }
  ];

  const getDangerColor = (danger) => {
    switch(danger) {
      case "Очень низкий": return "text-green-400";
      case "Низкий": return "text-yellow-400";
      case "Средний": return "text-orange-400";
      case "Высокий": return "text-red-400";
      default: return "text-gray-400";
    }
  };

  return (
    <section id="attractions" className="py-20 px-4 bg-gradient-to-b from-indigo-900 to-purple-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            🗺️ Карта Достопримечательностей Земли
          </h2>
          <p className="text-xl md:text-2xl text-cyan-300 max-w-4xl mx-auto">
            Самые странные и удивительные места на этой загадочной планете
          </p>
          <div className="mt-4 text-yellow-300">
            ⚠️ Все локации проверены нашими разведчиками
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {attractions.map((attraction, index) => (
            <Card key={index} className="bg-gradient-to-br from-purple-800/60 to-blue-900/60 border-cyan-500/40 hover:border-cyan-400/80 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">{attraction.emoji}</div>
                <CardTitle className="text-lg text-yellow-300 leading-tight">
                  {attraction.name}
                </CardTitle>
                <CardDescription className="text-green-400">
                  📍 {attraction.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-200 text-sm leading-relaxed">
                  {attraction.description}
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-yellow-300">{attraction.rating}</span>
                  <span className={`font-semibold ${getDangerColor(attraction.danger)}`}>
                    🛡️ {attraction.danger}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg p-6 border border-yellow-500/30">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">🎯 Статистика Исследований</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="text-2xl font-bold text-green-400">8</div>
                <div className="text-xs text-gray-300">Изученных локаций</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">∞</div>
                <div className="text-xs text-gray-300">Странностей</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">42</div>
                <div className="text-xs text-gray-300">Загадок</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">100%</div>
                <div className="text-xs text-gray-300">Веселья</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}