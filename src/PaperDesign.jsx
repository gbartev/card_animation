export default function PaperDesign() {
  return (
    <div style={{ alignItems: 'start', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSize: '12px', fontSynthesis: 'none', height: '900px', lineHeight: '16px', MozOsxFontSmoothing: 'grayscale', paddingBlock: 0, paddingInline: 0, WebkitFontSmoothing: 'antialiased', width: '1440px' }}>
      {/* ── HEADER ── */}
      <div style={{ alignSelf: 'stretch', backgroundColor: '#FFFFFF', borderBottomColor: '#E1E1E1', borderBottomStyle: 'solid', borderBottomWidth: '1px', boxSizing: 'border-box', flexShrink: 0, height: '75px', overflow: 'clip' }}>
        <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', height: '68px', justifyContent: 'space-between', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1920px', minHeight: '74px', paddingBlock: '17px', position: 'relative' }}>
          {/* Left: logo + nav */}
          <div style={{ boxSizing: 'border-box' }}>
            <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
              {/* Logo */}
              <div style={{ boxSizing: 'border-box', paddingLeft: '20px', paddingRight: '10px' }}>
                <svg width="73" height="35" viewBox="0 0 73 35" fill="#191919" xmlns="http://www.w3.org/2000/svg">
                  <path d="M52.209 33.832H48.448V20.95H52.209V25.62H53.149C55.002 25.62 55.647 25.298 56.802 22.587L57.5 20.95H61.18V21.245L60.16 23.768C59.542 25.298 58.709 26.505 57.823 27.23L61.583 33.536V33.832H57.635L54.492 28.572H52.209V33.832Z" fill="#191919" />
                  <path d="M32.998 20.95H36.759V25.351H41.459V20.95H45.22V33.832H41.459V28.625H36.759V33.832H32.998V20.95Z" fill="#191919" />
                  <path d="M17.785 21.138C19.37 20.762 21.223 20.655 22.405 20.655C28.046 20.655 29.55 23.151 29.496 25.888V31.067L30.839 31.094V33.778C30.248 33.939 29.604 34.073 28.959 34.073C27.374 34.073 26.568 33.241 26.38 32.221H26.139C25.172 33.563 23.453 34.154 21.787 34.154C19.209 34.154 16.818 32.758 16.818 29.806C16.818 26.478 19.88 25.62 22.915 25.62H26.004C25.951 24.036 24.097 23.473 22.029 23.473C20.794 23.473 19.262 23.687 18.161 24.117L17.785 21.138ZM20.579 29.806C20.579 30.96 21.358 31.416 22.62 31.416C24.661 31.416 26.004 30.262 26.004 28.062L23.614 28.035C21.384 28.035 20.579 28.625 20.579 29.806Z" fill="#191919" />
                  <path d="M9.42 19.474C5.901 19.769 3.994 20.977 3.672 24.144H3.968C4.988 22.372 6.788 21.379 9.125 21.379C12.294 21.379 15.329 23.312 15.329 27.793C15.329 32.06 12.321 34.234 8.104 34.234C3.242 34.234 0.637 31.067 0.637 25.512C0.637 21.487 1.926 16.817 9.42 16.2L13.933 15.824L13.986 19.098L9.42 19.474ZM8.185 31.067C10.521 31.067 11.462 29.699 11.462 27.793C11.462 25.727 10.414 24.519 8.265 24.519C6.224 24.519 5.096 25.593 4.532 26.693C4.532 29.27 5.472 31.067 8.185 31.067Z" fill="#191919" />
                  <path d="M59.938 1.028C61.523 0.652 63.376 0.545 64.558 0.545C70.199 0.545 71.703 3.04 71.649 5.778V10.957L72.992 10.984V13.668C72.401 13.829 71.757 13.963 71.112 13.963C69.527 13.963 68.722 13.131 68.533 12.111H68.292C67.325 13.453 65.606 14.044 63.94 14.044C61.362 14.044 58.971 12.648 58.971 9.696C58.971 6.368 62.033 5.509 65.068 5.509H68.157C68.104 3.926 66.25 3.362 64.182 3.362C62.947 3.362 61.415 3.577 60.314 4.007L59.938 1.028ZM62.732 9.696C62.732 10.85 63.511 11.306 64.773 11.306C66.814 11.306 68.157 10.152 68.157 7.952L65.767 7.925C63.537 7.925 62.732 8.515 62.732 9.696Z" fill="#191919" />
                  <path d="M48.641 13.722H44.881V0.84H48.641V5.509H49.581C51.435 5.509 52.08 5.187 53.234 2.477L53.933 0.84H57.613V1.135L56.592 3.658C55.974 5.187 55.142 6.395 54.255 7.12L58.016 13.426V13.722H54.067L50.925 8.461H48.641V13.722Z" fill="#191919" />
                  <path d="M37.901 0.84H41.662V13.722H37.901V9.106C36.88 9.535 35.699 9.803 34.49 9.803C31.643 9.803 29.36 8.327 29.36 4.677V0.84H33.12V4.704C33.12 5.885 33.872 6.878 35.511 6.878C36.263 6.878 37.149 6.663 37.901 6.341V0.84Z" fill="#191919" />
                  <path d="M20.532 14.151C16.584 14.151 13.28 11.575 13.28 7.281C13.28 2.987 16.584 0.41 20.532 0.41C24.454 0.41 27.758 2.987 27.758 7.281C27.758 11.575 24.454 14.151 20.532 14.151ZM20.532 10.984C22.654 10.984 23.89 9.401 23.89 7.281C23.89 5.161 22.654 3.577 20.532 3.577C18.384 3.577 17.148 5.161 17.148 7.281C17.148 9.401 18.384 10.984 20.532 10.984Z" fill="#191919" />
                  <path d="M12.348 0.84V4.168H8.104V13.722H4.344V4.168H0.1V0.84H12.348Z" fill="#191919" />
                </svg>
              </div>
              {/* Nav items */}
              <div style={{ boxSizing: 'border-box', paddingLeft: '30px', paddingRight: '20px' }}>
                <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', justifyContent: 'flex-start' }}>
                  {['Главная', 'Платежи', 'Знания', 'Сервисы'].map((item) => (
                    <div key={item} style={{ boxSizing: 'border-box', paddingRight: '10px' }}>
                      <div style={{ alignItems: 'center', borderRadius: '10px', boxSizing: 'border-box', display: 'flex', height: '40px', justifyContent: 'center', paddingInline: '15px' }}>
                        <div style={{ boxSizing: 'border-box', color: '#191919', fontFamily: '"TT Norms Tochka Extended", system-ui, sans-serif', fontSize: '16px', fontWeight: 500, letterSpacing: '0.16px', lineHeight: '20px' }}>
                          {item}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Right: user + icons */}
          <div style={{ boxSizing: 'border-box', paddingInline: '20px' }}>
            <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between' }}>
              {/* User name */}
              <div style={{ boxSizing: 'border-box', maxWidth: '240px' }}>
                <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex' }}>
                  <div style={{ alignItems: 'center', backgroundColor: '#A8A3F1', borderRadius: '37%', boxSizing: 'border-box', display: 'flex', flexShrink: 0, height: '34px', justifyContent: 'center', marginRight: '10px', overflow: 'clip', width: '34px' }}>
                    <div style={{ color: '#FFFFFF', fontFamily: '"Source Sans 3", system-ui, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.12px', lineHeight: '15px' }}>ЛЕ</div>
                  </div>
                  <div style={{ color: '#191919', fontFamily: '"TT Norms Tochka Extended", system-ui, sans-serif', fontSize: '16px', fontWeight: 500, letterSpacing: '0.16px', lineHeight: '20px', overflow: 'hidden', WebkitBoxOrient: 'vertical', WebkitLineClamp: 1, display: '-webkit-box' }}>
                    Ларькина Е.М., ИП
                  </div>
                  <div style={{ paddingLeft: '10px' }}>
                    <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M3.414 7.532a.75.75 0 011.055-.118L9 11.04l4.531-3.626a.75.75 0 11.938 1.172l-5 4a.75.75 0 01-.937 0l-5-4a.75.75 0 01-.118-1.054z" fill="#191919" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Icons */}
              <div style={{ boxSizing: 'border-box', paddingLeft: '20px' }}>
                <div style={{ alignItems: 'center', display: 'flex', gap: '20px' }}>
                  {/* Bell */}
                  <div style={{ position: 'relative' }}>
                    <div style={{ backgroundColor: '#D84D4D', borderRadius: '50%', height: '8px', position: 'absolute', right: '-4px', top: '-4px', width: '8px' }} />
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10 3c0 .096.007.191.02.284A7.003 7.003 0 005 10v3.586l-1.707 1.707A1 1 0 003 16v1a1 1 0 001 1h16a1 1 0 001-1v-1a1 1 0 00-.293-.707L19 13.586V10a7.003 7.003 0 00-5.02-6.716A2 2 0 1010 3zm2 2a5 5 0 00-5 5v4a1 1 0 01-.293.707L5.414 16h13.172l-1.293-1.293A1 1 0 0117 14v-4a5 5 0 00-5-5z" fill="#191919" />
                      <path d="M9.078 20.274a1 1 0 00-.069 1.413 4.053 4.053 0 005.985-.015 1 1 0 00-1.488-1.336 2.053 2.053 0 01-3.015.007 1 1 0 00-1.413-.069z" fill="#191919" />
                    </svg>
                  </div>
                  {/* Gift */}
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M20 7h-1.535A4 4 0 0012 2.354 4 4 0 005.535 7H4a3 3 0 00-3 3v1c0 1.306.835 2.418 2 2.83V20c0 1.689 1.499 3 3.286 3h11.428C19.501 23 21 21.689 21 20v-6.17A3.001 3.001 0 0023 11v-1a3 3 0 00-3-3zm-7 2h7a1 1 0 011 1v1a1 1 0 01-1 1h-7V9zm-2-2V5a2 2 0 10-2 2h2zm0 2H4a1 1 0 00-1 1v1a1 1 0 001 1h7V9zm0 5H5v6c0 .52.548 1 1.286 1H11v-7zm2 7h4.714c.738 0 1.286-.48 1.286-1v-6h-6v7zm0-14h2a2 2 0 10-2-2v2z" fill="#191919" />
                  </svg>
                  {/* Settings */}
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 16a4 4 0 110-8 4 4 0 010 8zm2-4a2 2 0 11-4 0 2 2 0 014 0z" fill="#191919" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M22.196 9.02l-1.842-.369a8.993 8.993 0 00-1.276-2.213l.601-1.778a1 1 0 00-.447-1.186l-3.464-2a1 1 0 00-1.251.206l-1.239 1.41a8.99 8.99 0 00-2.555 0l-1.24-1.41a1 1 0 00-1.251-.206l-3.464 2A1 1 0 004.32 4.66l.601 1.779A9.068 9.068 0 003.645 8.65l-1.841.368A1 1 0 001 10v4a1 1 0 00.804.98l1.842.369c.318.794.747 1.54 1.276 2.213l-.601 1.778a1 1 0 00.447 1.186l3.464 2a1 1 0 001.251-.206l1.239-1.41c.848.122 1.708.121 2.555 0l1.24 1.41a1 1 0 001.251.206l3.464-2a1 1 0 00.447-1.186l-.601-1.779a9.057 9.057 0 001.277-2.212l1.841-.368A1 1 0 0023 14v-4a1 1 0 00-.804-.98zm-2.786 1.482l1.59.318v2.36l-1.588.318a1 1 0 00-.754.67 7.036 7.036 0 01-1.452 2.514 1 1 0 00-.203.988l.52 1.534-2.045 1.18-1.07-1.217a1 1 0 00-.959-.319 6.99 6.99 0 01-2.9.002 1 1 0 00-.958.318l-1.069 1.216-2.044-1.18.519-1.533a1 1 0 00-.204-.99 6.991 6.991 0 01-1.448-2.512 1 1 0 00-.755-.67L3 13.18v-2.36l1.588-.318a1 1 0 00.754-.67 7.033 7.033 0 011.452-2.514 1 1 0 00.203-.988l-.52-1.534 2.045-1.18 1.07 1.217a1 1 0 00.959.319 6.991 6.991 0 012.9-.002 1 1 0 00.958-.318l1.069-1.216 2.044 1.18-.519 1.533a1 1 0 00.204.99 6.992 6.992 0 011.448 2.512 1 1 0 00.755.67z" fill="#191919" />
                  </svg>
                  {/* Logout */}
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7 4a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1 1 1 0 112 0 3 3 0 01-3 3H7a3 3 0 01-3-3V5a3 3 0 013-3h10a3 3 0 013 3 1 1 0 11-2 0 1 1 0 00-1-1H7zm10.293 5.707a1 1 0 011.414-1.414l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L18.586 13H11a1 1 0 110-2h7.586l-1.293-1.293z" fill="#191919" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div style={{ alignSelf: 'stretch', backgroundColor: '#F9F9F9', boxSizing: 'border-box', display: 'flex', flexShrink: 0, height: '825px', justifyContent: 'space-between', overflow: 'clip', position: 'relative' }}>

        {/* ── LEFT SIDEBAR ── */}
        <div style={{ boxSizing: 'border-box', flexShrink: 0, height: '100%', marginRight: 'auto', maxWidth: '280px', minWidth: '80px', paddingBlock: '32px', paddingInline: '20px', width: '280px' }}>
          {/* Back button */}
          <div style={{ boxSizing: 'border-box', display: 'flex', justifyContent: 'flex-start', paddingBottom: '30px' }}>
            <div style={{ border: '2px solid #949494', borderRadius: '10px', boxSizing: 'border-box', display: 'flex', height: '40px', width: '40px', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="#191919" d="M9.293 4.293a1 1 0 1 1 1.414 1.414L5.414 11H21a1 1 0 0 1 0 2H5.414l5.293 5.293a1 1 0 1 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414z" />
              </svg>
            </div>
          </div>
          {/* Title */}
          <div style={{ boxSizing: 'border-box' }}>
            <div style={{ paddingBlock: '10px' }}>
              <div style={{ color: '#191919', fontFamily: '"TT Norms Tochka Extended", system-ui, sans-serif', fontSize: '24px', fontWeight: 600, lineHeight: '30px', marginBottom: '20px' }}>
                Пластиковая карта
              </div>
            </div>
            {/* Nav links */}
            {['Популярные вопросы о картах', 'Подписки', 'Точки снятия наличных', 'Кешбэк', 'Выпуск новой карты'].map((item) => (
              <div key={item} style={{ alignContent: 'center', borderRadius: '10px', boxSizing: 'border-box', maxWidth: '100%', paddingBlock: '10px' }}>
                <div style={{ color: '#191919', fontFamily: '"TT Norms Tochka Extended", system-ui, sans-serif', fontSize: '14px', fontWeight: 500, letterSpacing: '0.14px', lineHeight: '18px', overflow: 'hidden', WebkitBoxOrient: 'vertical', WebkitLineClamp: 1, display: '-webkit-box' }}>
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CENTER + RIGHT ── */}
        <div style={{ boxSizing: 'border-box', flex: 1, height: '100%' }}>
          {/* Card + actions row */}
          <div style={{ alignItems: 'start', boxSizing: 'border-box', display: 'flex', gap: 0 }}>
            <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flex: 1, flexDirection: 'column', paddingInline: '60px' }}>
              <div style={{ alignItems: 'start', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', width: '680px' }}>
                <div style={{ height: '32px', width: '830px' }} />

                {/* Card widget */}
                <div style={{ backgroundColor: '#7F42E1', borderRadius: '12px', boxShadow: '#00000014 0px 16px 32px', boxSizing: 'border-box', flexShrink: 0, height: '168px', position: 'relative', width: '270px' }}>
                  <div style={{ padding: '20px' }}>
                    <svg width="80" height="15" viewBox="0 0 122 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                      <path d="M33.535 5.894a5.371 5.371 0 0 0-5.35 3.944 7.546 7.546 0 0 0 0 4.448 5.056 5.056 0 0 0 4.274 3.831 4.966 4.966 0 0 0 5.329-2.342 6.979 6.979 0 0 0 .307-6.954 4.846 4.846 0 0 0-4.58-2.937l.02.01Zm-.102 18.058a12.147 12.147 0 0 1-8.475-3.082 11.364 11.364 0 0 1-3.669-8.998c-.057-2.83.92-5.585 2.747-7.745a11.451 11.451 0 0 1 6.517-3.79 12.701 12.701 0 0 1 9.223 1.346 10.892 10.892 0 0 1 5.616 9.45 11.695 11.695 0 0 1-3.362 9.511 11.923 11.923 0 0 1-8.577 3.318l-.02-.01Zm79.982-9.81a7.725 7.725 0 0 0-3.453-1.243 4.695 4.695 0 0 0-3.638.76c-1 .76-1.41 2.07-1.025 3.267a2.778 2.778 0 0 0 2.439 1.849 6.596 6.596 0 0 0 3.248-.503 3.606 3.606 0 0 0 2.409-4.11l.02-.02Zm.103-4.283a13.21 13.21 0 0 0 0-1.962 2.689 2.689 0 0 0-1.968-2.116 14.51 14.51 0 0 0-10.176.78l-.85-4.694a15.212 15.212 0 0 1 4.17-1.335 21.174 21.174 0 0 1 9.07.134c3.166.8 5.38 2.64 5.994 6.009.126.856.178 1.722.154 2.588v8.516c.113 1.746.267 1.92 2.05 2.187v3.606a7.69 7.69 0 0 1-5.37-.165 3.143 3.143 0 0 1-1.691-2.393c0-.205-.051-.421-.092-.73-2.162 3.082-5.257 3.884-8.66 3.688-3.76-.328-6.732-2.865-7.224-5.896-.881-4.92 1.599-8.597 6.548-9.337 3.167-.503 4.028-.277 8.075 1.11l-.03.01Zm-29.073 4.386-3.484.216v8.957h-6.528V.748h6.426V9.13a12.79 12.79 0 0 0 4.211-.319 4.946 4.946 0 0 0 3.361-3.44c.42-1.5.626-3.082.943-4.675h5.944c.133 4.674-.8 8.793-5.257 11.361.174.329.318.616.471.883 1.835 3.082 3.669 6.164 5.493 9.194.212.426.397.865.553 1.315h-6.866l-5.277-9.194.01-.01ZM62.915.717h6.353v22.742h-6.415v-7.293c-1.178.267-2.264.596-3.371.74a10.045 10.045 0 0 1-8.065-1.911A9.58 9.58 0 0 1 48.18 9.19c-.553-2.783-.215-5.608-.308-8.474h6.63v1.027c0 1.839 0 3.688.093 5.516a4.185 4.185 0 0 0 1.319 2.932 4.165 4.165 0 0 0 3.005 1.126 6.507 6.507 0 0 0 3.997-1.213V.717Zm-49.834 22.65H6.707V6.52H.015V.737h19.686V6.46h-6.62v16.907Z" fill="#FFFFFF" fillRule="nonzero" />
                    </svg>
                  </div>
                  {/* Card details */}
                  <div style={{ alignItems: 'start', bottom: 20, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '2px', left: 20, position: 'absolute' }}>
                    <div style={{ color: '#FFFFFF', fontFamily: '"TT Norms Tochka Extended", system-ui, sans-serif', fontSize: '16px', fontWeight: 500, letterSpacing: '0.16px', lineHeight: '20px' }}>
                      Evdokiia Larkina
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <div style={{ color: '#FFFFFF', fontFamily: '"TT Norms Tochka Extended", system-ui, sans-serif', fontSize: '14px', fontWeight: 500, letterSpacing: '0.14px', lineHeight: '18px' }}>• • • •</div>
                      <div style={{ color: '#FFFFFF', fontFamily: '"TT Norms Tochka Extended", system-ui, sans-serif', fontSize: '14px', fontWeight: 500, letterSpacing: '0.14px', lineHeight: '18px' }}>8288</div>
                    </div>
                  </div>
                  {/* MIR logo */}
                  <svg width="58" height="26" viewBox="0 0 58 26" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ left: 192, top: 122, position: 'absolute' }}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.855 5.007V5H21.091V21H15.855V11.505H15.418L12.364 21H8.727L5.673 11.498H5.455H5.236V21H0V5H5.236C5.236 5 7.535 4.993 8.146 7.096C8.713 9.059 10.327 14.502 10.327 14.502H10.764C10.807 14.355 12.386 9.031 12.945 7.103C13.555 5.004 15.838 5.007 15.855 5.007L15.855 5.007ZM32.106 6.677C32.85 5.133 34.436 5 34.436 5H39.547V21H34.135V11.498H33.684L29.926 19.323C29.182 20.86 27.521 21 27.521 21H22.41V5H27.822V14.502H28.273L32.106 6.677ZM42.182 13V21H47.278V16.328H52.798C55.204 16.328 57.243 14.939 58 13H42.182ZM40.863 5H52.386C56.241 5 58 7.667 58 11.667H49.003C48.255 11.667 47.528 11.567 46.837 11.383C43.792 10.575 41.439 8.092 40.863 5Z" fill="#FFFFFF" />
                  </svg>
                </div>

                <div style={{ height: '30px', width: '830px' }} />

                {/* Action buttons */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {/* Pay */}
                  <div style={{ alignItems: 'center', backgroundColor: '#835DE1', borderRadius: '10px', boxSizing: 'border-box', display: 'inline-flex', height: '40px', paddingInline: '12px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                      <path fill="#FFFFFF" d="M18 3a3 3 0 0 1 3 3v1q0 .085-.014.166A3 3 0 0 1 23 10v4a3 3 0 0 1-2.014 2.834q.015.081.014.166v1a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zM5 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-1h-3a5 5 0 0 1 0-10h3V6a1 1 0 0 0-1-1zm11 4a3 3 0 1 0 0 6h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm0 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    </svg>
                    <div style={{ color: '#FFFFFF', fontFamily: '"TT Norms Tochka Extended", system-ui, sans-serif', fontSize: '14px', fontWeight: 500, letterSpacing: '0.14px', lineHeight: '18px', marginLeft: '8px' }}>Заплатить</div>
                  </div>
                  {/* Top up */}
                  <div style={{ alignItems: 'center', backgroundColor: '#1919190D', borderRadius: '10px', boxSizing: 'border-box', display: 'inline-flex', height: '40px', paddingInline: '12px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                      <path fill="#835DE1" d="M16.88 4.371a1 1 0 0 1 1.406-.148A9.98 9.98 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12a9.98 9.98 0 0 1 3.714-7.777 1 1 0 0 1 1.258 1.554 8 8 0 1 0 10.057 0 1 1 0 0 1-.15-1.406M12 3a1 1 0 0 1 1 1v8.586l1.293-1.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L11 12.586V4a1 1 0 0 1 1-1" />
                    </svg>
                    <div style={{ color: '#835DE1', fontFamily: '"TT Norms Tochka Extended", system-ui, sans-serif', fontSize: '14px', fontWeight: 500, letterSpacing: '0.14px', lineHeight: '18px', marginLeft: '8px' }}>Пополнить</div>
                  </div>
                  {/* Settings */}
                  <div style={{ alignItems: 'center', backgroundColor: '#1919190D', borderRadius: '10px', boxSizing: 'border-box', display: 'inline-flex', height: '40px', paddingInline: '12px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                      <path fill="#835DE1" d="M14.775 1.47a1 1 0 0 1 .993.004l3.464 2a1 1 0 0 1 .49 1.008l-.343 2.37q.439.628.77 1.329l2.223.89A1 1 0 0 1 23 10v4a1 1 0 0 1-.629.929l-2.223.887a9 9 0 0 1-.768 1.33l.343 2.372c.058.404-.136.804-.49 1.008l-3.465 2a1 1 0 0 1-1.119-.08l-1.883-1.482q-.376.035-.766.036-.392-.002-.77-.036l-1.878 1.481a1 1 0 0 1-1.12.081l-3.464-2a1 1 0 0 1-.49-1.008l.34-2.373a9 9 0 0 1-.768-1.329l-2.221-.887A1 1 0 0 1 1 14v-4a1 1 0 0 1 .628-.929l2.223-.89q.329-.7.767-1.327l-.34-2.372a1 1 0 0 1 .49-1.008l3.464-2 .137-.066a1 1 0 0 1 .982.146l1.882 1.48a9 9 0 0 1 1.532 0l1.884-1.48zm-1.092 3.388a1 1 0 0 1-.75.205A7 7 0 0 0 12 5a7 7 0 0 0-.934.063 1 1 0 0 1-.75-.205l-1.67-1.314-2.292 1.323.303 2.105c.039.267-.034.54-.199.754a7 7 0 0 0-.934 1.614c-.102.25-.302.447-.552.548L3 10.677v2.645l1.97.788a1 1 0 0 1 .553.55 7 7 0 0 0 .935 1.613c.165.215.238.487.2.754l-.304 2.105 2.292 1.323 1.667-1.313.082-.059c.198-.126.435-.179.67-.147q.465.063.935.064.466-.001.933-.064l.1-.008a1 1 0 0 1 .65.213l1.67 1.314 2.292-1.323-.303-2.104a1 1 0 0 1 .199-.754c.38-.491.696-1.034.935-1.615l.043-.092a1 1 0 0 1 .51-.457L21 13.322v-2.645l-1.972-.79c-.25-.1-.45-.298-.552-.547a7 7 0 0 0-.935-1.615 1 1 0 0 1-.198-.754l.302-2.104-2.291-1.323zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                    </svg>
                    <div style={{ color: '#835DE1', fontFamily: '"TT Norms Tochka Extended", system-ui, sans-serif', fontSize: '14px', fontWeight: 500, letterSpacing: '0.14px', lineHeight: '18px', marginLeft: '8px' }}>Настройки карты</div>
                  </div>
                </div>

                <div style={{ height: '15px', width: '830px' }} />
              </div>
            </div>
            <div style={{ alignSelf: 'stretch', boxSizing: 'border-box', flexShrink: 0, overflow: 'clip', width: '360px' }} />
          </div>

          {/* Transactions + right widgets */}
          <div style={{ boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
            {/* Transactions panel */}
            <div style={{ alignItems: 'center', backgroundColor: '#F9F9F9', boxSizing: 'border-box', display: 'flex', flex: 1, flexDirection: 'column', height: 'fit-content', paddingBottom: '60px', paddingLeft: '60px', paddingRight: '60px', paddingTop: '15px' }}>
              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '10px', boxShadow: '#0000000D 0px 5px 15px', boxSizing: 'border-box', paddingBlock: '20px', paddingInline: '20px', width: '680px' }}>
                {/* Filters */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '5px' }}>
                  {/* Filter icon */}
                  <div style={{ alignItems: 'center', backgroundColor: '#1919190D', borderRadius: '10px', border: '2px solid transparent', boxSizing: 'border-box', display: 'inline-flex', height: '32px', paddingBlock: '5px', paddingInline: '8px' }}>
                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M1 6h2.145a3.502 3.502 0 006.71 0H17a1 1 0 100-2H9.855a3.502 3.502 0 00-6.71 0H1a1 1 0 000 2zm5.5-2.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM0 13a1 1 0 011-1h7.145a3.502 3.502 0 016.71 0H17a1 1 0 110 2h-2.145a3.502 3.502 0 01-6.71 0H1a1 1 0 01-1-1zm13 0a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" fill="#191919" />
                    </svg>
                  </div>
                  {/* Dropdown filters */}
                  {['Все операции', 'За всё время'].map((label) => (
                    <div key={label} style={{ alignItems: 'center', backgroundColor: '#1919190D', borderRadius: '10px', border: '2px solid transparent', boxSizing: 'border-box', display: 'inline-flex', height: '32px', paddingBlock: '5px', paddingInline: '8px' }}>
                      <div style={{ color: '#191919', fontFamily: '"TT Norms Tochka Extended", system-ui, sans-serif', fontSize: '14px', fontWeight: 500, letterSpacing: '0.14px', lineHeight: '18px', whiteSpace: 'nowrap' }}>{label}</div>
                      <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '8px' }}>
                        <path fill="#949494" d="M9.586 3c.89 0 1.337 1.077.707 1.707L6.707 8.293a1 1 0 0 1-1.414 0L1.707 4.707C1.077 4.077 1.523 3 2.414 3h7.172Z" />
                      </svg>
                    </div>
                  ))}
                  {/* Search */}
                  <div style={{ alignItems: 'center', backgroundColor: '#1919190D', borderRadius: '10px', boxSizing: 'border-box', display: 'flex', flex: 1, height: '32px', minWidth: '210px', paddingInline: '10px' }}>
                    <svg width="18" height="18" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#AEAEAE" d="M9 2a7 7 0 0 1 5.605 11.191l3.102 3.102a1 1 0 1 1-1.414 1.414l-3.102-3.102A7 7 0 1 1 9 2Zm0 2a5 5 0 1 0 0 10A5 5 0 0 0 9 4Z" />
                    </svg>
                    <div style={{ color: '#AEAEAE', fontFamily: '"TT Norms Tochka Extended", system-ui, sans-serif', fontSize: '14px', fontWeight: 500, letterSpacing: '0.08px', lineHeight: '18px', marginLeft: '10px', overflow: 'hidden', WebkitBoxOrient: 'vertical', WebkitLineClamp: 1, display: '-webkit-box' }}>
                      Контрагент, сумма, назначение
                    </div>
                  </div>
                </div>

                {/* Transaction list */}
                <div>
                  {/* Date header */}
                  <div style={{ backgroundColor: '#FFFFFF', marginLeft: '-20px', marginRight: '-20px', paddingInline: '20px', paddingTop: '15px', paddingBottom: '15px' }}>
                    <div style={{ color: '#191919', fontFamily: '"TT Norms Tochka Extended", system-ui, sans-serif', fontSize: '20px', fontWeight: 600, lineHeight: '26px' }}>29 апреля</div>
                  </div>

                  {/* Transactions */}
                  {[
                    { amount: '– 40 000 ₽', name: 'УРФУ', hasDoc: true },
                    { amount: '– 300 ₽', name: 'какой-то ларёк', hasDoc: false },
                    { amount: '– 4 000 ₽', name: 'МЕГАФОН', hasDoc: false },
                    { amount: '– 1 300 ₽', name: 'Евросеть', hasDoc: false },
                    { amount: '– 1 000 ₽', name: 'IKEA', hasDoc: false },
                  ].map(({ amount, name, hasDoc }, i) => (
                    <div key={i} style={{ borderRadius: '10px', boxSizing: 'border-box', display: 'flex', marginLeft: '-20px', marginRight: '-20px', overflow: 'clip', paddingBlock: '15px', paddingInline: '20px', position: 'relative', width: 'calc(100% + 40px)' }}>
                      {/* Amount + status */}
                      <div style={{ alignItems: 'flex-start', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: 0, marginRight: '20px', width: '120px' }}>
                        <div style={{ color: '#191919', fontFamily: '"TT Norms Tochka Extended", system-ui, sans-serif', fontSize: '16px', fontWeight: 600, letterSpacing: '0.16px', lineHeight: '20px', marginBottom: '5px', whiteSpace: 'nowrap' }}>{amount}</div>
                        <div style={{ color: '#676767', fontFamily: '"TT Norms Tochka Extended", system-ui, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.12px', lineHeight: '15px', marginBottom: '5px' }}>В обработке</div>
                      </div>
                      {/* Details */}
                      <div style={{ boxSizing: 'border-box' }}>
                        <div style={{ color: '#191919', fontFamily: '"TT Norms Tochka Extended", system-ui, sans-serif', fontSize: '16px', fontWeight: 500, letterSpacing: '0.16px', lineHeight: '20px', marginBottom: '5px', overflow: 'hidden', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, display: '-webkit-box' }}>{name}</div>
                        <div style={{ color: '#676767', fontFamily: '"TT Norms Tochka Extended", system-ui, sans-serif', fontSize: '14px', letterSpacing: '0.14px', lineHeight: '18px', marginBottom: '5px', overflow: 'hidden', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3, display: '-webkit-box' }}>*8288, Пластиковая карта</div>
                        <div style={{ color: '#676767', fontFamily: '"TT Norms Tochka Extended", system-ui, sans-serif', fontSize: '12px', letterSpacing: '0.12px', lineHeight: '15px' }}>29 апреля, 15:57</div>
                      </div>
                      {/* Avatar */}
                      <div style={{ boxSizing: 'border-box', height: '34px', marginLeft: 'auto', minWidth: '54px', paddingLeft: '20px' }}>
                        <div style={{ position: 'relative', width: '34px', height: '34px' }}>
                          <div style={{ alignItems: 'center', backgroundColor: '#DDDDDD', borderRadius: '37%', display: 'flex', height: '34px', justifyContent: 'center', overflow: 'clip', width: '34px' }} />
                          {hasDoc && (
                            <div style={{ alignItems: 'center', backgroundColor: '#EFEDF8', borderRadius: '50%', bottom: '-2px', boxSizing: 'border-box', display: 'flex', height: '18px', justifyContent: 'center', overflow: 'clip', position: 'absolute', right: '-2px', width: '18px' }}>
                              <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8 3h8v5a4 4 0 004 4h5v12a3 3 0 01-3 3H8a3 3 0 01-3-3V6a3 3 0 013-3zm1 17a1 1 0 011-1h10a1 1 0 110 2H10a1 1 0 01-1-1zm1-6a1 1 0 100 2h2a1 1 0 100-2h-2z" fill="#191919" />
                                <path d="M24.953 10a3 3 0 00-.775-1.534l-4.29-4.53A3 3 0 0018 3.015V8a2 2 0 002 2h4.953z" fill="#191919" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* End of history */}
                <div style={{ borderTopColor: '#EEEEEE', borderTopStyle: 'solid', borderTopWidth: '1px', paddingBottom: '10px', paddingTop: '30px' }}>
                  <div style={{ color: '#676767', fontFamily: '"Source Sans 3", system-ui, sans-serif', fontSize: '14px', letterSpacing: '0.14px', lineHeight: '18px', textAlign: 'center', whiteSpace: 'pre-wrap' }}>
                    {'Это — конец истории.\nДругих операций не было.'}
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT WIDGETS ── */}
            <div style={{ boxSizing: 'border-box', width: '360px' }}>
              <div style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '15px', width: '360px' }}>
                <div style={{ alignItems: 'start', display: 'flex', flexDirection: 'column', gap: 15, width: '320px' }}>

                  {/* Widget: Limits */}
                  <div style={{ alignItems: 'start', borderColor: '#CFCFCF', borderRadius: '16px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', width: '320px' }}>
                    <div style={{ alignItems: 'center', alignSelf: 'stretch', display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px' }}>
                      <div style={{ alignItems: 'baseline', display: 'flex' }}>
                        <div style={{ color: '#191919', fontFamily: '"TT Norms Tochka Extended", system-ui, sans-serif', fontSize: '20px', fontWeight: 600, lineHeight: '26px' }}>Лимиты по карте</div>
                        <svg width="18" height="18" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '6px' }}>
                          <path fill="#191919" d="M13.768 10.64a1 1 0 0 0 0-1.28l-5-6a1 1 0 0 0-1.536 1.28L11.699 10l-4.467 5.36a1 1 0 0 0 1.536 1.28z" />
                        </svg>
                      </div>
                      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                        <path fill="#949494" d="M14.775 1.47a1 1 0 0 1 .993.004l3.464 2a1 1 0 0 1 .49 1.008l-.343 2.37q.439.628.77 1.329l2.223.89A1 1 0 0 1 23 10v4a1 1 0 0 1-.629.929l-2.223.887a9 9 0 0 1-.768 1.33l.343 2.372c.058.404-.136.804-.49 1.008l-3.465 2a1 1 0 0 1-1.119-.08l-1.883-1.482q-.376.035-.766.036-.392-.002-.77-.036l-1.878 1.481a1 1 0 0 1-1.12.081l-3.464-2a1 1 0 0 1-.49-1.008l.34-2.373a9 9 0 0 1-.768-1.329l-2.221-.887A1 1 0 0 1 1 14v-4a1 1 0 0 1 .628-.929l2.223-.89q.329-.7.767-1.327l-.34-2.372a1 1 0 0 1 .49-1.008l3.464-2 .137-.066a1 1 0 0 1 .982.146l1.882 1.48a9 9 0 0 1 1.532 0l1.884-1.48zm-1.092 3.388a1 1 0 0 1-.75.205A7 7 0 0 0 12 5a7 7 0 0 0-.934.063 1 1 0 0 1-.75-.205l-1.67-1.314-2.292 1.323.303 2.105c.039.267-.034.54-.199.754a7 7 0 0 0-.934 1.614c-.102.25-.302.447-.552.548L3 10.677v2.645l1.97.788a1 1 0 0 1 .553.55 7 7 0 0 0 .935 1.613c.165.215.238.487.2.754l-.304 2.105 2.292 1.323 1.667-1.313.082-.059c.198-.126.435-.179.67-.147q.465.063.935.064.466-.001.933-.064l.1-.008a1 1 0 0 1 .65.213l1.67 1.314 2.292-1.323-.303-2.104a1 1 0 0 1 .199-.754c.38-.491.696-1.034.935-1.615l.043-.092a1 1 0 0 1 .51-.457L21 13.322v-2.645l-1.972-.79c-.25-.1-.45-.298-.552-.547a7 7 0 0 0-.935-1.615 1 1 0 0 1-.198-.754l.302-2.104-2.291-1.323zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                      </svg>
                    </div>
                    <div style={{ alignSelf: 'stretch', paddingBottom: '20px', paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px' }}>
                      <div style={{ color: '#191919', fontFamily: '"TT Norms Tochka Extended", system-ui, sans-serif', fontSize: '16px', fontWeight: 500, letterSpacing: '0.16px', lineHeight: '20px', marginBottom: '20px', marginTop: '10px' }}>Осталось в мае</div>
                      {[
                        { label: 'Снятие наличных', value: '50 000 ₽', pct: 1 },
                        { label: 'Оплата в магазинах', value: '1 200 000 ₽', pct: 1 },
                        { label: 'Оплата в интернете', value: '1 200 000 ₽', pct: 1 },
                      ].map(({ label, value, pct }) => (
                        <div key={label} style={{ marginBottom: '20px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                            <div style={{ color: '#676767', fontFamily: '"TT Norms Tochka Extended", system-ui, sans-serif', fontSize: '14px', letterSpacing: '0.14px', lineHeight: '18px' }}>{label}</div>
                            <div style={{ color: '#191919', fontFamily: '"TT Norms Tochka Extended", system-ui, sans-serif', fontSize: '16px', fontWeight: 500, letterSpacing: '0.16px', lineHeight: '20px' }}>{value}</div>
                          </div>
                          <div style={{ backgroundColor: '#19191926', borderRadius: '6px', height: '4px', overflow: 'clip', position: 'relative', width: '100%' }}>
                            <div style={{ backgroundColor: '#3F9180', borderBottomRightRadius: '6px', borderTopRightRadius: '6px', height: '100%', width: `${pct * 100}%` }} />
                          </div>
                        </div>
                      ))}
                      <div style={{ backgroundColor: '#1919190D', borderRadius: '10px', paddingBlock: '10px', paddingInline: '15px', textAlign: 'center' }}>
                        <div style={{ color: '#191919', fontFamily: '"TT Norms Tochka Extended", system-ui, sans-serif', fontSize: '14px', fontWeight: 500, letterSpacing: '0.14px', lineHeight: '18px' }}>Посмотреть все</div>
                      </div>
                    </div>
                  </div>

                  {/* Widget: Receipts */}
                  <div style={{ alignItems: 'start', borderColor: '#CFCFCF', borderRadius: '16px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', width: '320px' }}>
                    <div style={{ alignItems: 'center', alignSelf: 'stretch', display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px' }}>
                      <div style={{ alignItems: 'baseline', display: 'flex' }}>
                        <div style={{ color: '#191919', fontFamily: '"TT Norms Tochka Extended", system-ui, sans-serif', fontSize: '20px', fontWeight: 600, lineHeight: '26px' }}>Чеки</div>
                        <svg width="18" height="18" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '6px' }}>
                          <path fill="#191919" d="M13.768 10.64a1 1 0 0 0 0-1.28l-5-6a1 1 0 0 0-1.536 1.28L11.699 10l-4.467 5.36a1 1 0 0 0 1.536 1.28z" />
                        </svg>
                      </div>
                      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                        <path fill="#949494" d="M12 3a1 1 0 0 1 1 1v7h7a1 1 0 1 1 0 2h-7v7a1 1 0 1 1-2 0v-7H4a1 1 0 1 1 0-2h7V4a1 1 0 0 1 1-1" />
                      </svg>
                    </div>
                    <div style={{ alignSelf: 'stretch', paddingBottom: '20px', paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px' }}>
                      <div style={{ color: '#676767', fontFamily: '"TT Norms Tochka Extended", system-ui, sans-serif', fontSize: '14px', letterSpacing: '0.14px', lineHeight: '18px' }}>
                        Сформируйте архив с чеками, чтобы упростить процесс отчётности
                      </div>
                    </div>
                  </div>

                  {/* Widget: Account */}
                  <div style={{ alignItems: 'start', borderColor: '#CFCFCF', borderRadius: '16px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', width: '320px' }}>
                    <div style={{ alignItems: 'center', alignSelf: 'stretch', display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px' }}>
                      <div style={{ alignItems: 'baseline', display: 'flex' }}>
                        <div style={{ color: '#191919', fontFamily: '"TT Norms Tochka Extended", system-ui, sans-serif', fontSize: '20px', fontWeight: 600, lineHeight: '26px' }}>Счёт карты</div>
                        <svg width="18" height="18" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '6px' }}>
                          <path fill="#191919" d="M13.768 10.64a1 1 0 0 0 0-1.28l-5-6a1 1 0 0 0-1.536 1.28L11.699 10l-4.467 5.36a1 1 0 0 0 1.536 1.28z" />
                        </svg>
                      </div>
                      <div style={{ color: '#835DE1', fontFamily: '"TT Norms Tochka Extended", system-ui, sans-serif', fontSize: '16px', fontWeight: 500, letterSpacing: '0.16px', lineHeight: '20px' }}>Сменить</div>
                    </div>
                    <div style={{ alignItems: 'start', alignSelf: 'stretch', display: 'flex', flexDirection: 'column', gap: 10, paddingBottom: '15px', paddingInline: '20px', paddingTop: '10px' }}>
                      <div style={{ alignItems: 'center', display: 'flex', paddingBlock: '10px', width: '100%' }}>
                        <div style={{ flexShrink: 0, marginRight: '16px' }}>
                          <svg width="44" height="44" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="flagMask" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="34" height="34">
                              <circle cx="17" cy="17" r="17" fill="#fff" />
                            </mask>
                            <g mask="url(#flagMask)">
                              <rect y="22.667" width="34" height="11.333" fill="#FF4949" />
                              <rect y="11.333" width="34" height="11.333" fill="#003BDE" />
                              <rect width="34" height="11.333" fill="#FAFAFA" />
                            </g>
                          </svg>
                        </div>
                        <div style={{ flex: 1, overflow: 'clip' }}>
                          <div style={{ color: '#191919', fontFamily: '"TT Norms Tochka Extended", system-ui, sans-serif', fontSize: '18px', fontWeight: 500, lineHeight: '22px' }}>407 729,64 ₽</div>
                          <div style={{ color: '#676767', fontFamily: '"TT Norms Tochka Extended", system-ui, sans-serif', fontSize: '14px', letterSpacing: '0.14px', lineHeight: '18px', marginTop: '2px' }}>Расчётный, **3970</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Widget: Spending */}
                  <div style={{ alignItems: 'start', borderColor: '#CFCFCF', borderRadius: '16px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', width: '320px' }}>
                    <div style={{ alignItems: 'center', alignSelf: 'stretch', display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px' }}>
                      <div style={{ alignItems: 'baseline', display: 'flex' }}>
                        <div style={{ color: '#191919', fontFamily: '"TT Norms Tochka Extended", system-ui, sans-serif', fontSize: '20px', fontWeight: 600, lineHeight: '26px' }}>Траты по карте</div>
                        <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none" style={{ marginLeft: '5px' }}>
                          <path fillRule="evenodd" clipRule="evenodd" d="M6.532 3.414a.75.75 0 011.054.118l4 5a.75.75 0 010 .937l-4 5a.75.75 0 11-1.172-.938L10.04 9 6.414 4.469a.75.75 0 01.118-1.055z" fill="#191919" />
                        </svg>
                      </div>
                    </div>
                    <div style={{ alignSelf: 'stretch', paddingBottom: '20px', paddingLeft: '20px', paddingRight: '20px' }}>
                      <div style={{ marginTop: '10px' }}>
                        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                          <div style={{ color: '#191919', fontFamily: '"TT Norms Tochka Extended", system-ui, sans-serif', fontSize: '18px', fontWeight: 500, lineHeight: '22px' }}>Май</div>
                          <div style={{ color: '#676767', fontFamily: '"TT Norms Tochka Extended", system-ui, sans-serif', fontSize: '16px', fontWeight: 500, letterSpacing: '0.16px', lineHeight: '20px' }}>Нет трат</div>
                        </div>
                        <div style={{ backgroundColor: '#EEEEEE', borderRadius: '4px', height: '8px', overflow: 'clip', width: '100%' }} />
                        <div style={{ height: '15px' }} />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
