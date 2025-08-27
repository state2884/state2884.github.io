import React, { useState } from 'react';

const allianceData = [
  {
    tag: "ICE",
    name: "Ice Kingdom",
    bearTrapOne :"",
    bearTraptwo :"",
    legionOne :"",
    legionTwo :"",
    crazyJoe: "",
    color: "#3b82f6"
  },
  {
    tag: "LUV",
    name: "Love Squad", 
    bearTrapOne :"",
    bearTraptwo :"",
    legionOne :"",
    legionTwo :"",
    crazyJoe: "",
    color: "#ec4899"
  },
  {
    tag: "TAN",
    name: "TN-GO",
     bearTrapOne :"",
    bearTraptwo :"",
    legionOne :"",
    legionTwo :"",
    crazyJoe: "",
    color: "#f59e0b"
  },
  {
    tag: "SCS",
    name: "Suicide Squad",
    bearTrapOne :"",
    bearTraptwo :"",
    legionOne :"",
    legionTwo :"",
    crazyJoe: "",
    color: "#ef4444"
  },
  {
    tag: "OMG",
    name: "Devil's",
    bearTrapOne :"",
    bearTraptwo :"",
    legionOne :"",
    legionTwo :"",
    crazyJoe: "",
    color: "#7c3aed"
  },
  {
    tag: "KOR",
    name: "Star",
    bearTrapOne :"",
    bearTraptwo :"",
    legionOne :"",
    legionTwo :"",
    crazyJoe: "",
    color: "#10b981"
  },
  {
    tag: "LSS",
    name: "Last Survivors",
    bearTrapOne :"",
    bearTraptwo :"",
    legionOne :"",
    legionTwo :"",
    crazyJoe: "",
    color: "#6366f1"
  }
];



