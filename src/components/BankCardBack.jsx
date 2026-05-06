import { useState, useCallback, useRef } from 'react'

const CARD_NUMBER = '5100 8199 0340 8288'
const CARD_EXPIRES = '08/27'
const CARD_CVC = '123'

function CopyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: '16px', height: 'auto', flexShrink: 0, color: '#191919' }}
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: '16px', height: 'auto', flexShrink: 0, color: '#191919' }}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function Field({ label, value, field, copiedField, onCopy, style }) {
  const isCopied = copiedField === field
  return (
    <div
      className="flex flex-col items-start gap-1 justify-center absolute p-0"
      onClick={(e) => onCopy(field, value, e)}
      style={{ ...style, cursor: 'pointer' }}
    >
      <div className="tracking-[0.16px] text-[#9F9F9F] font-medium text-xs/4 line-clamp-1">
        {label}
      </div>
      <div className="flex items-center gap-1 p-0">
        <div className="tracking-[0.16px] text-[#191919] font-medium text-base/5 line-clamp-1">
          {value}
        </div>
        <span key={isCopied ? 'check' : 'copy'} style={{ display: 'flex', animation: 'icon-appear 0.18s ease-out' }}>
          {isCopied ? <CheckIcon /> : <CopyIcon />}
        </span>
      </div>
    </div>
  )
}

export default function BankCardBack() {
  const [copiedField, setCopiedField] = useState(null)
  const timerRef = useRef(null)

  const handleCopy = useCallback((field, value, e) => {
    e.stopPropagation()
    navigator.clipboard.writeText(value)
    setCopiedField(field)
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setCopiedField(null), 1500)
  }, [])

  return (
    <div className="[font-synthesis:none] w-67.5 h-42 rounded-xl relative bg-[#F5F0FF] border border-solid border-[#E1E1E1] antialiased overflow-hidden" style={{ boxShadow: '0px 16px 32px rgba(0,0,0,0.08)' }}>
      {/* Magnetic stripe */}
      <div className="flex flex-col items-start gap-0 pt-3 pb-0 w-full left-0 top-0 absolute px-0">
        <div className="h-8 self-stretch bg-[#333333] shrink-0" />
      </div>

      {/* Card number */}
      <Field
        label="номер"
        value={CARD_NUMBER}
        field="number"
        copiedField={copiedField}
        onCopy={handleCopy}
        style={{ left: '1.1875rem', top: '3.6875rem' }}
      />

      {/* Expiry */}
      <Field
        label="срок"
        value={CARD_EXPIRES}
        field="expires"
        copiedField={copiedField}
        onCopy={handleCopy}
        style={{ left: '1.1875rem', top: '6.9375rem' }}
      />

      {/* CVC */}
      <Field
        label="код"
        value={CARD_CVC}
        field="cvc"
        copiedField={copiedField}
        onCopy={handleCopy}
        style={{ left: '8.8125rem', top: '6.9375rem' }}
      />
    </div>
  )
}
