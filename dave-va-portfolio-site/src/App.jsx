import { useMemo, useState } from 'react'
import {
  caseStudies,
  metrics,
  navItems,
  packages,
  processSteps,
  quickFacts,
  services,
  testimonials,
  tools,
  whyMe,
} from './data.js'

const EMAIL = 'christian.dave.tagadiad01@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/christian-dave-tagadiad/'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Go to home">
        <span className="brand-mark">CD</span>
        <span>
          Christian Dave
          <small>Executive Assistant</small>
        </span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={isMenuOpen}
        aria-controls="site-navigation"
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav id="site-navigation" className={isMenuOpen ? 'nav-links nav-links--open' : 'nav-links'}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-copy">
        <p className="kicker">Portfolio • Two Thousand Twenty-Six</p>
        <h1>Christian Dave Tagadiad</h1>
        <p className="role">Executive Assistant for Entrepreneurs</p>
        <p className="hero-lead">
          I help busy entrepreneurs manage operations and communication so they save time and scale faster.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#contact">
            Book a discovery call
          </a>
          <a className="button button-ghost" href={LINKEDIN} target="_blank" rel="noreferrer">
            View LinkedIn
          </a>
        </div>

        <div className="hero-facts" aria-label="Quick facts">
          {quickFacts.slice(0, 3).map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-media">
        <img src="/images/hero-profile.jpeg" alt="Christian Dave Tagadiad portfolio portrait" />
        <div className="availability-card">
          <span>Available</span>
          <strong>20 to 30 hrs / week</strong>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section-shell about-grid">
      <div>
        <SectionHeading eyebrow="II • About Me" title="About me." />

        <div className="story-stack">
          <article>
            <h3>The hook</h3>
            <p>
              I am an Executive Assistant who keeps entrepreneurs organized and focused on high-value work. I handle
              daily operations so work moves without delays.
            </p>
          </article>
          <article>
            <h3>The story</h3>
            <p>
              Experience in video editing, social media management, and design built strong workflow discipline and
              attention to deadlines. Work across teams improved communication and task coordination.
            </p>
          </article>
          <article>
            <h3>The promise</h3>
            <p>Expect fast responses, organized systems, and consistent delivery with clear communication.</p>
          </article>
        </div>
      </div>

      <aside className="about-card">
        <img src="/images/about-profile.jpeg" alt="Christian Dave workspace portrait" />
        <div className="quick-facts-card">
          <h3>Quick facts</h3>
          {quickFacts.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
          <div>
            <span>Languages</span>
            <strong>English, Filipino</strong>
          </div>
          <div>
            <span>Primary work style</span>
            <strong>Hybrid</strong>
          </div>
        </div>
      </aside>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="section-shell">
      <SectionHeading
        eyebrow="III • Services"
        title="What I deliver."
        description="Operational support built for founders, entrepreneurs, and small teams."
      />

      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <span>{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Tools() {
  return (
    <section className="section-shell tools-section">
      <SectionHeading
        eyebrow="IV • Tools"
        title="Tools I work in."
        description="Platforms used for communication, scheduling, operations, bookkeeping, and AI-assisted workflows."
      />

      <div className="tool-grid">
        {tools.map((tool) => (
          <article className="tool-card" key={tool.name}>
            <img src={tool.image} alt={`${tool.name} logo`} />
            <span>{tool.name}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section-shell process-section">
      <div className="process-copy">
        <SectionHeading
          eyebrow="V • Process"
          title="How we will work."
          description="A clear four-step workflow keeps priorities visible and work moving."
        />
        <img src="/images/editorial-profile.jpeg" alt="Editorial profile used as process visual" />
      </div>

      <div className="process-list">
        {processSteps.map((step) => (
          <article key={step.number}>
            <span>{step.number}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function CaseStudies() {
  const [activeCaseId, setActiveCaseId] = useState(caseStudies[0].id)
  const activeCase = useMemo(
    () => caseStudies.find((caseStudy) => caseStudy.id === activeCaseId) ?? caseStudies[0],
    [activeCaseId],
  )

  return (
    <section id="case-studies" className="section-shell case-section">
      <SectionHeading
        eyebrow="VI • Case Studies"
        title="Selected work."
        description="Two examples showing content planning, client communication, and workflow organization."
      />

      <div className="case-tabs" role="tablist" aria-label="Case study selector">
        {caseStudies.map((caseStudy) => (
          <button
            key={caseStudy.id}
            type="button"
            className={activeCaseId === caseStudy.id ? 'case-tab case-tab--active' : 'case-tab'}
            onClick={() => setActiveCaseId(caseStudy.id)}
          >
            {caseStudy.label}
          </button>
        ))}
      </div>

      <article className="case-card">
        <div className="case-media">
          <img src={activeCase.image} alt={`${activeCase.title} preview`} />
          {activeCase.id === 'workflow' && (
            <div className="case-previews" aria-hidden="true">
              <img src="/images/raw-footage.jpeg" alt="" />
              <img src="/images/workflow-tracker.jpeg" alt="" />
            </div>
          )}
        </div>

        <div className="case-content">
          <p className="eyebrow">{activeCase.label}</p>
          <h3>{activeCase.title}</h3>
          <div className="case-meta">
            <span>Client: {activeCase.client}</span>
            <span>Duration: {activeCase.duration}</span>
          </div>

          <div className="case-block">
            <h4>Problem</h4>
            <p>{activeCase.problem}</p>
          </div>

          <div className="case-block">
            <h4>Solution</h4>
            <ul>
              {activeCase.solution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="case-block case-block--result">
            <h4>Result</h4>
            <ul>
              {activeCase.result.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </section>
  )
}

function Results() {
  return (
    <section className="section-shell results-section">
      <SectionHeading eyebrow="VIII • Results" title="By the numbers." />

      <div className="metrics-grid">
        {metrics.map(([number, label, description]) => (
          <article key={label} className="metric-card">
            <strong>{number}</strong>
            <span>{label}</span>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="section-shell testimonials-section">
      <SectionHeading eyebrow="IX • Testimonials" title="In their words." />

      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className="testimonial-card">
            <span className="quote-mark">“</span>
            <p>“{testimonial.quote}”</p>
            <div className="person-row">
              <img src={testimonial.image} alt={testimonial.name} />
              <div>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Packages() {
  return (
    <section id="packages" className="section-shell packages-section">
      <SectionHeading
        eyebrow="X • Packages"
        title="Three ways to work together."
        description="Choose a support level based on the amount of structure and daily coverage your business needs."
      />

      <div className="package-grid">
        {packages.map((item) => (
          <article key={item.name} className={item.featured ? 'package-card package-card--featured' : 'package-card'}>
            {item.featured && <span className="popular-badge">Most popular</span>}
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div className="price-row">
              <strong>{item.price}</strong>
              <span>/ month</span>
            </div>
            <ul>
              {item.items.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <a className="button button-card" href="#contact">
              Request this package
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

function WhyMe() {
  return (
    <section className="section-shell why-section">
      <SectionHeading eyebrow="XI • Why Me" title="Why work with me." />

      <div className="why-grid">
        {whyMe.map((item, index) => (
          <article key={item.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const updateField = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('Please complete all fields before sending your inquiry.')
      return
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setStatus('Opening your email app with the message prepared.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section-shell contact-section">
      <div className="contact-copy">
        <SectionHeading
          eyebrow="XII • Contact"
          title="Let's talk."
          description="Tell me what support you need. I will help you organize your workflow, manage daily tasks, and keep your business moving."
        />
        <div className="contact-links">
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer">
            LinkedIn profile
          </a>
          <span>Mon to Fri, flexible schedule, PHT (UTC+8)</span>
          <span>Replies within 4 to 12 business hours</span>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" value={formData.name} onChange={updateField} placeholder="Your name" />
        </label>
        <label>
          Email
          <input name="email" type="email" value={formData.email} onChange={updateField} placeholder="your@email.com" />
        </label>
        <label>
          Message
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={updateField}
            placeholder="Tell me what support you need."
          />
        </label>
        <button className="button button-primary" type="submit">
          Send inquiry
        </button>
        {status && <p className="form-status" role="status">{status}</p>}
      </form>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>© 2026 Christian Dave Tagadiad. Executive Assistant Portfolio.</p>
      <a href="#home">Back to top</a>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Tools />
        <Process />
        <CaseStudies />
        <Results />
        <Testimonials />
        <Packages />
        <WhyMe />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
