import BankCard3D from './BankCard3D'
import BankCard from './BankCard'
import BankCardBack from './BankCardBack'

/* ─── Кнопки под картой ─────────────────────────────────────────────────── */
const actionButtons = [
  {
    label: 'Заплатить',
    filled: true,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <path fill="#fff" d="M18 3a3 3 0 0 1 3 3v1q0 .085-.014.166A3 3 0 0 1 23 10v4a3 3 0 0 1-2.014 2.834q.015.081.014.166v1a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zM5 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-1h-3a5 5 0 0 1 0-10h3V6a1 1 0 0 0-1-1zm11 4a3 3 0 1 0 0 6h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm0 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
      </svg>
    ),
  },
  {
    label: 'Пополнить',
    filled: false,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <path fill="#835DE1" d="M16.88 4.371a1 1 0 0 1 1.406-.148A9.98 9.98 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12a9.98 9.98 0 0 1 3.714-7.777 1 1 0 0 1 1.258 1.554 8 8 0 1 0 10.057 0 1 1 0 0 1-.15-1.406M12 3a1 1 0 0 1 1 1v8.586l1.293-1.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L11 12.586V4a1 1 0 0 1 1-1" />
      </svg>
    ),
  },
  {
    label: 'Настройки карты',
    filled: false,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <path fill="#835DE1" d="M14.775 1.47a1 1 0 0 1 .993.004l3.464 2a1 1 0 0 1 .49 1.008l-.343 2.37q.439.628.77 1.329l2.223.89A1 1 0 0 1 23 10v4a1 1 0 0 1-.629.929l-2.223.887a9 9 0 0 1-.768 1.33l.343 2.372c.058.404-.136.804-.49 1.008l-3.465 2a1 1 0 0 1-1.119-.08l-1.883-1.482q-.376.035-.766.036-.392-.002-.77-.036l-1.878 1.481a1 1 0 0 1-1.12.081l-3.464-2a1 1 0 0 1-.49-1.008l.34-2.373a9 9 0 0 1-.768-1.329l-2.221-.887A1 1 0 0 1 1 14v-4a1 1 0 0 1 .628-.929l2.223-.89q.329-.7.767-1.327l-.34-2.372a1 1 0 0 1 .49-1.008l3.464-2 .137-.066a1 1 0 0 1 .982.146l1.882 1.48a9 9 0 0 1 1.532 0l1.884-1.48zm-1.092 3.388a1 1 0 0 1-.75.205A7 7 0 0 0 12 5a7 7 0 0 0-.934.063 1 1 0 0 1-.75-.205l-1.67-1.314-2.292 1.323.303 2.105c.039.267-.034.54-.199.754a7 7 0 0 0-.934 1.614c-.102.25-.302.447-.552.548L3 10.677v2.645l1.97.788a1 1 0 0 1 .553.55 7 7 0 0 0 .935 1.613c.165.215.238.487.2.754l-.304 2.105 2.292 1.323 1.667-1.313.082-.059c.198-.126.435-.179.67-.147q.465.063.935.064.466-.001.933-.064l.1-.008a1 1 0 0 1 .65.213l1.67 1.314 2.292-1.323-.303-2.104a1 1 0 0 1 .199-.754c.38-.491.696-1.034.935-1.615l.043-.092a1 1 0 0 1 .51-.457L21 13.322v-2.645l-1.972-.79c-.25-.1-.45-.298-.552-.547a7 7 0 0 0-.935-1.615 1 1 0 0 1-.198-.754l.302-2.104-2.291-1.323zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
      </svg>
    ),
  },
]

