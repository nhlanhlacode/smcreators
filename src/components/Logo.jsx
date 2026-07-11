export default function Logo({ tone = 'dark', className = '' }) {
  const color = tone === 'light' ? 'text-white' : 'text-taupe-900'
  return (
    <span
      className={`font-serif italic font-semibold tracking-tightest ${color} ${className}`}
      style={{ fontVariantLigatures: 'common-ligatures' }}
    >
      sm
    </span>
  )
}