export default function Alliances() {
  const [selectedAlliance, setSelectedAlliance] = useState(null);

  return (
    <section className="alliances">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1>Alliance Directory</h1>
          <p>Explore the alliances and be part of our community</p>
          <p>Reach out to R5/R4 for more information about joining.</p>
        </div>

        {/* Alliance Grid */}
        <div className="alliance-grid">
          {allianceData.map((alliance, index) => (
            <div 
              key={alliance.tag}
              className="alliance-card"
              style={{
                '--alliance-color': alliance.color,
                animationDelay: `${index * 0.1}s`
              }}
              onClick={() => setSelectedAlliance(selectedAlliance === alliance.tag ? null : alliance.tag)}
            >
              <div className="alliance-header">
                <div className="alliance-tag-display">
                  [{alliance.tag}]
                </div>
                <h3 className="alliance-name">{alliance.name}</h3>
              </div>
              
              <div className="alliance-content">
                 <div className="alliance-stats">
                  <div className="stat-item">
                    <span className="stat-label">🐻Bear Trap 1:</span>
                    <span className="stat-value">{alliance.bearTrapOne}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">🐻Bear Trap 2:</span>
                    <span className="stat-value">{alliance.bearTraptwo}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">🏰Foundry Legion 1:</span>
                    <span className="stat-value">{alliance.legionOne}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">🏰Foundry Legion 2:</span>
                    <span className="stat-value">{alliance.legionTwo}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">🚨Crazy Joe:</span>
                    <span className="stat-value">{alliance.crazyJoe}</span>
                  </div>
                 
                </div>

                
              </div>

            </div>
          ))}
        </div>

      
        {/* Call to Action */}
        <div className="alliance-cta">
          <h3>Ready to Join the Fight?</h3>
          <p>Connect with alliance leaders and become part of something greater</p>
          <div className="cta-buttons">
            <a href="#" className="action-btn primary">
              <span className="btn-icon">⚔️</span>
              Join an Alliance
            </a>
            <a href="#" className="action-btn discord">
              <span className="btn-icon">💬</span>
              Discord Community
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .alliances {
          min-height: calc(100vh - 80px);
          padding: 2rem 0;
        }

        .alliance-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .alliance-card {
          background: var(--card-bg);
          border-radius: 16px;
          padding: 0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          border: 1px solid var(--border);
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          opacity: 0;
          animation: slideUp 0.6s ease forwards;
        }

        .alliance-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
        }

        .alliance-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--alliance-color);
        }

        .alliance-header {
          padding: 2rem 2rem 1rem 2rem;
          background: linear-gradient(135deg, 
            color-mix(in srgb, var(--alliance-color) 10%, transparent),
            color-mix(in srgb, var(--alliance-color) 5%, transparent)
          );
        }

        .alliance-tag-display {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: var(--alliance-color);
          color: white;
          border-radius: 20px;
          font-weight: 700;
          font-size: 0.9rem;
          margin-bottom: 1rem;
          box-shadow: 0 2px 8px color-mix(in srgb, var(--alliance-color) 30%, transparent);
        }

        .alliance-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent);
          margin: 0;
        }

        .alliance-content {
          padding: 0 2rem 1rem 2rem;
        }

        .alliance-description {
          color: var(--muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .alliance-stats {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .stat-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem;
          background: rgba(59, 130, 246, 0.05);
          border-radius: 8px;
        }

        .stat-label {
          font-weight: 600;
          color: var(--accent);
        }

        .stat-value {
          color: var(--muted);
          font-weight: 500;
        }

        .alliance-details {
          margin-top: 1.5rem;
          padding: 1.5rem;
          background: rgba(59, 130, 246, 0.05);
          border-radius: 12px;
          animation: slideDown 0.3s ease;
        }

        .detail-section {
          margin-bottom: 1rem;
        }

        .detail-section:last-child {
          margin-bottom: 0;
        }

        .detail-section h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--accent);
          margin-bottom: 0.5rem;
        }

        .detail-section p {
          color: var(--muted);
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .alliance-footer {
          padding: 1rem 2rem 2rem 2rem;
        }

        .expand-btn {
          width: 100%;
          padding: 0.75rem;
          background: var(--alliance-color);
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .expand-btn:hover {
          background: color-mix(in srgb, var(--alliance-color) 90%, black);
          transform: translateY(-1px);
        }

        .special-units-section {
          margin: 4rem 0;
        }

        .special-units-section h2 {
          text-align: center;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, var(--primary), #8b5cf6);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section-subtitle {
          text-align: center;
          color: var(--muted);
          font-size: 1.1rem;
          margin-bottom: 3rem;
        }

        .special-units-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .special-unit-card {
          background: var(--card-bg);
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          border: 1px solid var(--border);
          transition: all 0.3s ease;
          opacity: 0;
          animation: slideUp 0.6s ease forwards;
        }

        .special-unit-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
        }

        .unit-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        }

        .unit-name {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--accent);
          margin-bottom: 1rem;
        }

        .unit-info {
          color: var(--muted);
          line-height: 1.5;
        }

        .alliance-cta {
          text-align: center;
          margin-top: 4rem;
          padding: 3rem 2rem;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
          color: white;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(59, 130, 246, 0.2);
        }

        .alliance-cta h3 {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .alliance-cta p {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .action-btn.primary {
          background: white;
          color: var(--primary);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .action-btn.primary:hover {
          background: rgba(255, 255, 255, 0.95);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .action-btn.discord {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
        }

        .action-btn.discord:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 200px;
          }
        }

        @media (max-width: 768px) {
          .alliance-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .alliance-card {
            margin: 0;
          }

          .alliance-header {
            padding: 1.5rem 1.5rem 1rem 1.5rem;
          }

          .alliance-content {
            padding: 0 1.5rem 1rem 1.5rem;
          }

          .alliance-footer {
            padding: 1rem 1.5rem 1.5rem 1.5rem;
          }

          .special-units-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .alliance-cta {
            padding: 2rem 1.5rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .action-btn {
            min-width: 200px;
          }
        }

        @media (max-width: 480px) {
          .alliance-grid {
            grid-template-columns: 1fr;
          }
          
          .alliance-card {
            min-width: unset;
          }
        }
      `}</style>
    </section>
  );
}