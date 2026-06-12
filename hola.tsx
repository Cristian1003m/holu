import React from 'react';

function App() {
  // Multiple layers of floating hearts
  const heartEmojis = ['❤️', '💕', '💖', '💗', '💘', '💝', '🩷', '🤍', '💗'];
  
  const hearts = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 10}s`,
    duration: `${4 + Math.random() * 6}s`,
    size: `${14 + Math.random() * 22}px`,
    emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
    side: i % 3 === 0,
  }));

  // Sparkles
  const sparkles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: `${5 + Math.random() * 90}%`,
    top: `${5 + Math.random() * 90}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${1.5 + Math.random() * 2}s`,
    size: `${8 + Math.random() * 12}px`,
  }));

  return (
    <div className="w-full min-h-screen overflow-hidden relative"
      style={{
        background: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd0 30%, #f48fb1 60%, #ec407a 100%)',
      }}
    >
      {/* Animated Hearts Background */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className={`heart-particle ${heart.side ? 'side' : ''}`}
          style={{
            left: heart.left,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
            fontSize: heart.size,
          }}
        >
          {heart.emoji}
        </div>
      ))}

      {/* Sparkles */}
      {sparkles.map((s) => (
        <div
          key={`s-${s.id}`}
          className="sparkle"
          style={{
            left: s.left,
            top: s.top,
            animationDelay: s.delay,
            animationDuration: s.duration,
            fontSize: s.size,
          }}
        >
          ✨
        </div>
      ))}

      {/* Main Content */}
      <main className="w-full min-h-screen relative z-10 flex flex-col justify-center items-center p-4 sm:p-6">
        
        {/* Title */}
        <div className="slide-in mb-4 text-center px-2">
          <span className="rotate-rose text-4xl sm:text-5xl">🌹</span>
          <h1 className="glow-text text-white font-black mt-2 text-xl sm:text-2xl md:text-3xl leading-tight drop-shadow-lg"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
            Feliz aniversario mi esposita ❤️
            <br />
            <span className="text-lg sm:text-xl md:text-2xl">Te amo mi niña hermosa, eres todo para mí 😍</span>
          </h1>
        </div>

        {/* Card */}
        <div className="float-card max-w-sm w-full rounded-[2rem] shadow-2xl p-5 sm:p-6 text-center border-4 rainbow-border backdrop-blur-sm"
          style={{ background: 'rgba(255,255,255,0.88)' }}
        >
          {/* Image */}
          <div className="relative w-full aspect-square mb-5 rounded-3xl overflow-hidden image-pulse border-4 border-pink-300">
            <img 
              src="/assets/aigc/images/snoopy-roses-hearts-v2_1781232642_000.png" 
              alt="Snoopy con ramo de rosas" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            {/* Overlay sparkle */}
            <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent pointer-events-none" />
          </div>

          {/* Main Text */}
          <div className="fade-up">
            <p className="shimmer-text font-extrabold text-xl sm:text-2xl md:text-3xl leading-snug mb-3">
              Tu meme tiquito te ama demasiado
            </p>
            <p className="text-pink-700 font-bold text-lg sm:text-xl mb-2">
              mi niña hermosa
            </p>
            <p className="text-pink-600 font-semibold text-base sm:text-lg mt-2 italic">
              Siempre voy a estar contigo siempre 😘
            </p>
          </div>

          {/* Bouncing Hearts Row */}
          <div className="flex justify-center gap-3 mt-4 mb-3">
            {['😍', '💗', '🌹', '💖', '😍'].map((emoji, i) => (
              <span
                key={i}
                className="bounce-heart text-2xl sm:text-3xl"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {emoji}
              </span>
            ))}
          </div>

          {/* Pop-in emoji accents */}
          <div className="flex justify-center gap-2 mt-3">
            {['💕', '🥰', '💕', '🥰', '💕'].map((emoji, i) => (
              <span
                key={i}
                className="pop-in text-lg"
                style={{ animationDelay: `${0.8 + i * 0.15}s` }}
              >
                {emoji}
              </span>
            ))}
          </div>
        </div>

        {/* Music Player - Audio Only */}
        <div className="pop-in mt-5 w-full max-w-sm px-2" style={{ animationDelay: '1.3s' }}>
          <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-pink-300 bg-white/90 backdrop-blur-sm">
            <div className="px-3 py-2 bg-pink-100 flex items-center gap-2">
              <span className="text-lg animate-bounce">🎵</span>
              <p className="text-pink-700 font-semibold text-xs sm:text-sm truncate">
                🎶 Me Gusta Todo de Ti — Banda El Recodo 🎶
              </p>
            </div>
            {/* YouTube Video Player */}
            <div className="w-full aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/03j7wTQm7KQ"
                title="Me Gusta Todo de Ti - Banda El Recodo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="pop-in mt-4 text-center pb-4" style={{ animationDelay: '1.5s' }}>
          <p className="text-white/90 font-semibold text-sm sm:text-base drop-shadow-md">
            Con todo el amor del mundo 🌎💕
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
