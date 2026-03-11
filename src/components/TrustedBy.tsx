const CLIENTS = [
  { name: "Gabriel India Limited", abbr: "GIL" },
  { name: "Tata International Limited", abbr: "TIL" },
  { name: "TCS", abbr: "TCS" },
  { name: "Force Motors", abbr: "FM" },
  { name: "MG Polypack", abbr: "MGP" },
];

// Stable keys for consistent server/client render
const MARQUEE_ITEMS = [
  ...CLIENTS.map((c, i) => ({ ...c, uid: `a-${i}` })),
  ...CLIENTS.map((c, i) => ({ ...c, uid: `b-${i}` })),
  ...CLIENTS.map((c, i) => ({ ...c, uid: `c-${i}` })),
];

export function TrustedBy() {
  return (
    <section id="trusted-by" className="tb-section">
      <div className="tb-glow" />
      <div className="tb-fade-left" />
      <div className="tb-fade-right" />

      <div className="tb-header">
        <div className="tb-line" />
        <span className="tb-label">Trusted By</span>
        <div className="tb-line right" />
      </div>

      <div className="tb-track-wrap">
        <div className="tb-track">
          {MARQUEE_ITEMS.map((client) => (
            <div className="tb-item" key={client.uid}>
              <div className="tb-abbr">{client.abbr}</div>
              <span className="tb-name">{client.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="tb-footer">
        <div className="tb-dot" />
        <span className="tb-footer-text">
          <span className="tb-footer-highlight">
            India&apos;s leading brands
          </span>{" "}
          trust Adhira Solar for clean energy solutions
        </span>
        <div className="tb-dot" />
      </div>
    </section>
  );
}
