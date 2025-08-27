import React, { useEffect } from 'react'

export default function StateInfo() {
  
  return (
    <div className="container">
      <section className="state-info">
        <div className="page-header">
          <h1>State Rules & Information</h1>
          <p>Essential information for all State 2884 members</p>
        </div>

        <div className="info-grid">
          {/* NAP List Card */}
          <div className="info-card nap-card">
            <div className="card-header">
              <h2>🤝 NAP Alliance List</h2>
              <p>Current Non-Aggression Pact Partners</p>
            </div>
            <div className="nap-list">
              {['ICE', 'LUV', 'TAN', 'KOR', 'OMG', 'SCS', 'LSS'].map((alliance, index) => (
                <div key={alliance} className="nap-item" style={{animationDelay: `${index * 0.1}s`}}>
                  <span className="alliance-tag">{alliance}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Brothers in Arms Event Card */}
          <div className="info-card event-card">
            <div className="card-header">
              <h2>🔪 Brothers in Arms Event</h2>
              <div className="event-timer">
                <span className="timer-icon">🕛</span>
                <span>Starts at reset • Duration: 2 days</span>
              </div>
            </div>
            
            <div className="rules-section">
              <div className="rules-allowed">
                <h3>✅ You CAN Attack:</h3>
                <ul>
                  <li>
                    <span className="rule-icon">⛏️</span>
                    <span>Gathering tiles</span>
                  </li>
                  <li>
                    <span className="rule-icon">⚔️</span>
                    <span>Non-NAP players</span>
                  </li>
                  <li>
                    <span className="rule-icon">🎯</span>
                    <span>Maximum 2 hits per target</span>
                  </li>
                </ul>
              </div>

              <div className="rules-forbidden">
                <h3>❌ You CANNOT Attack:</h3>
                <ul>
                  <li>
                    <span className="rule-icon">🏰</span>
                    <span>NAP alliance cities</span>
                  </li>
                  <li>
                    <span className="rule-icon">🚜</span>
                    <span>NAP alliance farms</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Server Age Card */}
          <div className="info-card timer-card">
            <div className="card-header">
              <h2>⏰ Server Information</h2>
              <p>Live server statistics</p>
            </div>
            <div className="timer-container">
  <div className="tickcounter-frame" style={{position:'relative', paddingBottom:'25%', height:0, overflow:'hidden', borderRadius:12}}>
    <iframe
      title="Server Age"
      src="//www.tickcounter.com/widget/countup/457178?label=Server%20Age"
      style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', border:0}}
      scrolling="no"
      loading="lazy"
    />
  </div>
</div>
          </div>

          {/* Additional Rules Card */}
          <div className="info-card rules-card">
            <div className="card-header">
              <h2>📋 General State Rules</h2>
              <p>Guidelines for all members</p>
            </div>
            <div className="general-rules">
              <div className="rule-item">
                <span className="rule-number">1</span>
                <div className="rule-content">
                  <h4>Respect NAP Agreements</h4>
                  <p>Always honor our non-aggression pacts with allied states</p>
                </div>
              </div>
              <div className="rule-item">
                <span className="rule-number">2</span>
                <div className="rule-content">
                  <h4>Resource Sharing</h4>
                  <p>Support fellow state members when they need assistance</p>
                </div>
              </div>
              <div className="rule-item">
                <span className="rule-number">3</span>
                <div className="rule-content">
                  <h4>Communication</h4>
                  <p>Stay active in Discord and coordinate with leadership</p>
                </div>
              </div>
              <div className="rule-item">
                <span className="rule-number">4</span>
                <div className="rule-content">
                  <h4>Event Participation</h4>
                  <p>Join state events and follow event-specific rules</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <h3>Quick Actions</h3>
          <div className="action-buttons">
            <a href="#/alliances" className="action-btn primary">
              <span className="btn-icon">🤝</span>
              View Alliances
            </a>
            
            <a href="#" className="action-btn discord">
              <span className="btn-icon">💬</span>
              Join Discord
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}