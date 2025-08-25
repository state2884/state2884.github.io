import React from 'react'

export default function Home() {
  return (
    <section className="home">
      <div className="hero">
        <div className="hero-image">
          <img src="/assets/wos.webp" alt="Whiteout Survival State 2884" />
        </div>
        <div className="hero-content">
          <h1>Welcome to State 2884</h1>
          <p>Here, cooperation and camaraderie define our community. Join us in Whiteout Survival to unite, share resources, and thrive together in exciting events.</p>
          <div className="hero-buttons">
            <a href="#/alliances" className="btn btn-primary">
              View Alliances
            </a>
            <a href="#/discord" className="btn btn-outline">
              Join Discord
            </a>
          </div>
        </div>
      </div>

      <section className="features">
        <article>
          <div className="feature-icon">🤝</div>
          <h3>State Engagement</h3>
          <p>Join discussions, share experiences, and stay updated on our Discord server.</p>
        </article>
        <article>
          <div className="feature-icon">📦</div>
          <h3>Resource Sharing</h3>
          <p>We regularly help anyone who is short on resources. Community support is our priority.</p>
        </article>
        <article>
          <div className="feature-icon">🕊️</div>
          <h3>NAP in Place</h3>
          <p>Peaceful state with NAP—no city or tile hits unless specified. Safe environment for all.</p>
        </article>
      </section>

      <section className="callout">
        <h4>Ready to Join Our Community?</h4>
        <p>Discover our alliances, participate in events, and become part of State 2884's thriving community.</p>
        <a href="#/alliances" className="btn btn-primary">Explore Alliances</a>
      </section>
    </section>
  )
}