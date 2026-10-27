import React from "react";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { team, productOwner } from "../data/team";
import resources from "../data/resources";

export function ResourceList() {
  return (
    <div className="resource-grid">
      {resources.map((resource) => (
        <div className="resource" key={resource.id}>
          <span className="resource-icon" aria-hidden="true">
            {resource.icon}
          </span>
          <h3>{resource.label}</h3>
          <p>{resource.description}</p>
          {resource.url ? (
            <a
              href={resource.url}
              target={resource.url.startsWith("https:") ? "_blank" : undefined}
              rel="noopener noreferrer"
            >
              Open resource ↗
            </a>
          ) : (
            <span className="pending">{resource.pending}</span>
          )}
        </div>
      ))}
    </div>
  );
}
function Member({ member, featured = false }) {
  return (
    <article className={featured ? "member member--owner" : "member"}>
      {featured && <div className="owner-label">PRODUCT OWNER</div>}
      <img
        src={useBaseUrl(member.photo)}
        alt={`Profile placeholder for ${member.name}`}
        width="88"
        height="88"
      />
      <div>
        <h3>{[member.title, member.name].filter(Boolean).join(" ")}</h3>
        {member.studyField && <p>{member.studyField}</p>}
        <p className="member-role">{member.role}</p>
      </div>
    </article>
  );
}
function Signal() {
  return (
    <div
      className="signal-panel"
      role="img"
      aria-label="Conceptual illustration: Wi-Fi signals reveal a person's presence in a room. Not live sensor data."
    >
      <div className="signal-heading">
        <span>
          <i /> SIGNAL EXPLORER
        </span>
        <span>CONCEPT / 01</span>
      </div>
      <svg viewBox="0 0 580 400" aria-hidden="true">
        <defs>
          <pattern
            id="grid"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M32 0H0V32"
              fill="none"
              stroke="#c4cfdf"
              strokeOpacity=".08"
            />
          </pattern>
          <radialGradient id="glow">
            <stop stopColor="#9bbcff" stopOpacity=".17" />
            <stop offset="1" stopColor="#9bbcff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="580" height="400" fill="url(#grid)" />
        <ellipse cx="300" cy="213" rx="240" ry="180" fill="url(#glow)" />
        <path
          d="M111 296V126L293 53 481 126V296L293 368Z M111 126L293 211 481 126M293 211V368"
          fill="none"
          stroke="#a3b0c5"
          strokeOpacity=".3"
        />
        {[65, 105, 145, 185].map((r) => (
          <ellipse
            key={r}
            cx="293"
            cy="242"
            rx={r}
            ry={r * 0.46}
            fill="none"
            stroke="#9bbcff"
            strokeOpacity={0.65 - r / 400}
            strokeDasharray={r === 185 ? "4 8" : undefined}
          />
        ))}
        <path
          d="M242 260V185a51 51 0 0 1 102 0v75"
          fill="none"
          stroke="#9bbcff"
          strokeWidth="1"
          strokeDasharray="3 6"
        />
        <circle
          cx="293"
          cy="171"
          r="20"
          fill="#9bbcff"
          fillOpacity=".15"
          stroke="#9bbcff"
        />
        <path
          d="M266 246v-34a27 27 0 0 1 54 0v34M283 245v36M304 245v36"
          stroke="#9bbcff"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="111" cy="296" r="7" fill="#9bbcff" />
        <path
          d="M111 296L224 244M351 244L481 296"
          stroke="#9bbcff"
          strokeDasharray="4 5"
        />
        <circle cx="481" cy="296" r="5" fill="#9bbcff" />
        <text
          x="64"
          y="325"
          fill="#aab5c8"
          fontSize="10"
          fontFamily="monospace"
        >
          Wi-Fi TX
        </text>
        <text
          x="457"
          y="325"
          fill="#aab5c8"
          fontSize="10"
          fontFamily="monospace"
        >
          Wi-Fi RX
        </text>
        <path
          d="M355 167h54l17-21"
          fill="none"
          stroke="#9bbcff"
          strokeOpacity=".6"
        />
        <text
          x="389"
          y="135"
          fill="#9bbcff"
          fontSize="10"
          fontFamily="monospace"
        >
          PRESENCE
        </text>
      </svg>
      <div className="signal-footer">
        <span>CHANNEL STATE INFORMATION</span>
        <span className="signal-bars">▁ ▃ ▆ ▄ █ ▂ ▅ ▃</span>
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <Layout
      title="Wi-Fi signals. Real-world insight."
      description="Meet Team 07 and explore MONAD-SEC, our research into Wi-Fi CSI occupancy and intrusion sensing at FIIT STU."
    >
      <main>
        <section className="hero-section shell">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" /> FIIT STU · TEAM PROJECT 2026/2027
            </div>
            <Heading as="h1" id="project">
              Invisible signals.
              <br />
              <em>Visible presence.</em>
            </Heading>
            <p>
              Exploring how everyday Wi-Fi can sense occupancy and movement.
            </p>
            <div className="hero-actions">
              <Link className="button button--primary" to="/docs/intro">
                Explore the project <span>↗</span>
              </Link>
              <a className="text-link" href="#team">
                Meet the team <span>↓</span>
              </a>
            </div>
          </div>
          <Signal />
        </section>
        <section className="shell section overview">
          <div>
            <div className="eyebrow">01 / THE PROJECT</div>
            <h2>
              A different way
              <br />
              to understand a space.
            </h2>
          </div>
          <div className="overview-content">
            <p>
              MONAD-SEC investigates real-time Wi-Fi Channel State Information
              (CSI) for occupancy and intrusion sensing on the faculty floor. We
              aim to connect network measurements, signal processing, and
              machine learning to detect presence and movement.
            </p>
            <Link className="inline-link" to="/docs/intro">
              Read the project overview ↗
            </Link>
          </div>
        </section>
        <section className="shell section team-section">
          <div className="section-heading">
            <div>
              <div className="eyebrow">02 / THE PEOPLE</div>
              <Heading as="h2" id="team">
                Our team.
              </Heading>
            </div>
          </div>
          <div className="owner-profile">
            <Member member={productOwner} featured />
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <Member key={member.name} member={member} />
            ))}
          </div>
        </section>
        <section className="shell section" id="resources">
          <div className="section-heading">
            <div>
              <div className="eyebrow">03 / RESOURCES</div>
              <h2>Project resources.</h2>
            </div>
            <Link className="inline-link" to="/docs/resources">
              All resources ↗
            </Link>
          </div>
          <ResourceList />
        </section>
      </main>
    </Layout>
  );
}
