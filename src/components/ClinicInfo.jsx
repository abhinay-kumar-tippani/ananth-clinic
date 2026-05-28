const WA = 'https://wa.me/919876543210'
const MAPS = 'https://maps.app.goo.gl/aAyzxe42bezP36AA9'

const infoBlocks = [
  {
    label: 'Address',
    value: 'Shop No. 14, Balaji Complex, Opp. Venkatadri Theatre,\nDilsukhnagar Main Road, Hyderabad – 500060',
  },
  {
    label: 'Timings',
    value: 'Mon–Sat · 6:00 PM – 9:00 PM\nClosed Sundays & public holidays',
  },
  {
    label: 'Consultation Fee',
    value: '₹300 per visit · No hidden charges',
  },
]

export default function ClinicInfo() {
  return (
    <section id="clinic" style={{ background: '#FDF8F5' }} className="section-pad">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '56px' }}>
          <h2 className="section-headline" style={{ marginBottom: '10px' }}>
            Visit the Clinic
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '15px',
            color: '#6B5344',
          }}>
            Walk-ins welcome. Evening hours for working patients.
          </p>
        </div>

        {/* Two columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px',
          marginBottom: '40px',
        }}
          className="clinic-grid"
        >
          {/* ── LEFT: Map card ── */}
          <div className="map-card">
            {/* Visual area */}
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '48px 32px',
              gap: '8px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Subtle grid overlay */}
              <div aria-hidden="true" style={{
                position: 'absolute', inset: 0,
                backgroundImage: `
                  linear-gradient(rgba(196,149,126,0.08) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(196,149,126,0.08) 1px, transparent 1px)
                `,
                backgroundSize: '28px 28px',
              }} />

              <p className="serif" style={{
                fontSize: '22px', fontWeight: 600,
                color: '#1C1208', position: 'relative', zIndex: 1,
              }}>
                Ananth Skin &amp; Hair Clinic
              </p>
              <p style={{
                fontFamily: 'var(--font-sans)', fontSize: '13px',
                color: '#6B5344', position: 'relative', zIndex: 1,
              }}>
                Dilsukhnagar, Hyderabad
              </p>
              <p style={{
                fontFamily: 'var(--font-sans)', fontSize: '12px',
                color: '#C4957E', marginTop: '8px', position: 'relative', zIndex: 1,
                letterSpacing: '0.04em',
              }}>
                Mon–Sat · 6 PM – 9 PM
              </p>
            </div>

            {/* Get directions */}
            <a
              id="get-directions-btn"
              href={MAPS}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                background: '#FAF0EA',
                borderTop: '1.5px solid #E3BBA9',
                padding: '16px',
                textAlign: 'center',
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 500,
                color: '#C4957E',
                textDecoration: 'none',
                transition: 'background 0.18s ease',
                letterSpacing: '0.04em',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#f0e4db'}
              onMouseLeave={e => e.currentTarget.style.background = '#FAF0EA'}
            >
              Get Directions on Google Maps →
            </a>
          </div>

          {/* ── RIGHT: Info blocks ── */}
          <div>
            {infoBlocks.map(b => (
              <div key={b.label} className="info-block">
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#C4957E',
                  marginBottom: '8px',
                }}>
                  {b.label}
                </p>
                {b.value.split('\n').map((line, i) => (
                  <p key={i} style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '15px',
                    color: '#1C1208',
                    lineHeight: 1.65,
                  }}>
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Full-width buttons row */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
          className="clinic-btns"
        >
          <a
            id="clinic-directions-btn"
            href={MAPS}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-peach-rect"
            style={{ flex: 1 }}
          >
            Get Directions on Google Maps
          </a>
          <a
            id="clinic-wa-btn"
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa-rect"
            style={{ flex: 1 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Book Appointment on WhatsApp
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .clinic-grid { grid-template-columns: 1fr 1fr !important; }
          .clinic-btns { flex-direction: row !important; }
        }
      `}</style>
    </section>
  )
}