/* ─── Транзакции ──────────────────────────────────────────────────────────── */
const transactions = [
  { id: 1, name: 'УРФУ', amount: '→ 40 000 ₽', status: 'В обработке', time: '29 апреля, 15:57', hasDoc: true },
  { id: 2, name: 'какой-то ларёк', amount: '→ 300 ₽', status: 'В обработке', time: '29 апреля, 15:57' },
  { id: 3, name: 'БИФИДОК', amount: '→ 4 000 ₽', status: 'В обработке', time: '29 апреля, 15:56' },
  { id: 4, name: 'Автосерв', amount: '→ 1 300 ₽', status: 'В обработке', time: '29 апреля, 15:56' },
  { id: 5, name: 'IKEA', amount: '→ 1 000 ₽', status: 'В обработке', time: '29 апреля, 15:56' },
]

/* ─── Виджеты ─────────────────────────────────────────────────────────────── */
const limits = [
  { label: 'Снятие наличных', value: '50 000 ₽', pct: 100 },
  { label: 'Оплата в магазинах', value: '1 200 000 ₽', pct: 100 },
  { label: 'Оплата в интернете', value: '1 200 000 ₽', pct: 100 },
]

/* ─── Вспомогательные компоненты ──────────────────────────────────────────── */
function DropdownChip({ label }) {
  return (
    <div className="flex items-center h-8 gap-2 rounded-[10px] px-2 cursor-pointer" style={{ background: 'rgba(25,25,25,0.05)' }}>
      <span style={{ fontSize: 14, fontWeight: 500, letterSpacing: '0.14px', color: '#191919', whiteSpace: 'nowrap' }}>
        {label}
      </span>
      <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
        <path fill="#949494" d="M9.586 3c.89 0 1.337 1.077.707 1.707L6.707 8.293a1 1 0 0 1-1.414 0L1.707 4.707C1.077 4.077 1.523 3 2.414 3h7.172Z" />
      </svg>
    </div>
  )
}

function WidgetCard({ title, titleAction, children }) {
  return (
    <div className="flex flex-col rounded-2xl" style={{ border: '1px solid #CFCFCF', width: 320 }}>
      <div className="flex items-center justify-between px-5 pt-5 pb-2.5 gap-2">
        <div className="flex items-baseline gap-1.5 min-w-0">
          <span style={{ fontSize: '1.25rem', fontWeight: 600, lineHeight: '1.625rem', color: '#191919', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {title}
          </span>
          <svg width="18" height="18" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, marginTop: 3 }}>
            <path fill="#191919" d="M13.768 10.64a1 1 0 0 0 0-1.28l-5-6a1 1 0 0 0-1.536 1.28L11.699 10l-4.467 5.36a1 1 0 0 0 1.536 1.28z" />
          </svg>
        </div>
        {titleAction}
      </div>
      {children}
    </div>
  )
}

