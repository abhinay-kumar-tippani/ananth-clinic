const WA = 'https://wa.me/919876543210'
const CALL = 'tel:+919876543210'

const pills = ['MBBS', 'MD Dermatology', 'IADVL Member', 'HMC Reg. 12953']

function WaIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{ background: '#FDF8F5', paddingTop: '60px' /* navbar height */ }}
    >
      <div className="container" style={{ paddingTop: '72px', paddingBottom: '80px' }}>
        {/* Two-column grid: text + visual card */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          alignItems: 'center',
        }}
          className="hero-grid"
        >
          {/* ── LEFT: Text ── */}
          <div>
            {/* Eyebrow */}
            <p className="eyebrow" style={{ marginBottom: '20px' }}>
              Dilsukhnagar's Most Trusted Dermatologist
            </p>

            {/* Headline */}
            <h1 className="hero-headline" style={{ marginBottom: '20px' }}>
              Skin &amp; Hair Care<br />
              <span style={{ color: '#E3BBA9' }}>You Can Trust.</span>
            </h1>

            {/* One-line subtext */}
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '15px',
              color: '#6B5344',
              marginBottom: '36px',
              lineHeight: 1.6,
            }}>
              Dr. A. Venkata Ramana · MD Dermatology · 36 Years · Est. 1993
            </p>

            {/* CTA buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
              <a id="hero-wa-btn" href={WA} target="_blank" rel="noopener noreferrer" className="btn-wa">
                <WaIcon />
                Book on WhatsApp
              </a>
              <a id="hero-call-btn" href={CALL} className="btn-outline-peach">
                Call Clinic
              </a>
            </div>

            {/* Credential pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {pills.map(p => (
                <span key={p} className="cred-pill">{p}</span>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Stat card ── */}
          <div
            id="hero-stat-card"
            style={{
              background: '#FAF0EA',
              borderRadius: '32px',
              padding: '48px 36px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0',
              textAlign: 'center',
            }}
          >
            {/* Big number */}
            <p className="serif" style={{
              fontSize: 'clamp(80px, 14vw, 120px)',
              fontWeight: 600,
              color: '#E3BBA9',
              lineHeight: 1,
              marginBottom: '4px',
            }}>
              36
            </p>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              color: '#6B5344',
              letterSpacing: '0.04em',
              marginBottom: '28px',
            }}>
              Years of Practice
            </p>

            {/* Divider */}
            <div style={{ width: '48px', height: '1px', background: '#E3BBA9', marginBottom: '28px' }} />

            {/* Details */}
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              color: '#6B5344',
              marginBottom: '10px',
            }}>
              Est. 1993 · Dilsukhnagar, Hyderabad
            </p>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              color: '#6B5344',
            }}>
              285+ Google Reviews · 4.4★
            </p>
          </div>
        </div>
      </div>

      {/* Responsive grid style */}
      <style>{`
        @media (min-width: 768px) {
          .hero-grid {
            grid-template-columns: 60fr 40fr !important;
          }
        }
      `}</style>
    </section>
  )
}
