'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function AlienReviews() {
  const reviews = [
    {
      name: "xX_Zorg_7_Xx",
      avatar: "👽",
      rating: 5,
      title: "EPIC WIN!!1!",
      review: "OMG humans saw me and now I'm mayor lmaooo 😂 They're so nice when they think they're hallucinating fr fr no cap",
      planet: "Alpha Centauri B",
      visitDate: "2024",
      memeLevel: "LEGENDARY",
      verified: true
    },
    {
      name: "BlipBlop_Gaming",
      avatar: "🛸",
      rating: 4,
      title: "Too much liquid but OK",
      review: "Bruh this 'coffee' thing hits different 💀 Haven't slept in 3 months but WHO NEEDS SLEEP ANYWAY",
      planet: "Vega System",
      visitDate: "2023",
      memeLevel: "DANK",
      verified: false
    },
    {
      name: "Xenon99_Nebula",
      avatar: "👾",
      rating: 5,
      title: "PIZZA = LIFE CHANGING",
      review: "Tried pizza. Mind = BLOWN 🤯 Opening franchise on home planet. Humans are culinary GODS",
      planet: "Orion Nebula",
      visitDate: "2024",
      memeLevel: "POGGERS",
      verified: true
    },
    {
      name: "GlorbTentacles",
      avatar: "🐙",
      rating: 3,
      title: "Weird traditions but OK",
      review: "Humans stare at screens and laugh??? Don't get it but it's contagious. Laughed for 6 hours straight 💀",
      planet: "Sirius System",
      visitDate: "2023",
      memeLevel: "SUS",
      verified: false
    },
    {
      name: "QuasarGlow420",
      avatar: "✨",
      rating: 5,
      title: "TEA = MEANING OF LIFE",
      review: "Saw humans queue for hot leaf water. Joined them. NOW I UNDERSTAND EVERYTHING 🧠✨",
      planet: "Andromeda Galaxy",
      visitDate: "2024",
      memeLevel: "ENLIGHTENED",
      verified: true
    },
    {
      name: "Neptune_X_Rings",
      avatar: "🪐",
      rating: 4,
      title: "Gravity is weird but cool",
      review: "Humans fall down and get up. Thought it was ritual. Turns out they're just clumsy lol 😅",
      planet: "Saturn's Rings",
      visitDate: "2023",
      memeLevel: "NOOB",
      verified: false
    },
    {
      name: "PulsarBeats",
      avatar: "🎵",
      rating: 5,
      title: "MUSIC = UNIVERSE HACK",
      review: "Discovered human music. My pulse is now synced to beats. Doctors are SHOOK 🎵💓",
      planet: "Pulsar PSR B1919+21",
      visitDate: "2024",
      memeLevel: "VIBES",
      verified: true
    },
    {
      name: "CometTail_Speed",
      avatar: "☄️",
      rating: 4,
      title: "ADRENALINE RUSH!!!",
      review: "Tried 'roller coasters'. Now I understand human adrenaline addiction. My tail still shaking 🎢",
      planet: "Kuiper Belt",
      visitDate: "2023",
      memeLevel: "EXTREME",
      verified: false
    },
    {
      name: "GalaxySpiral",
      avatar: "🌌",
      rating: 5,
      title: "REVERSE UNO CARD",
      review: "Humans keep small fluffy creatures as 'pets'. Got myself a human. Very obedient 😏",
      planet: "Milky Way (Other Arm)",
      visitDate: "2024",
      memeLevel: "CHAD",
      verified: true
    }
  ];

  const renderStars = (rating) => {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  const getMemeColor = (level) => {
    const colors = {
      'LEGENDARY': 'text-yellow-400 animate-pulse',
      'POGGERS': 'text-green-400',
      'DANK': 'text-purple-400',
      'CHAD': 'text-red-400',
      'VIBES': 'text-pink-400',
      'ENLIGHTENED': 'text-cyan-400',
      'EXTREME': 'text-orange-400',
      'SUS': 'text-gray-400',
      'NOOB': 'text-blue-400'
    };
    return colors[level] || 'text-white';
  };

  return (
    <section className="relative py-20 px-4 bg-black overflow-hidden">
      {/* Retro Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(cyan 1px, transparent 1px),
            linear-gradient(90deg, cyan 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>
      
      {/* Floating Neon Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-pink-500 rounded-full blur-xl opacity-30 animate-bounce"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-cyan-500 rounded-full blur-lg opacity-40 animate-pulse"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-yellow-500 rounded-full blur-xl opacity-25 animate-bounce" style={{animationDelay: '1s'}}></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-pink-500 via-cyan-500 to-yellow-500 bg-clip-text text-transparent animate-pulse">
              👾 ALIEN REVIEWS 👾
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-blue-600 to-purple-600 rounded-lg blur opacity-25 animate-pulse"></div>
          </h2>
          <p className="text-xl md:text-2xl text-cyan-300 max-w-4xl mx-auto font-mono">
            💯 REAL REVIEWS FROM REAL ALIENS 💯
          </p>
          <div className="mt-4 text-yellow-300 font-bold text-lg animate-bounce">
            🔥 NO CAP ZONE - 100% LEGIT 🔥
          </div>
          <div className="mt-2 text-pink-400 text-sm">
            ⚠️ All reviews translated from Galactic Internet Slang ⚠️
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="relative bg-black border-2 border-cyan-500 hover:border-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/50 transform hover:rotate-1 group">
              {/* Neon glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-cyan-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
              
              <div className="relative bg-black rounded-lg p-4">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl animate-bounce">{review.avatar}</div>
                      <div className="flex-1">
                        <CardTitle className="text-lg text-yellow-300 leading-tight font-mono flex items-center gap-2">
                          {review.name}
                          {review.verified && <span className="text-blue-400 text-sm">✓</span>}
                        </CardTitle>
                        <CardDescription className="text-cyan-400 text-xs font-mono">
                          {review.planet}
                        </CardDescription>
                      </div>
                    </div>
                    <div className={`text-xs font-bold px-2 py-1 rounded border ${getMemeColor(review.memeLevel)} border-current`}>
                      {review.memeLevel}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-yellow-400 text-lg">{renderStars(review.rating)}</div>
                    <div className="text-xs text-gray-400 font-mono">{review.visitDate}</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 pt-2">
                  <h3 className="font-bold text-green-400 text-sm uppercase tracking-wide">{review.title}</h3>
                  <p className="text-gray-200 text-sm leading-relaxed font-mono">
                    "{review.review}"
                  </p>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-pink-400">👍 {Math.floor(Math.random() * 1000) + 100} likes</span>
                    <span className="text-cyan-400">💬 {Math.floor(Math.random() * 50) + 5} replies</span>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="relative inline-block bg-black border-4 border-pink-500 rounded-lg p-8 transform hover:scale-105 transition-all duration-300">
            {/* Neon glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-cyan-600 to-yellow-600 rounded-lg blur opacity-40 animate-pulse"></div>
            
            <div className="relative">
              <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-pink-400 via-cyan-400 to-yellow-400 bg-clip-text mb-6 font-mono animate-pulse">
                📊 EPIC STATS 📊
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="transform hover:scale-110 transition-transform">
                  <div className="text-4xl font-bold text-green-400 animate-bounce">4.9</div>
                  <div className="text-sm text-gray-300 font-mono">AVG RATING</div>
                  <div className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</div>
                </div>
                <div className="transform hover:scale-110 transition-transform">
                  <div className="text-4xl font-bold text-blue-400 animate-pulse">99%</div>
                  <div className="text-sm text-gray-300 font-mono">WOULD RECOMMEND</div>
                  <div className="text-green-400 text-sm">💯 BASED</div>
                </div>
                <div className="transform hover:scale-110 transition-transform">
                  <div className="text-4xl font-bold text-purple-400">1.2M</div>
                  <div className="text-sm text-gray-300 font-mono">HAPPY ALIENS</div>
                  <div className="text-pink-400 text-sm">🚀 STONKS</div>
                </div>
                <div className="transform hover:scale-110 transition-transform">
                  <div className="text-4xl font-bold text-yellow-400 animate-spin">∞</div>
                  <div className="text-sm text-gray-300 font-mono">EPIC MOMENTS</div>
                  <div className="text-cyan-400 text-sm">🔥 LIT</div>
                </div>
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500 rounded-lg p-4">
                  <p className="text-yellow-300 text-lg font-bold font-mono">
                    🏆 "BEST TRAVEL AGENCY IN THE GALAXY" 🏆
                  </p>
                  <p className="text-orange-300 text-sm">
                    - Galactic Tourism Weekly (2024)
                  </p>
                </div>
                
                <div className="flex justify-center space-x-4 text-sm">
                  <span className="bg-red-500/20 border border-red-500 px-3 py-1 rounded text-red-300 font-mono">
                    🔥 TRENDING #1
                  </span>
                  <span className="bg-green-500/20 border border-green-500 px-3 py-1 rounded text-green-300 font-mono">
                    ✅ VERIFIED LEGIT
                  </span>
                  <span className="bg-purple-500/20 border border-purple-500 px-3 py-1 rounded text-purple-300 font-mono">
                    💎 PREMIUM QUALITY
                  </span>
                </div>
                
                <div className="text-pink-400 text-xs font-mono animate-bounce">
                  ⚠️ WARNING: May cause extreme happiness and addiction to Earth ⚠️
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </section>
  );
}