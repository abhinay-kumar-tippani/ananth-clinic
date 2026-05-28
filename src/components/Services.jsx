const services = [
  {
    name: 'Acne & Pimple Treatment',
    desc: 'Hormonal, cystic, and adult acne treated with topical, oral, and procedural options.',
  },
  {
    name: 'Laser Skin Rejuvenation',
    desc: 'Sun damage, uneven texture, and ageing signs treated with precise laser energy.',
  },
  {
    name: 'Pigmentation & Dark Spots',
    desc: 'Melasma, post-acne marks, and sun spots addressed through peels and laser.',
  },
  {
    name: 'Wart Removal',
    desc: 'Quick removal of common and plantar warts. No scarring in most cases.',
  },
  {
    name: 'Vitiligo / Leucoderma',
    desc: 'Medical management and phototherapy to slow spread and support repigmentation.',
  },
  {
    name: 'Laser Hair Removal',
    desc: 'Permanent reduction of unwanted body or facial hair with diode laser.',
  },
  {
    name: 'Hair Loss Treatment',
    desc: 'Androgenetic alopecia and telogen effluvium treated with minoxidil, PRP, or oral therapy.',
  },
  {
    name: 'Scar & Skin Polishing',
    desc: 'Microdermabrasion and chemical peels for pitted scars, rough texture, and uneven tone.',
  },
]

export default function Services() {
  return (
    <section id="services" style={{ background: '#FFFFFF' }} className="section-pad">
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '56px' }}>
          <h2 className="section-headline" style={{ marginBottom: '12px' }}>
            What We Treat
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '15px',
            color: '#6B5344',
            maxWidth: '480px',
          }}>
            Expert diagnosis and treatment for all skin and hair conditions.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '24px',
        }}
          className="services-grid"
        >
          {services.map(s => (
            <div key={s.name} className="service-card">
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '15px',
                fontWeight: 600,
                color: '#1C1208',
                marginBottom: '10px',
                lineHeight: 1.3,
              }}>
                {s.name}
              </p>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                color: '#6B5344',
                lineHeight: 1.65,
              }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .services-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
