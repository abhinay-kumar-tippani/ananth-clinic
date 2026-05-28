const MAPS = 'https://maps.app.goo.gl/aAyzxe42bezP36AA9'

const reviews = [
  {
    id: 'r1',
    quote: 'Had black spots on my face for years. Laser treatment — no side effects, no problems since.',
    attr: 'Patient, Dilsukhnagar',
  },
  {
    id: 'r2',
    quote: 'A problem I had for 4 years was resolved in 45 days. I refer him to everyone I know.',
    attr: 'Long-time patient',
  },
  {
    id: 'r3',
    quote: "Very senior doctor. I've been sending patients to him for years — everyone comes back satisfied.",
    attr: 'Referring patient',
  },
]

export default function Reviews() {
  return (
    <section id="reviews" style={{ background: '#2A1F1A' }} className="section-pad">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '56px' }}>
          <h2 className="section-headline" style={{ color: '#FFFFFF', marginBottom: '10px' }}>
            What Patients Say
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '15px',
            color: '#E3BBA9',
          }}>
            Real experiences from patients in Dilsukhnagar.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '20px',
          marginBottom: '48px',
        }}
          className="reviews-grid"
        >
          {reviews.map(r => (
            <div key={r.id} id={r.id} className="review-card">
              {/* Stars */}
              <p className="stars" style={{ marginBottom: '18px' }}>★★★★★</p>

              {/* Quote */}
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '15px',
                color: '#FAF0EA',
                lineHeight: 1.75,
                marginBottom: '24px',
                fontStyle: 'italic',
              }}>
                "{r.quote}"
              </p>

              {/* Attribution */}
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                color: '#C4957E',
                fontWeight: 500,
              }}>
                — {r.attr}
              </p>
            </div>
          ))}
        </div>

        {/* Footer line */}
        <p style={{
          textAlign: 'center',
          fontFamily: 'var(--font-sans)',
          fontSize: '13px',
          color: '#E3BBA9',
          letterSpacing: '0.04em',
        }}>
          285+ Google Reviews · 4.4 Stars · #1 Skin Clinic in Dilsukhnagar
          <br />
          <a
            href={MAPS}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#C4957E', textDecoration: 'underline', marginTop: '6px', display: 'inline-block' }}
          >
            View on Google Maps →
          </a>
        </p>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .reviews-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
