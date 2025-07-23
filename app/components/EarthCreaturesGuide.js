import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function EarthCreaturesGuide() {
  const creatures = [
    {
      emoji: "🐱",
      name: "Кот (Felis domesticus)",
      classification: "Мягкий домашний бог",
      description: "Контролирует 73% интернета. Спит 20 часов в сутки, но каким-то образом управляет людьми. Обладает гипнотическим мурчанием.",
      dangerLevel: "Критический",
      abilities: ["Телепатия", "Манипуляция людьми", "Квантовый сон"],
      habitat: "Коробки, клавиатуры, солнечные пятна"
    },
    {
      emoji: "🐕",
      name: "Собака (Canis familiaris)",
      classification: "Верный компаньон",
      description: "Единственное существо на планете, которое искренне радуется возвращению хозяина из туалета. Обладает сверхспособностью находить еду.",
      dangerLevel: "Дружелюбный",
      abilities: ["Безусловная любовь", "Детекция еды", "Хвостовая сигнализация"],
      habitat: "Рядом с людьми, в парках, в сердцах"
    },
    {
      emoji: "🧹",
      name: "Пылесос (Aspirator domesticus)",
      classification: "Местный монстр",
      description: "Питается шумом и пылью. Кошки считают его главным врагом. Люди используют его для ритуальной очистки территории.",
      dangerLevel: "Средний",
      abilities: ["Поглощение мусора", "Генерация шума", "Запугивание котов"],
      habitat: "Шкафы, под кроватями, в кошмарах котов"
    },
    {
      emoji: "🕷️",
      name: "Паук (Arachnida terrifica)",
      classification: "Архитектор ужаса",
      description: "Строит ловушки из невидимых нитей. Способен заставить 200-килограммового человека кричать как ребенок. Мастер неожиданных появлений.",
      dangerLevel: "Психологический",
      abilities: ["Телепортация", "Архитектура", "Психологическое воздействие"],
      habitat: "Углы, ванные комнаты, кошмары"
    },
    {
      emoji: "🦆",
      name: "Утка (Quackus philosophicus)",
      classification: "Водный философ",
      description: "Задает глубокие вопросы типа 'кря?'. Обладает водонепроницаемостью и способностью выглядеть мудро, ничего не делая.",
      dangerLevel: "Мудрый",
      abilities: ["Философские размышления", "Водная левитация", "Хлебная телепатия"],
      habitat: "Пруды, парки, философские дискуссии"
    },
    {
      emoji: "🐧",
      name: "Пингвин (Tuxedus formalis)",
      classification: "Формальный джентльмен",
      description: "Всегда одет по дресс-коду. Ходит как важный бизнесмен, но живет в холодильнике. Мастер групповых селфи.",
      dangerLevel: "Элегантный",
      abilities: ["Формальный стиль", "Групповая синхронизация", "Ледяная харизма"],
      habitat: "Антарктида, зоопарки, деловые встречи"
    },
    {
      emoji: "🦅",
      name: "Орел (Aquila majesticus)",
      classification: "Небесный надзиратель",
      description: "Профессиональный наблюдатель. Видит мышь с высоты 3 км, но не может найти ключи от машины. Символ свободы и зоркости.",
      dangerLevel: "Величественный",
      abilities: ["Сверхзрение", "Воздушное доминирование", "Символическая значимость"],
      habitat: "Горы, гербы, мотивационные плакаты"
    },
    {
      emoji: "🐙",
      name: "Осьминог (Octopus genialis)",
      classification: "Подводный гений",
      description: "Имеет 8 рук и 3 сердца, но все равно не может обнять всех, кого любит. Мастер камуфляжа и решения головоломок.",
      dangerLevel: "Интеллектуальный",
      abilities: ["Мультитаскинг", "Камуфляж", "Решение проблем"],
      habitat: "Океаны, аквариумы, научные лаборатории"
    }
  ];

  const getDangerColor = (level) => {
    switch(level) {
      case "Дружелюбный": return "text-green-400";
      case "Средний": return "text-yellow-400";
      case "Критический": return "text-red-400";
      case "Психологический": return "text-purple-400";
      case "Мудрый": return "text-blue-400";
      case "Элегантный": return "text-cyan-400";
      case "Величественный": return "text-orange-400";
      case "Интеллектуальный": return "text-pink-400";
      default: return "text-gray-400";
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-purple-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
            📚 Справочник Существ Земли
          </h2>
          <p className="text-xl md:text-2xl text-cyan-300 max-w-4xl mx-auto">
            Полный каталог странных обитателей этой планеты
          </p>
          <div className="mt-4 text-yellow-300">
            🔬 Составлено нашими ксенобиологами
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {creatures.map((creature, index) => (
            <Card key={index} className="bg-gradient-to-br from-gray-900/80 to-purple-900/60 border-pink-500/40 hover:border-pink-400/80 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/20">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">{creature.emoji}</div>
                <CardTitle className="text-lg text-yellow-300 leading-tight">
                  {creature.name}
                </CardTitle>
                <CardDescription className="text-pink-400 font-semibold">
                  {creature.classification}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-200 text-sm leading-relaxed">
                  {creature.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Уровень опасности:</span>
                    <span className={`text-xs font-bold ${getDangerColor(creature.dangerLevel)}`}>
                      {creature.dangerLevel}
                    </span>
                  </div>
                  
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Способности:</div>
                    <div className="flex flex-wrap gap-1">
                      {creature.abilities.map((ability, idx) => (
                        <span key={idx} className="text-xs bg-purple-700/50 text-purple-200 px-2 py-1 rounded">
                          {ability}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-xs text-gray-400">Среда обитания:</div>
                    <div className="text-xs text-green-300">{creature.habitat}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg p-6 border border-pink-500/30">
            <h3 className="text-2xl font-bold text-pink-300 mb-4">📊 Статистика Исследований</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="text-2xl font-bold text-green-400">{creatures.length}</div>
                <div className="text-xs text-gray-300">Изученных видов</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">∞</div>
                <div className="text-xs text-gray-300">Загадок поведения</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">95%</div>
                <div className="text-xs text-gray-300">Дружелюбности</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">100%</div>
                <div className="text-xs text-gray-300">Удивления</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}