import { useCallback, useEffect, useRef } from 'react'

function supportsHover(event) {
  return event.pointerType === 'mouse' &&
    window.matchMedia('(min-width: 1051px) and (hover: hover)').matches
}

export default function NavigationMenu({
  label, id, active, activePanel, setActivePanel, children, keepOpenOnHoverClick = false,
}) {
  const menu = useRef(null)
  const trigger = useRef(null)
  const openedByHover = useRef(false)
  const open = activePanel === id
  const close = useCallback(() => {
    openedByHover.current = false
    setActivePanel((panel) => panel === id ? null : panel)
  }, [id, setActivePanel])

  useEffect(() => {
    if (!open) return
    function closeOutside(event) {
      if (!menu.current?.contains(event.target)) close()
    }

    document.addEventListener('pointerdown', closeOutside)
    return () => document.removeEventListener('pointerdown', closeOutside)
  }, [close, open])

  return (
    <div
      className="navigation-menu"
      ref={menu}
      onPointerEnter={(event) => {
        if (!open && supportsHover(event)) {
          openedByHover.current = true
          setActivePanel(id)
        }
      }}
      onPointerLeave={(event) => {
        if (supportsHover(event) && !event.currentTarget.contains(document.activeElement)) close()
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) close()
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && open) {
          event.stopPropagation()
          close()
          trigger.current?.focus()
        }
      }}
    >
      <button
        className="navigation-menu-toggle"
        ref={trigger}
        type="button"
        data-active={active}
        aria-expanded={open}
        aria-controls={id}
        onClick={(event) => {
          const keepOpen = keepOpenOnHoverClick && event.detail > 0 && openedByHover.current
          openedByHover.current = false
          setActivePanel((panel) => panel === id && !keepOpen ? null : id)
        }}
      >
        {label} <span aria-hidden="true" />
      </button>
      <div className="navigation-menu-panel" id={id} hidden={!open}>
        {children}
      </div>
    </div>
  )
}
