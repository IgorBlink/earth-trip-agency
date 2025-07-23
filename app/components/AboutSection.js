import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutSection() {
  const companyFacts = [
    {
      title: "🏛️ Наша История",
      description: "Основана в 2847 году до н.э.",
      content: "Наш офис расположен под пирамидой Хеопса. Мы были первыми, кто начал организовывать туры на Землю после того, как местные жители изобрели колесо. С тех пор мы наблюдаем за их эволюцией с большим интересом и легким недоумением."
    },
    {
      title: "📅 Древний Календарь Посадок",
      description: "Более 4000 лет опыта",
      content: "Наш календарь посадок высечен на камне и обновляется каждое тысячелетие. Мы помним времена, когда люди поклонялись огню, и до сих пор не понимаем, почему они перестали это делать."
    },
    {
      title: "🎖️ Сертификация",
      description: "Лицензия Галактического Совета #42",
      content: "Мы единственная компания, получившая разрешение на туризм в систему Млечный Путь после инцидента с динозаврами. Обещаем больше не ронять астероиды на планету."
    },
    {
      title: "👽 Наша Команда",
      description: "Профессионалы с 17 планет",
      content: "В нашей команде работают лучшие гиды из разных галактик. Наш главный экскурсовод Зорг изучал человеческое поведение 300 лет и до сих пор смеется над их попытками летать на металлических птицах."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-purple-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            О Компании "Земля Тур"
          </h2>
          <p className="text-xl md:text-2xl text-cyan-300 max-w-3xl mx-auto">
            Мы знаем Землю лучше, чем сами земляне! 🌍
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {companyFacts.map((fact, index) => (
            <Card key={index} className="bg-gradient-to-br from-purple-800/50 to-blue-900/50 border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-300">
                  {fact.title}
                </CardTitle>
                <CardDescription className="text-green-400 text-lg">
                  {fact.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 leading-relaxed">
                  {fact.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-6 border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">🏆 Наши Достижения</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-green-400">847,392</div>
                <div className="text-sm text-gray-300">Довольных туристов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">0</div>
                <div className="text-sm text-gray-300">Потерянных кораблей*</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">∞</div>
                <div className="text-sm text-gray-300">Лет гарантии</div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">* В этом тысячелетии</p>
          </div>
        </div>
      </div>
    </section>
  );
}