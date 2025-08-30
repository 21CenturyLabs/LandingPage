import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState({})
  const [currentService, setCurrentService] = useState(0)

  const services = [
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure that grows with your business",
      icon: "☁️",
      color: "#4F46E5"
    },
    {
      title: "AI & Machine Learning",
      description: "Intelligent automation and data-driven insights",
      icon: "🤖",
      color: "#059669"
    },
    {
      title: "Cybersecurity",
      description: "Advanced protection for your digital assets",
      icon: "🛡️",
      color: "#DC2626"
    },
    {
      title: "Custom Development",
      description: "Tailored software solutions for unique challenges",
      icon: "⚡",
      color: "#7C3AED"
    }
  ]

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" },
    { number: "150+", label: "Happy Clients" }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [services.length])

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <img src="/logo.svg" alt="21CenturyLabs" className="logo-img" />
          </div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <button className="cta-button">Get Started</button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        
        <div className="hero-content">
          <div className={`hero-text ${isVisible.hero ? 'animate-in' : ''}`}>
            <h1 className="hero-title">
              Innovating the
              <span className="gradient-text"> Future </span>
              of Technology
            </h1>
            <p className="hero-subtitle">
              Empowering businesses with cutting-edge IT solutions, cloud infrastructure, 
              and AI-driven innovations that transform the way you work.
            </p>
            <div className="hero-buttons">
              <button className="primary-button">
                Start Your Journey
                <span className="button-arrow">→</span>
              </button>
              <button className="secondary-button">
                <span className="play-icon">▶</span>
                Watch Demo
              </button>
            </div>
          </div>
          
          <div className={`hero-visual ${isVisible.hero ? 'animate-in' : ''}`}>
            <div className="floating-cards">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`floating-card ${index === currentService ? 'active' : ''}`}
                  style={{ '--delay': `${index * 0.2}s` }}
                >
                  <div className="card-icon" style={{ color: service.color }}>
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section" id="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`stat-item ${isVisible.stats ? 'animate-in' : ''}`}
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="container">
          <div className={`section-header ${isVisible.services ? 'animate-in' : ''}`}>
            <h2>Our Services</h2>
            <p>Comprehensive IT solutions tailored to your business needs</p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`service-card ${isVisible.services ? 'animate-in' : ''}`}
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <div className="service-icon" style={{ color: service.color }}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="learn-more-btn">
                  Learn More
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="cta">
        <div className="container">
          <div className={`cta-content ${isVisible.cta ? 'animate-in' : ''}`}>
            <h2>Ready to Transform Your Business?</h2>
            <p>Join hundreds of companies already benefiting from our innovative IT solutions</p>
            <div className="cta-buttons">
              <button className="primary-button large">
                Get Free Consultation
              </button>
              <button className="secondary-button large">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <img src="/logo.svg" alt="21CenturyLabs" className="footer-logo" />
              <p>Innovating the future of technology, one solution at a time.</p>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><a href="#">Cloud Solutions</a></li>
                <li><a href="#">AI & ML</a></li>
                <li><a href="#">Cybersecurity</a></li>
                <li><a href="#">Development</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <div className="social-links">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">GitHub</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 21CenturyLabs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
