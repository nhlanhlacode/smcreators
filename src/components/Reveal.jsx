import useReveal from '../hooks/useReveal.js'

const VARIANTS = {
  up: 'translate-y-8',
  down: '-translate-y-8',
  left: 'translate-x-8',
  right: '-translate-x-8',
  scale: 'scale-95',
}

/**
 * Wraps children in a fade/slide-in animation triggered on scroll.
 * `delay` accepts a Tailwind-safe ms string, e.g. "150ms".
 */
export default function Reveal({
  children,
  as: Tag = 'div',
  direction = 'up',
  delay = '0ms',
  className = '',
  ...rest
}) {
  const [ref, visible] = useReveal()

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        visible
          ? 'opacity-100 translate-x-0 translate-y-0 scale-100'
          : `opacity-0 ${VARIANTS[direction]}`
      } ${className}`}
      style={{ transitionDelay: visible ? delay : '0ms' }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
