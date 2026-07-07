import { useState } from 'react'

export function PriceOptions({ options, onSelect }) {
  const [selected, setSelected] = useState(options[0])

  const handleClick = (opt) => {
    setSelected(opt)
    onSelect?.(opt)
  }

  return (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
      {options.map((opt) => {
        const isActive = selected.label === opt.label
        return (
          <button
            key={opt.label}
            type="button"
            onClick={() => handleClick(opt)}
            className="eyebrow"
            style={{
              padding: '10px 16px',
              border: `1px solid ${isActive ? 'var(--text)' : 'var(--border)'}`,
              background: isActive ? 'var(--text)' : 'transparent',
              color: isActive ? 'var(--bg)' : 'var(--text)',
              cursor: 'pointer',
            }}
          >
            {opt.label} — ${opt.price}
          </button>
        )
      })}
    </div>
  )
}
