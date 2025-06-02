import React from 'react';

// Premium animated background component
const PremiumAnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Sophisticated gradient mesh */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Premium gradient definitions */}
            <radialGradient id="premiumGrad1" cx="0.3" cy="0.2" r="0.6">
              <stop offset="0%" stopColor="rgba(139, 69, 19, 0.15)" />
              <stop offset="50%" stopColor="rgba(218, 165, 32, 0.1)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <radialGradient id="premiumGrad2" cx="0.7" cy="0.8" r="0.5">
              <stop offset="0%" stopColor="rgba(75, 0, 130, 0.2)" />
              <stop offset="50%" stopColor="rgba(138, 43, 226, 0.15)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <radialGradient id="premiumGrad3" cx="0.9" cy="0.1" r="0.4">
              <stop offset="0%" stopColor="rgba(25, 25, 112, 0.18)" />
              <stop offset="50%" stopColor="rgba(72, 61, 139, 0.12)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            
            {/* Luxury pattern filter */}
            <filter id="luxuryGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            {/* Premium geometric pattern */}
            <pattern id="premiumPattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <g opacity="0.03">
                <circle cx="60" cy="60" r="2" fill="white"/>
                <circle cx="20" cy="20" r="1.5" fill="gold"/>
                <circle cx="100" cy="20" r="1.5" fill="silver"/>
                <circle cx="20" cy="100" r="1.5" fill="white"/>
                <circle cx="100" cy="100" r="1.5" fill="gold"/>
                <path d="M30,60 L90,60 M60,30 L60,90" stroke="white" strokeWidth="0.5" opacity="0.3"/>
                <polygon points="60,40 70,50 60,60 50,50" fill="white" opacity="0.2"/>
              </g>
            </pattern>
            
            {/* Animated diamond pattern */}
            <pattern id="diamondPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <g opacity="0.08">
                <path d="M40,10 L60,30 L40,50 L20,30 Z" fill="none" stroke="url(#diamondGradient)" strokeWidth="1"/>
                <path d="M0,40 L20,60 L0,80 L-20,60 Z" fill="none" stroke="url(#diamondGradient)" strokeWidth="0.8"/>
                <path d="M80,40 L100,60 L80,80 L60,60 Z" fill="none" stroke="url(#diamondGradient)" strokeWidth="0.8"/>
              </g>
            </pattern>
            
            <linearGradient id="diamondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,215,0,0.3)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
              <stop offset="100%" stopColor="rgba(192,192,192,0.3)" />
            </linearGradient>
          </defs>
          
          {/* Background layers */}
          <rect width="100%" height="100%" fill="url(#premiumPattern)"/>
          <rect width="100%" height="100%" fill="url(#diamondPattern)" transform="rotate(45 50 50)" style={{animation: 'patternRotate 30s linear infinite'}}/>
          
          {/* Floating premium orbs */}
          <circle cx="20%" cy="25%" r="180" fill="url(#premiumGrad1)" filter="url(#luxuryGlow)" style={{animation: 'premiumFloat 12s ease-in-out infinite'}}/>
          <circle cx="80%" cy="15%" r="140" fill="url(#premiumGrad2)" filter="url(#luxuryGlow)" style={{animation: 'premiumFloat 8s ease-in-out infinite reverse'}}/>
          <circle cx="70%" cy="75%" r="120" fill="url(#premiumGrad3)" filter="url(#luxuryGlow)" style={{animation: 'premiumFloat 15s ease-in-out infinite'}}/>
          
          {/* Luxury geometric shapes */}
          <g opacity="0.1" style={{animation: 'geometryRotate 25s linear infinite'}}>
            <polygon points="15%,10% 25%,5% 35%,10% 30%,20% 20%,20%" fill="gold" filter="url(#luxuryGlow)"/>
            <polygon points="75%,85% 85%,80% 95%,85% 90%,95% 80%,95%" fill="silver" filter="url(#luxuryGlow)"/>
          </g>
          
          {/* Premium light rays */}
          <g opacity="0.06">
            <path d="M0,50% L100%,50%" stroke="url(#rayGradient)" strokeWidth="2" style={{animation: 'rayPulse 4s ease-in-out infinite'}}/>
            <path d="M50%,0 L50%,100%" stroke="url(#rayGradient)" strokeWidth="1.5" style={{animation: 'rayPulse 6s ease-in-out infinite reverse'}}/>
          </g>
          
          <linearGradient id="rayGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="20%" stopColor="rgba(255,215,0,0.3)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="80%" stopColor="rgba(255,215,0,0.3)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </svg>
      </div>

      {/* Premium floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'bg-yellow-400/20' : 
              i % 3 === 1 ? 'bg-white/30' : 'bg-purple-400/20'
            }`}
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `premiumTwinkle ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
              boxShadow: '0 0 10px currentColor'
            }}
          />
        ))}
      </div>

      {/* Luxury overlay gradients */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at top left, rgba(139, 69, 19, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at top right, rgba(75, 0, 130, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at bottom center, rgba(25, 25, 112, 0.06) 0%, transparent 50%)
          `
        }}
      />

      <style jsx>{`
        @keyframes premiumFloat {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          33% { transform: translateY(-30px) translateX(20px) rotate(120deg); }
          66% { transform: translateY(-10px) translateX(-15px) rotate(240deg); }
        }
        @keyframes patternRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes geometryRotate {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }
        @keyframes premiumTwinkle {
          0%, 100% { opacity: 0.3; transform: scale(1) rotate(0deg); }
          25% { opacity: 0.8; transform: scale(1.3) rotate(90deg); }
          50% { opacity: 1; transform: scale(1.6) rotate(180deg); }
          75% { opacity: 0.8; transform: scale(1.3) rotate(270deg); }
        }
        @keyframes rayPulse {
          0%, 100% { opacity: 0.06; }
          50% { opacity: 0.12; }
        }
      `}</style>
    </div>
  );
};
export default PremiumAnimatedBackground;
