import React from 'react'

export default function Home(){
  return (
    <section className="home">
      <div className="hero">
        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,fit=crop/YBgeXw1enVSn3Nwm/website-banner2-YanJ3jZOP9hXnXRZ.jpg" alt="banner" />
        <div className="hero-content">
          <h1>Welcome to State 2884</h1>
          <p>Cooperation and camaraderie are at the heart of our community. Join us in Whiteout Survival to team up, share resources, and enjoy events together.</p>
        </div>
      </div>

      <section className="features">
        <article>
          <h3>State Engagement</h3>
          <p>Join discussions, share experiences, and stay updated on our Discord.</p>
        </article>
        <article>
          <h3>Resource Sharing</h3>
          <p>We regularly help anyone who is short on resources.</p>
        </article>
        <article>
          <h3>NAP in place</h3>
          <p>Peaceful state with NAP—no city or tile hits unless specified.</p>
        </article>
      </section>

      <section className="callout">
        <h4>Check out our alliances</h4>
        <p><a href="#/alliances">Alliance Info</a></p>
      </section>
    </section>
  )
}
