import { Asterisk } from 'lucide-react';

const MarqueeSection = () => {
    const capabilities = [
      "Brand strategy",
      "Visual identity",
      "Art direction",
      "Digital experiences",
      "Packaging",
      "Motion systems",
    ];
  return (
    <div>
      <section className="marquee-section text-white" aria-label="Brand design services">
        <div className="marquee-track">
          {capabilities.concat(capabilities).map((cap, i) => (
            <span className='text-white' key={`${cap}-${i}`}>
              {cap} <Asterisk stroke='#08178f' />
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MarqueeSection
