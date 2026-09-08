export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Contact Us</span>
          <h1>Tell us what your operation is trying to get done.</h1>
          <p>
            Most conversations start with a capability assessment. Tell us which teams own the
            work and we&rsquo;ll come back with scope and price.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-card">
              <div className="feature-icon">&#128205;</div>
              <h3 style={{ marginBottom: 8 }}>Address</h3>
              <p style={{ color: 'var(--slate-500)' }}>
                3060 Mercer University Dr<br />Atlanta, GA 30341
              </p>
            </div>
            <div className="contact-card">
              <div className="feature-icon">&#9993;</div>
              <h3 style={{ marginBottom: 8 }}>Email Us</h3>
              <p style={{ color: 'var(--slate-500)' }}>
                <a href="mailto:ben@uplearn.io">ben@uplearn.io</a>
              </p>
            </div>
            <div className="contact-card">
              <div className="feature-icon">&#128279;</div>
              <h3 style={{ marginBottom: 8 }}>Follow Us</h3>
              <p style={{ color: 'var(--slate-500)' }}>
                <a href="https://www.facebook.com/profile.php?id=61581394787873" target="_blank" rel="noreferrer">Facebook</a>
                {' '}&middot;{' '}
                <a href="https://x.com/UpLearnio" target="_blank" rel="noreferrer">Twitter</a>
                {' '}&middot;{' '}
                <a href="https://www.linkedin.com/company/uplearn-io/" target="_blank" rel="noreferrer">LinkedIn</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="map-embed">
            <iframe
              title="UpLearn.io location"
              src="https://maps.google.com/maps?q=3060%20Mercer%20University%20Dr%2C%20Atlanta%2C%20GA%2030341&t=m&z=14&output=embed&iwloc=near"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  )
}
