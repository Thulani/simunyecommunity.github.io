import { Link } from 'react-router-dom'

export default function Button({
  to,
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  style: styleProp,
  ...props
}) {
  const base = 'inline-flex items-center justify-center font-bold rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-offset-2'

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const variants = {
    primary: 'text-white hover:opacity-90 focus:ring-[#2540E8]',
    outline: 'border-2 hover:bg-[#ECEEE7] focus:ring-[#2540E8]',
    accent: 'text-white hover:opacity-90 focus:ring-[#FF3E7F]',
    ghost: 'hover:bg-[#ECEEE7] focus:ring-[#2540E8]',
  }

  const variantStyles = {
    primary: { background: '#2540E8' },
    outline: { borderColor: '#2540E8', color: '#2540E8' },
    accent: { background: '#FF3E7F' },
    ghost: { color: '#565F6E' },
  }

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`
  const mergedStyle = { ...variantStyles[variant], ...styleProp }

  if (to) {
    return (
      <Link to={to} className={cls} style={mergedStyle} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={cls} style={mergedStyle} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={cls} style={mergedStyle} {...props}>
      {children}
    </button>
  )
}