function LimitsWidget() {
  return (
    <WidgetCard
      title="Лимиты по карте"
      titleAction={
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, cursor: 'pointer' }}>
          <path fill="#949494" d="M14.775 1.47a1 1 0 0 1 .993.004l3.464 2a1 1 0 0 1 .49 1.008l-.343 2.37q.439.628.77 1.329l2.223.89A1 1 0 0 1 23 10v4a1 1 0 0 1-.629.929l-2.223.887a9 9 0 0 1-.768 1.33l.343 2.372c.058.404-.136.804-.49 1.008l-3.465 2a1 1 0 0 1-1.119-.08l-1.883-1.482q-.376.035-.766.036-.392-.002-.77-.036l-1.878 1.481a1 1 0 0 1-1.12.081l-3.464-2a1 1 0 0 1-.49-1.008l.34-2.373a9 9 0 0 1-.768-1.329l-2.221-.887A1 1 0 0 1 1 14v-4a1 1 0 0 1 .628-.929l2.223-.89q.329-.7.767-1.327l-.34-2.372a1 1 0 0 1 .49-1.008l3.464-2 .137-.066a1 1 0 0 1 .982.146l1.882 1.48a9 9 0 0 1 1.532 0l1.884-1.48zm-1.092 3.388a1 1 0 0 1-.75.205A7 7 0 0 0 12 5a7 7 0 0 0-.934.063 1 1 0 0 1-.75-.205l-1.67-1.314-2.292 1.323.303 2.105c.039.267-.034.54-.199.754a7 7 0 0 0-.934 1.614c-.102.25-.302.447-.552.548L3 10.677v2.645l1.97.788a1 1 0 0 1 .553.55 7 7 0 0 0 .935 1.613c.165.215.238.487.2.754l-.304 2.105 2.292 1.323 1.667-1.313.082-.059c.198-.126.435-.179.67-.147q.465.063.935.064.466-.001.933-.064l.1-.008a1 1 0 0 1 .65.213l1.67 1.314 2.292-1.323-.303-2.104a1 1 0 0 1 .199-.754c.38-.491.696-1.034.935-1.615l.043-.092a1 1 0 0 1 .51-.457L21 13.322v-2.645l-1.972-.79c-.25-.1-.45-.298-.552-.547a7 7 0 0 0-.935-1.615 1 1 0 0 1-.198-.754l.302-2.104-2.291-1.323zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
        </svg>
      }
    >
      <div className="px-5 pt-2.5 pb-5">
        <p style={{ fontSize: 16, fontWeight: 500, color: '#191919', margin: '0 0 20px' }}>
          Осталось в мае
        </p>
        {limits.map(({ label, value, pct }) => (
          <div key={label} className="mb-5">
            <div className="flex justify-between" style={{ marginBottom: 10 }}>
              <span style={{ fontSize: 14, color: '#676767' }}>{label}</span>
              <span style={{ fontSize: 16, fontWeight: 500, color: '#191919' }}>{value}</span>
            </div>
            <div style={{ height: 4, borderRadius: 4, background: 'rgba(25,25,25,0.15)', overflow: 'hidden' }}>
              <div style={{ width: `${pct}%`, height: '100%', background: '#3F9180', borderRadius: 4 }} />
            </div>
          </div>
        ))}
        <button
          className="w-full rounded-[10px] py-2.5 text-center cursor-pointer"
          style={{ background: 'rgba(25,25,25,0.05)', border: 'none', fontSize: 14, fontWeight: 500, color: '#191919', letterSpacing: '0.14px' }}
        >
          Посмотреть все
        </button>
      </div>
    </WidgetCard>
  )
}

function ChecksWidget() {
  return (
    <WidgetCard
      title="Чеки"
      titleAction={
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, cursor: 'pointer' }}>
          <path fill="#949494" d="M12 3a1 1 0 0 1 1 1v7h7a1 1 0 1 1 0 2h-7v7a1 1 0 1 1-2 0v-7H4a1 1 0 1 1 0-2h7V4a1 1 0 0 1 1-1" />
        </svg>
      }
    >
      <div className="px-5 pt-2.5 pb-5">
        <p style={{ fontSize: 14, color: '#676767', margin: 0, lineHeight: '1.4' }}>
          Сформируйте архив с чеками, чтобы упростить процесс отчётности
        </p>
      </div>
    </WidgetCard>
  )
}

function AccountWidget() {
  return (
    <WidgetCard
      title="Счёт карты"
      titleAction={
        <span style={{ fontSize: 16, fontWeight: 500, color: '#835DE1', cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0 }}>
          Сменить
        </span>
      }
    >
      <div className="px-5 pt-2.5 pb-3.75">
        <div className="flex items-center gap-3.75 py-2.5">
          {/* Russian flag */}
          <svg width="44" height="auto" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <mask id="flag-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="34" height="34">
              <circle cx="17" cy="17" r="17" fill="#fff" />
            </mask>
            <g mask="url(#flag-mask)">
              <rect y="22.667" width="34" height="11.333" fill="#FF4949" />
              <rect y="11.333" width="34" height="11.333" fill="#003BDE" />
              <rect width="34" height="11.333" fill="#FAFAFA" />
            </g>
          </svg>
          <div>
            <p style={{ fontSize: '1.125rem', fontWeight: 500, color: '#191919', margin: '0 0 2px' }}>
              407 729,64 ₽
            </p>
            <p style={{ fontSize: 14, color: '#676767', margin: 0 }}>
              Расчётный, **3970
            </p>
          </div>
        </div>
      </div>
    </WidgetCard>
  )
}

