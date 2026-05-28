export default function Footer() {
  return (
    <footer id="footer" style={{ background: '#1C1208' }}>
      <div className="container" style={{ paddingBlock: '64px' }}>
        {/* Three columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          marginBottom: '48px',
        }}
          className="footer-grid"
        >
          {/* Col 1 */}
          <div>
            <p className="serif" style={{
              fontSize: '22px',
              fontWeight: 600,
              color: '#FAF0EA',
              marginBottom: '10px',
              lineHeight: 1.2,
            }}>
              Ananth Skin &amp; Hair Clinic
            </p>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              color: '#C4957E',
              lineHeight: 1.7,
              marginBottom: '16px',
            }}>
              Trusted Skin &amp; Hair Care in<br />Dilsukhnagar Since 1993
            </p>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              color: '#6B5344',
              lineHeight: 1.7,
            }}>
              Near Maruti Mandir, Opp. CMR Shopping Mall,<br />
              Beside Metai Mandir, Dilsukhnagar Main Road,<br />
              Hyderabad – 500060
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#C4957E',
              marginBottom: '20px',
            }}>
              Clinic Details
            </p>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              color: '#FAF0EA',
              lineHeight: 2.1,
            }}>
              <p>Mon–Sat · 6:00 PM – 9:00 PM</p>
              <p>₹600 Consultation Fee</p>
              <p style={{ color: '#6B5344', marginTop: '6px' }}>Closed Sundays &amp; holidays</p>
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#C4957E',
              marginBottom: '20px',
            }}>
              Registration
            </p>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              color: '#FAF0EA',
              lineHeight: 2.1,
            }}>
              <p>HMC Reg. No. 12953</p>
              <p>Hyderabad Medical Council (1990)</p>
              <p>IADVL Member</p>
              <p style={{ color: '#6B5344' }}>Former Professor, Osmania Hospital</p>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div style={{ borderTop: '1px solid #3D2B1F', paddingTop: '24px' }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '12px',
            color: '#4A3228',
            textAlign: 'center',
            lineHeight: 1.8,
          }}>
            © 2026 Ananth Skin &amp; Hair Clinic. All rights reserved.
            <br />
            This is a demo website.
          </p>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-grid { grid-template-columns: repeat(3, 1fr) !important; gap: 48px !important; }
        }
      `}</style>
    </footer>
  )
}
