const stats = [
  { value: '285+',   label: 'Google Reviews' },
  { value: '#1',     label: 'In Dilsukhnagar' },
  { value: '36 Yrs', label: 'Clinical Experience' },
  { value: '1995',   label: 'Year Established' },
]

export default function TrustBar() {
  return (
    <section
      id="trust-bar"
      style={{ background: '#E3BBA9', paddingBlock: '56px' }}
    >
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '40px 24px',
        }}
          className="trust-grid"
        >
          {stats.map(s => (
            <div key={s.value} style={{ textAlign: 'center' }}>
              <p className="serif" style={{
                fontSize: 'clamp(36px, 7vw, 48px)',
                fontWeight: 600,
                color: '#1C1208',
                lineHeight: 1,
                marginBottom: '6px',
              }}>
                {s.value}
              </p>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                color: '#6B5344',
                letterSpacing: '0.02em',
              }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .trust-grid { grid-template-columns: repeat(4, 1fr) !important; gap: 0 !important; }
        }
      `}</style>
    </section>
  )
}