function SpendingWidget() {
  return (
    <WidgetCard
      title="Трата по карте"
      titleAction={
        <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
          <path fillRule="evenodd" clipRule="evenodd" d="M6.532 3.414a.75.75 0 011.054.118l4 5a.75.75 0 010 .937l-4 5a.75.75 0 11-1.172-.938L10.04 9 6.414 4.469a.75.75 0 01.118-1.055z" fill="#191919" />
        </svg>
      }
    >
      <div className="px-5 pb-5">
        <div className="flex justify-between items-center pt-2.5 pb-2.5">
          <span style={{ fontSize: '1.125rem', fontWeight: 500, color: '#191919' }}>Май</span>
          <span style={{ fontSize: 16, fontWeight: 500, color: '#676767' }}>Нет трат</span>
        </div>
        <div style={{ height: 8, borderRadius: 4, background: '#EEEEEE', marginTop: 10 }} />
      </div>
    </WidgetCard>
  )
}

/* ─── Главный компонент ───────────────────────────────────────────────────── */
export default function CardPage() {
  return (
    <main className="flex-1 overflow-auto" style={{ background: '#F9F9F9' }}>
      {/* ── Верхняя строка: карта + кнопки ── */}
      <div className="flex">
        {/* Левая колонка — карта */}
        <div className="flex-1 flex flex-col items-center" style={{ paddingLeft: 60, paddingRight: 60, paddingTop: 0 }}>
          <div style={{ width: 680 }}>
            <div style={{ height: 30 }} />
            <BankCard3D tiltLimit={11} scale={1.01} perspective={1600} spotlight back={<BankCardBack />}>
              <BankCard />
            </BankCard3D>
            <div style={{ height: 30 }} />
            {/* Кнопки */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {actionButtons.map(({ label, filled, icon }) => (
                <button
                  key={label}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    height: 40,
                    borderRadius: 10,
                    padding: '0 12px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: 14,
                    fontWeight: 500,
                    letterSpacing: '0.14px',
                    fontFamily: 'inherit',
                    ...(filled
                      ? { background: '#835DE1', color: '#fff' }
                      : { background: 'rgba(25,25,25,0.05)', color: '#835DE1' }),
                  }}
                >
                  {icon}
                  {label}
                </button>
              ))}
            </div>
            <div style={{ height: 15 }} />
          </div>
        </div>
        {/* Правая колонка — заглушка на ширину виджетов */}
        <div style={{ width: 360, flexShrink: 0 }} />
      </div>

      {/* ── Нижняя строка: транзакции + виджеты ── */}
      <div style={{ display: 'flex' }}>
        {/* Транзакции */}
        <div
          className="flex-1 flex flex-col items-center pb-15"
          style={{ paddingLeft: 60, paddingRight: 60, paddingTop: 15, background: '#F9F9F9' }}
        >
          <div style={{ width: 680 }}>
            {/* Блок транзакций: фильтры + список */}
            <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0px 5px 15px 0px rgba(0,0,0,0.05)' }}>
              {/* Фильтры внутри блока */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center', padding: '15px 20px' }}>
                {/* Иконка фильтра */}
                <button
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 32,
                    height: 32,
                    borderRadius: 10,
                    background: 'rgba(25,25,25,0.05)',
                    border: 'none',
                    cursor: 'pointer',
                    flexShrink: 0,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1 6h2.145a3.502 3.502 0 006.71 0H17a1 1 0 100-2H9.855a3.502 3.502 0 00-6.71 0H1a1 1 0 000 2zm5.5-2.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM0 13a1 1 0 011-1h7.145a3.502 3.502 0 016.71 0H17a1 1 0 110 2h-2.145a3.502 3.502 0 01-6.71 0H1a1 1 0 01-1-1zm13 0a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" fill="#191919" />
                  </svg>
                </button>
                <DropdownChip label="Все операции" />
                <DropdownChip label="На всё время" />
                {/* Поиск */}
                <div
                  className="flex-1"
                  style={{ minWidth: 180 }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      height: 32,
                      borderRadius: 10,
                      background: 'rgba(25,25,25,0.05)',
                      padding: '0 10px',
                      gap: 10,
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#AEAEAE" d="M9 2a7 7 0 0 1 5.605 11.191l3.102 3.102a1 1 0 1 1-1.414 1.414l-3.102-3.102A7 7 0 1 1 9 2Zm0 2a5 5 0 1 0 0 10A5 5 0 0 0 9 4Z" />
                    </svg>
                    <span style={{ fontSize: 14, color: '#AEAEAE', fontWeight: 500 }}>
                      Контрагент, сумма, назначение
                    </span>
                  </div>
                </div>
              </div>

              {/* Дата */}
              <div style={{ padding: '0 20px 15px', background: '#fff' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 600, lineHeight: '1.625rem', color: '#191919' }}>
                  29 апреля
                </span>
              </div>

              {transactions.map((tx) => (
                <div
                  key={tx.id}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    padding: '15px 20px',
                    gap: 0,
                  }}
                >
                  {/* Сумма + статус */}
                  <div style={{ width: 120, flexShrink: 0, marginRight: 20 }}>
                    <div style={{ fontSize: 16, fontWeight: 600, color: '#191919', marginBottom: 5, letterSpacing: '0.16px' }}>
                      {tx.amount}
                    </div>
                    <div style={{ fontSize: 12, color: '#676767', fontWeight: 500 }}>
                      {tx.status}
                    </div>
                  </div>

                  {/* Название + описание + время */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 16, fontWeight: 500, color: '#191919', marginBottom: 5, letterSpacing: '0.16px' }}>
                      {tx.name}
                    </div>
                    <div style={{ fontSize: 14, color: '#676767', marginBottom: 5 }}>
                      *8288, Пластиковая карта
                    </div>
                    <div style={{ fontSize: 12, color: '#676767' }}>
                      {tx.time}
                    </div>
                  </div>

                  {/* Аватар */}
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: '37%',
                      background: '#DDDDDD',
                      flexShrink: 0,
                      marginLeft: 20,
                      position: 'relative',
                    }}
                  >
                    {tx.hasDoc && (
                      <div
                        style={{
                          position: 'absolute',
                          top: -2,
                          right: -2,
                          width: 18,
                          height: 18,
                          borderRadius: '50%',
                          background: '#EFEDF8',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <svg width="12" height="12" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M8 3h8v5a4 4 0 004 4h5v12a3 3 0 01-3 3H8a3 3 0 01-3-3V6a3 3 0 013-3zm1 17a1 1 0 011-1h10a1 1 0 110 2H10a1 1 0 01-1-1zm1-6a1 1 0 100 2h2a1 1 0 100-2h-2z" fill="#191919" />
                          <path d="M24.953 10a3 3 0 00-.775-1.534l-4.29-4.53A3 3 0 0018 3.015V8a2 2 0 002 2h4.953z" fill="#191919" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Конец истории */}
              <div
                style={{
                  padding: '30px 20px 10px',
                  borderTop: '1px solid #EEEEEE',
                  textAlign: 'center',
                }}
              >
                <span style={{ fontSize: 14, color: '#676767', lineHeight: '1.5' }}>
                  Это — конец истории.<br />Других операций не было.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Виджеты справа ── */}
        <div style={{ width: 360, flexShrink: 0, paddingTop: 15, paddingLeft: 20, paddingRight: 20 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
            <LimitsWidget />
            <ChecksWidget />
            <AccountWidget />
            <SpendingWidget />
          </div>
        </div>
      </div>
    </main>
  )
}
