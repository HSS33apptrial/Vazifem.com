import { ReactCompareSlider, ReactCompareSliderHandle } from 'react-compare-slider';

function CemeteryBefore() {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Sky - overcast gray */}
      <defs>
        <linearGradient id="skyBefore" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8a8a8a" />
          <stop offset="100%" stopColor="#b0b0a8" />
        </linearGradient>
        <linearGradient id="grassBefore" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7a7a60" />
          <stop offset="100%" stopColor="#5a5a45" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#skyBefore)" />

      {/* Ground */}
      <ellipse cx="400" cy="500" rx="500" ry="200" fill="url(#grassBefore)" />

      {/* Background trees - bare/withered */}
      <g opacity="0.4">
        <line x1="120" y1="180" x2="120" y2="320" stroke="#4a4a3a" strokeWidth="4" />
        <line x1="120" y1="180" x2="100" y2="150" stroke="#4a4a3a" strokeWidth="2" />
        <line x1="120" y1="200" x2="145" y2="165" stroke="#4a4a3a" strokeWidth="2" />
        <line x1="680" y1="160" x2="680" y2="310" stroke="#4a4a3a" strokeWidth="4" />
        <line x1="680" y1="160" x2="660" y2="130" stroke="#4a4a3a" strokeWidth="2" />
        <line x1="680" y1="180" x2="705" y2="150" stroke="#4a4a3a" strokeWidth="2" />
      </g>

      {/* Main tombstone - weathered */}
      <g>
        {/* Base */}
        <rect x="330" y="350" width="140" height="20" rx="2" fill="#6b6b5e" />
        {/* Body */}
        <rect x="350" y="220" width="100" height="130" rx="2" fill="#7a7a6a" />
        {/* Top arc */}
        <path d="M350,220 Q400,170 450,220" fill="#7a7a6a" />
        {/* Cracks */}
        <path d="M380,240 L385,280 L375,310" fill="none" stroke="#5a5a4d" strokeWidth="1.5" />
        <path d="M420,250 L415,290" fill="none" stroke="#5a5a4d" strokeWidth="1" />
        {/* Faded text placeholder */}
        <rect x="370" y="250" width="60" height="4" rx="1" fill="#6a6a5c" opacity="0.6" />
        <rect x="375" y="262" width="50" height="3" rx="1" fill="#6a6a5c" opacity="0.4" />
        <rect x="380" y="272" width="40" height="3" rx="1" fill="#6a6a5c" opacity="0.3" />
      </g>

      {/* Overgrown weeds */}
      <g opacity="0.6">
        <path d="M310,370 Q315,340 320,370" fill="none" stroke="#6a6a50" strokeWidth="2" />
        <path d="M320,370 Q330,330 335,370" fill="none" stroke="#6a6a50" strokeWidth="2" />
        <path d="M460,370 Q465,335 470,370" fill="none" stroke="#6a6a50" strokeWidth="2" />
        <path d="M475,370 Q480,340 490,370" fill="none" stroke="#6a6a50" strokeWidth="2" />
        <path d="M340,375 Q345,350 355,375" fill="none" stroke="#6a6a50" strokeWidth="1.5" />
        <path d="M445,375 Q450,345 460,375" fill="none" stroke="#6a6a50" strokeWidth="1.5" />
      </g>

      {/* Wilted flowers */}
      <g>
        <path d="M290,365 Q285,345 280,360" fill="none" stroke="#8a7a60" strokeWidth="2" />
        <circle cx="280" cy="358" r="4" fill="#9a8a70" />
        <path d="M510,365 Q515,348 520,362" fill="none" stroke="#8a7a60" strokeWidth="2" />
        <circle cx="520" cy="360" r="3.5" fill="#9a8a70" />
      </g>

      {/* Side tombstones - smaller, background */}
      <g opacity="0.5">
        <rect x="160" y="340" width="60" height="10" rx="1" fill="#6b6b5e" />
        <rect x="170" y="290" width="40" height="50" rx="1" fill="#6b6b5e" />
        <path d="M170,290 Q190,265 210,290" fill="#6b6b5e" />

        <rect x="580" y="330" width="70" height="12" rx="1" fill="#6b6b5e" />
        <rect x="592" y="275" width="46" height="55" rx="1" fill="#6b6b5e" />
        <path d="M592,275 Q615,248 638,275" fill="#6b6b5e" />
      </g>

      {/* Dust/dirt patches */}
      <ellipse cx="370" cy="380" rx="30" ry="8" fill="#5a5a45" opacity="0.3" />
      <ellipse cx="430" cy="385" rx="25" ry="6" fill="#5a5a45" opacity="0.25" />
    </svg>
  );
}

