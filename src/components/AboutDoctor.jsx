const credPills = [
  'MBBS – Gandhi Medical College',
  'MD Dermatology – Osmania',
  'IADVL Member',
  'Former Professor, Osmania Hospital',
  'HMC Reg. 12953',
]

export default function AboutDoctor() {
  return (
    <section id="about" style={{ background: '#FDF8F5' }} className="section-pad">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          alignItems: 'start',
        }}
          className="about-grid"
        >
          {/* ── LEFT: Avatar + badge ── */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '20px' }}>
            {/* Avatar square */}
            <div style={{
              width: '100%',
              maxWidth: '260px',
              aspectRatio: '1',
              background: '#E3BBA9',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span className="serif" style={{
                fontSize: 'clamp(60px, 12vw, 80px)',
                fontWeight: 600,
                color: '#1C1208',
                userSelect: 'none',
              }}>
                VR
              </span>
            </div>

            {/* Badge */}
            <span style={{
              background: '#1C1208',
              color: '#FFFFFF',
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '7px 16px',
              borderRadius: '999px',
            }}>
              Senior Dermatologist
            </span>
          </div>

          {/* ── RIGHT: Content ── */}
          <div>
            {/* Eyebrow */}
            <p className="eyebrow" style={{ marginBottom: '14px' }}>
              About the Doctor
            </p>

            {/* Name */}
            <h2 className="section-headline" style={{ marginBottom: '6px' }}>
              Dr. A. Venkata Ramana
            </h2>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '15px',
              color: '#6B5344',
              marginBottom: '28px',
            }}>
              Ananthula Venkata Krishna · MD Dermatology
            </p>

            {/* Divider */}
            <div className="divider" />

            {/* Bio */}
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '15px',
              color: '#6B5344',
              lineHeight: 1.8,
              marginBottom: '32px',
            }}>
              Dr. A. Venkata Ramana has been treating skin and hair conditions in Dilsukhnagar since
              1993. A former professor at Osmania Hospital, he trained at Gandhi Medical College and
              completed his MD at Osmania Medical College. For over 36 years, patients across Hyderabad
              have trusted him for both routine dermatology and advanced laser procedures.
            </p>

            {/* Credential pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {credPills.map(c => (
                <span key={c} className="cred-pill">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 40fr 60fr !important;
            gap: 64px !important;
          }
        }
      `}</style>
    </section>
  )
}
