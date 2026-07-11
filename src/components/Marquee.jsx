const ITEMS = [
  'Brand Development',
  'Page Reviews',
  'Content Strategy',
  'Media Kits',
  'Brand Pitches',
  'Content Calendars',
]

export default function Marquee() {
  const track = [...ITEMS, ...ITEMS]

  return (
    <div
      className="relative overflow-hidden border-y border-taupe-900/10 bg-cream py-4"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap [animation-play-state:running] hover:[animation-play-state:paused]">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 text-sm font-medium uppercase tracking-widest2 text-taupe-900/50"
          >
            {item}
            <span className="text-brass">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
