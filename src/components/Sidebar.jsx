const navItems = [
  'Популярные вопросы о картах',
  'Подписки',
  'Точки снятия наличных',
  'Кешбэк',
  'Выпуск новой карты',
]

export default function Sidebar() {
  return (
    <aside
      className="shrink-0 py-8 px-5"
      style={{ width: 280, height: '100%', background: '#F9F9F9' }}
    >
      {/* Back button */}
      <div className="flex justify-start pb-7.5">
        <button
          className="flex items-center justify-center rounded-[10px]"
          style={{
            width: 40,
            height: 40,
            border: '1.5px solid #E1E1E1',
            background: 'transparent',
            cursor: 'pointer',
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="#191919" d="M9.293 4.293a1 1 0 1 1 1.414 1.414L5.414 11H21a1 1 0 0 1 0 2H5.414l5.293 5.293a1 1 0 1 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414z" />
          </svg>
        </button>
      </div>

      {/* Title */}
      <div className="pb-5">
        <h1
          className="text-[#191919] font-semibold"
          style={{ fontSize: '1.5rem', lineHeight: '1.875rem', margin: 0 }}
        >
          Пластиковая карта
        </h1>
      </div>

      {/* Nav items */}
      <nav className="flex flex-col">
        {navItems.map((item) => (
          <button
            key={item}
            className="text-left text-sm font-medium text-[#191919] py-2.5 rounded-[10px] hover:bg-gray-100 transition-colors"
            style={{
              letterSpacing: '0.14px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '10px 0',
            }}
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  )
}
