import { useEffect, useState } from 'react'

const navigation = [
  { label: 'Home', id: 'home' },
  { label: 'Questions', id: 'questions' },
  { label: 'Team', id: 'team' },
  { label: 'Leaderboard', id: 'leaderboard' },
  { label: 'Rules', id: 'rules' },
  { label: 'Profile', id: 'profile' },
]

function CFMark() {
  return (
    <svg className="brand-mark brand-cf" viewBox="0 0 38 38" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="34" height="34" rx="4" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
      <path d="M16 13.5h-3a5 5 0 0 0 0 10h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M21.5 23.5V13.5h6.5m-6.5 5h4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" fill="none">
      <path d="M3 10h13m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function App() {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const updateHeader = () => {
      const scrollY = window.scrollY
      setHasScrolled((current) => scrollY > 32 ? true : scrollY < 8 ? false : current)
    }
    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  return (
    <main className="landing" id="top">
      {/* Header */}
      <header className={`site-header${hasScrolled ? ' is-scrolled' : ''}`}>
        <a className="brand" href="#top" aria-label="Cryptic Finds 2026 home">
          <CFMark />
          <span className="brand-copy">
            <b>CRYPTIC FINDS</b>
          </span>
        </a>
        <nav className="primary-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item.id}
              className={item.id === 'home' ? 'is-current' : ''}
              href={item.id === 'home' ? '#top' : `#${item.id}`}
              aria-current={item.id === 'home' ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="scene-image" aria-hidden="true" />
        <div className="scene-vignette" aria-hidden="true" />
        <div className="scene-grain" aria-hidden="true" />

        <div className="hero-title-block">
          <div className="hero-status-pill">
            <span className="pulse-indicator" />
            <span>TRANSMISSION ONLINE</span>
          </div>
          <h1 id="hero-title">
            <span>CRYPTIC</span>
            <span>FINDS</span>
            <span className="title-year">2026</span>
          </h1>
          <p className="hero-year">A PUZZLE + TECHNOLOGY EVENT</p>
        </div>
      </section>

      {/* Event Introduction */}
      <section className="event-introduction" aria-labelledby="introduction-title">
        <div className="intro-content">
          <div className="intro-heading">
            <p className="intro-eyebrow">
              CRYPTIC FINDS <span>·</span> 2026
            </p>
            <h2 id="introduction-title">
              Event<br />Introduction
            </h2>
          </div>
          <div className="intro-copy">
            <p>
              Cryptic Finds is a technology and puzzle competition bringing together
              engineers, cryptanalysts, and problem solvers. Teams navigate through
              layered ciphers, reverse-engineering challenges, and hidden protocols
              spanning both digital networks and physical grounds.
            </p>
          </div>
        </div>

        <button className="objectives-button" type="button">
          <span>View Objectives</span>
          <i><Arrow /></i>
        </button>
      </section>

      {/* Minimal Footer */}
      <footer className="site-footer">
        <p>Made with love <span className="heart" aria-hidden="true">♥</span></p>
      </footer>
    </main>
  )
}

export default App
