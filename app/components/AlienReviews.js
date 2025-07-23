import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function AlienReviews() {
  const reviews = [
    {
      name: "Зорг-7 из Альфа Центавра",
      avatar: "👽",
      rating: 5,
      title: "Невероятный опыт!",
      review: "Меня увидели. Теперь я мэр. Люди очень гостеприимные, особенно когда думают, что галлюцинируют.",
      planet: "Альфа Центавра B",
      visitDate: "2024"
    },
    {
      name: "Блип-Блоп Галактический",
      avatar: "🛸",
      rating: 4,
      title: "Слишком много жидкостей",
      review: "Слишком много жидкостей. Понравилось. Особенно та, что называется 'кофе'. Теперь не могу спать уже 3 месяца.",
      planet: "Вега",
      visitDate: "2023"
    },
    {
      name: "Ксенон-99 Туманность",
      avatar: "👾",
      rating: 5,
      title: "Лучший отпуск в жизни!",
      review: "Попробовал пиццу. Теперь открываю филиал на родной планете. Люди - гении кулинарии!",
      planet: "Туманность Ориона",
      visitDate: "2024"
    },
    {
      name: "Глорб Многощупальцевый",
      avatar: "🐙",
      rating: 3,
      title: "Странные традиции",
      review: "Люди смотрят на экраны и смеются. Не понимаю, но заразительно. Смеялся 6 часов подряд.",
      planet: "Система Сириуса",
      visitDate: "2023"
    },
    {
      name: "Квазар Светящийся",
      avatar: "✨",
      rating: 5,
      title: "Удивительная планета!",
      review: "Видел, как люди стоят в очереди за горячей водой с листьями. Присоединился. Теперь понимаю смысл жизни.",
      planet: "Галактика Андромеда",
      visitDate: "2024"
    },
    {
      name: "Нептун-Х Кольцевой",
      avatar: "🪐",
      rating: 4,
      title: "Интересная гравитация",
      review: "Гравитация странная, но привыкаешь. Люди падают и встают. Думал, это ритуал, оказалось - неуклюжесть.",
      planet: "Кольца Сатурна",
      visitDate: "2023"
    },
    {
      name: "Пульсар Ритмичный",
      avatar: "🎵",
      rating: 5,
      title: "Музыка космоса!",
      review: "Открыл для себя человеческую музыку. Теперь мой пульс синхронизирован с битами. Врачи в шоке.",
      planet: "Пульсар PSR B1919+21",
      visitDate: "2024"
    },
    {
      name: "Комета Хвостатая",
      avatar: "☄️",
      rating: 4,
      title: "Быстро и весело",
      review: "Попробовал 'американские горки'. Теперь понимаю, почему люди любят адреналин. Мой хвост до сих пор дрожит.",
      planet: "Пояс Койпера",
      visitDate: "2023"
    },
    {
      name: "Галактика Спиральная",
      avatar: "🌌",
      rating: 5,
      title: "Культурный шок",
      review: "Люди держат маленьких пушистых существ и называют их 'домашними'. Завел себе человека. Очень послушный.",
      planet: "Млечный Путь (другой рукав)",
      visitDate: "2024"
    }
  ];

  const renderStars = (rating) => {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-indigo-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            🌟 Отзывы Пришельцев
          </h2>
          <p className="text-xl md:text-2xl text-cyan-300 max-w-4xl mx-auto">
            Что говорят наши довольные клиенты о турах на Землю
          </p>
          <div className="mt-4 text-yellow-300">
            💬 Все отзывы переведены с галактического
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-gradient-to-br from-indigo-900/60 to-purple-900/60 border-cyan-500/40 hover:border-cyan-400/80 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{review.avatar}</div>
                  <div className="flex-1">
                    <CardTitle className="text-lg text-yellow-300 leading-tight">
                      {review.name}
                    </CardTitle>
                    <CardDescription className="text-cyan-400 text-sm">
                      {review.planet}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-yellow-400">{renderStars(review.rating)}</div>
                  <div className="text-xs text-gray-400">{review.visitDate}</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <h3 className="font-semibold text-green-400">{review.title}</h3>
                <p className="text-gray-200 text-sm leading-relaxed italic">
                  "{review.review}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg p-8 border border-cyan-500/30">
            <h3 className="text-3xl font-bold text-cyan-300 mb-6">📈 Статистика Отзывов</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-green-400">4.7</div>
                <div className="text-sm text-gray-300">Средняя оценка</div>
                <div className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">98%</div>
                <div className="text-sm text-gray-300">Рекомендуют друзьям</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">847K</div>
                <div className="text-sm text-gray-300">Довольных туристов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">∞</div>
                <div className="text-sm text-gray-300">Незабываемых моментов</div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-cyan-300 text-lg">
                🏆 "Лучшее туристическое агентство галактики" - Журнал "Космический Турист"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}