function CemeteryAfter() {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Sky - clear blue */}
      <defs>
        <linearGradient id="skyAfter" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#c8e6f0" />
        </linearGradient>
        <linearGradient id="grassAfter" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#skyAfter)" />

      {/* Sun */}
      <circle cx="650" cy="80" r="40" fill="#fde68a" opacity="0.8" />
      <circle cx="650" cy="80" r="50" fill="#fde68a" opacity="0.15" />

      {/* Ground - vibrant green */}
      <ellipse cx="400" cy="500" rx="500" ry="200" fill="url(#grassAfter)" />

      {/* Background trees - healthy */}
      <g opacity="0.5">
        <rect x="115" y="200" width="10" height="120" rx="2" fill="#7a5c3a" />
        <ellipse cx="120" cy="175" rx="30" ry="40" fill="#16a34a" />
        <rect x="675" y="180" width="10" height="130" rx="2" fill="#7a5c3a" />
        <ellipse cx="680" cy="155" rx="35" ry="45" fill="#15803d" />
      </g>

      {/* Small clouds */}
      <g opacity="0.6">
        <ellipse cx="200" cy="60" rx="40" ry="15" fill="white" />
        <ellipse cx="230" cy="55" rx="30" ry="12" fill="white" />
        <ellipse cx="500" cy="45" rx="35" ry="13" fill="white" />
        <ellipse cx="525" cy="40" rx="25" ry="10" fill="white" />
      </g>

      {/* Main tombstone - clean and maintained */}
      <g>
        {/* Base - clean */}
        <rect x="330" y="350" width="140" height="20" rx="3" fill="#e8e4de" />
        {/* Body - polished */}
        <rect x="350" y="220" width="100" height="130" rx="3" fill="#f0ece6" />
        {/* Top arc */}
        <path d="M350,220 Q400,170 450,220" fill="#f0ece6" />
        {/* Border detail */}
        <path d="M355,225 Q400,178 445,225 L445,345 L355,345 Z" fill="none" stroke="#d4cfc6" strokeWidth="1.5" />
        {/* Clean text */}
        <rect x="370" y="250" width="60" height="5" rx="1.5" fill="#8a8578" />
        <rect x="375" y="263" width="50" height="4" rx="1" fill="#9a958a" />
        <rect x="380" y="274" width="40" height="4" rx="1" fill="#9a958a" />
        {/* Star/crescent symbol */}
        <circle cx="400" cy="205" r="8" fill="none" stroke="#9a958a" strokeWidth="1.5" />
      </g>

      {/* Fresh flowers - left */}
      <g>
        <rect x="290" y="350" width="30" height="18" rx="3" fill="#7a5c3a" opacity="0.7" />
        <circle cx="295" cy="345" r="6" fill="#f87171" />
        <circle cx="305" cy="340" r="7" fill="#fb923c" />
        <circle cx="315" cy="344" r="6" fill="#facc15" />
        <circle cx="300" cy="336" r="5" fill="#f472b6" />
        <circle cx="310" cy="334" r="5" fill="#a78bfa" />
        <path d="M298,345 L296,355" stroke="#22c55e" strokeWidth="1.5" />
        <path d="M305,340 L305,355" stroke="#22c55e" strokeWidth="1.5" />
        <path d="M313,343 L315,355" stroke="#22c55e" strokeWidth="1.5" />
      </g>

      {/* Fresh flowers - right */}
      <g>
        <rect x="480" y="350" width="30" height="18" rx="3" fill="#7a5c3a" opacity="0.7" />
        <circle cx="485" cy="345" r="6" fill="#facc15" />
        <circle cx="495" cy="340" r="7" fill="#f87171" />
        <circle cx="505" cy="344" r="6" fill="#f472b6" />
        <circle cx="490" cy="335" r="5" fill="#fb923c" />
        <circle cx="500" cy="333" r="5.5" fill="#a78bfa" />
        <path d="M488,345 L486,355" stroke="#22c55e" strokeWidth="1.5" />
        <path d="M495,340 L495,355" stroke="#22c55e" strokeWidth="1.5" />
        <path d="M503,343 L505,355" stroke="#22c55e" strokeWidth="1.5" />
      </g>

      {/* Side tombstones - also clean */}
      <g opacity="0.55">
        <rect x="160" y="340" width="60" height="10" rx="2" fill="#e8e4de" />
        <rect x="170" y="290" width="40" height="50" rx="2" fill="#f0ece6" />
        <path d="M170,290 Q190,265 210,290" fill="#f0ece6" />

        <rect x="580" y="330" width="70" height="12" rx="2" fill="#e8e4de" />
        <rect x="592" y="275" width="46" height="55" rx="2" fill="#f0ece6" />
        <path d="M592,275 Q615,248 638,275" fill="#f0ece6" />
      </g>

      {/* Trimmed grass details */}
      <g opacity="0.3">
        <path d="M340,378 Q342,372 344,378" stroke="#15803d" strokeWidth="1" fill="none" />
        <path d="M450,380 Q452,374 454,380" stroke="#15803d" strokeWidth="1" fill="none" />
        <path d="M360,382 Q362,376 364,382" stroke="#15803d" strokeWidth="1" fill="none" />
      </g>

      {/* Butterflies */}
      <g opacity="0.5">
        <path d="M250,200 Q245,192 240,200 Q245,195 250,200" fill="#f472b6" />
        <path d="M250,200 Q255,192 260,200 Q255,195 250,200" fill="#f9a8d4" />
        <path d="M550,170 Q545,162 540,170 Q545,165 550,170" fill="#93c5fd" />
        <path d="M550,170 Q555,162 560,170 Q555,165 550,170" fill="#bfdbfe" />
      </g>
    </svg>
  );
}

