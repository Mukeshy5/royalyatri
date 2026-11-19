import React from 'react'
import ArrowUpRight from 'lucide-react/icons/arrow-up-right'
import MessageCircle from 'lucide-react/icons/message-circle'
import X from 'lucide-react/icons/x'

const supportLinks = [
  { id: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/919899241803' },
  { id: 'line', label: 'LINE', href: 'https://line.me/ti/p/FfuXwWnvjQ' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/royalyatri1?lqvp=a3R1OXVhMHgxZDQ5' },
]

const supportIcons = {
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 17.4 4 21l3.7-1A9 9 0 1 0 5 17.4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M8.3 7.6c.3-.2.8-.2 1 .2l1 2.1c.2.4-.1.8-.7 1.4a7.4 7.4 0 0 0 3.2 3.1c.7-.8 1-1.1 1.4-.9l2.1 1c.4.2.4.7.2 1-.4 1-1.1 1.5-2.2 1.4-3.3-.4-6.8-3.8-7.2-7-.1-1 .3-1.8 1.2-2.3Z" fill="currentColor" />
    </svg>
  ),
  line: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3c5.5 0 10 3.5 10 8 0 3.6-3.5 7.2-9 10-.8.4-1.1.1-.9-.6l.3-1.9C6.7 18.7 2 15.1 2 11c0-4.5 4.5-8 10-8Z" fill="currentColor" />
      <path d="M5.5 9.5V13h2.2m1.5-3.5V13m1.8 0V9.5l2.5 3.5V9.5m4 0h-2.3V13h2.3m-2.3-1.8h2.1" fill="none" stroke="var(--support-icon-bg)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
}

export default function HomeSupport() {
  function closeOnEscape(event) {
    const popup = event.currentTarget
    if (event.key !== 'Escape' || !popup.open) return

    popup.open = false
    popup.firstElementChild.focus()
  }

  return (
    <details className="home-support" onKeyDown={closeOnEscape}>
      <summary className="home-support-toggle">
        <MessageCircle className="home-support-chat-icon" size={19} aria-hidden="true" />
        <X className="home-support-close-icon" size={19} aria-hidden="true" />
        Support
      </summary>
      <nav className="home-support-links" aria-label="Support channels">
        {supportLinks.map(({ id, label, href }) => (
          <a className="home-support-link" key={id} href={href} target="_blank" rel="noopener noreferrer">
            <span className={'home-support-icon home-support-icon-' + id}>{supportIcons[id]}</span>
            <span>{label}</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        ))}
      </nav>
    </details>
  )
}