function CustomHandle() {
  return (
    <ReactCompareSliderHandle
      buttonStyle={{
        backdropFilter: undefined,
        background: '#16a34a',
        border: '3px solid white',
        color: 'white',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
        width: 40,
        height: 40,
      }}
      linesStyle={{
        color: '#16a34a',
        width: 3,
      }}
    />
  );
}

export default function BeforeAfterSlider() {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="rounded-2xl overflow-hidden shadow-2xl border border-neutral-200/50">
        <ReactCompareSlider
          itemOne={
            <div className="w-full h-full bg-[#8a8a8a]">
              <CemeteryBefore />
            </div>
          }
          itemTwo={
            <div className="w-full h-full bg-[#87CEEB]">
              <CemeteryAfter />
            </div>
          }
          handle={<CustomHandle />}
          style={{ height: '100%', aspectRatio: '8/5' }}
        />
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white text-xs sm:text-sm px-3 py-1.5 rounded-full font-medium">
        Öncesi
      </div>
      <div className="absolute top-4 right-4 bg-primary-600/80 backdrop-blur-sm text-white text-xs sm:text-sm px-3 py-1.5 rounded-full font-medium">
        Sonrası
      </div>

      {/* Demo label */}
      <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-sm text-white/80 text-[10px] sm:text-xs px-2 py-1 rounded">
        Demo ekran / temsilidir
      </div>
    </div>
  );
}
