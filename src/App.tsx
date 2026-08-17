import { useMemo, useState } from 'react';
import { ArrowDown, ArrowRight, Check, ChevronRight, Copy, Hammer, Menu, ShieldCheck, Sparkles, X } from 'lucide-react';

const capabilities = [
  { index: '01', title: 'Metal Art', text: 'Commissioned statement pieces, geometric work and sculptural metalwork made for a specific person or place.' },
  { index: '02', title: 'Architecture', text: 'Staircases, balustrades, screens and architectural features fabricated to approved drawings and exact site requirements.' },
  { index: '03', title: 'Security', text: 'Gates, barriers and boundary solutions that protect the property without sacrificing the architecture.' },
  { index: '04', title: 'Interiors', text: 'Wine racks, shelving, dividers and custom metal details designed to become part of the room.' },
  { index: '05', title: 'Furniture', text: 'Steel, timber and glass furniture built as bespoke commissions or refined into repeatable studio pieces.' },
  { index: '06', title: 'Fabrication', text: 'Frames, supports, prototypes, modifications and one-off fabrication challenges that need a skilled pair of hands.' },
];

const projects = [
  { category: 'ART', title: 'The Lion', note: 'Geometric steel wall sculpture', mark: 'L' },
  { category: 'ARCHITECTURE', title: 'Floating Line', note: 'Steel and timber staircase system', mark: 'A' },
  { category: 'SECURITY', title: 'Quiet Strength', note: 'Architectural sliding entrance gate', mark: 'S' },
  { category: 'INTERIORS', title: 'Cellar Grid', note: 'Wall-mounted wine display', mark: 'I' },
  { category: 'FURNITURE', title: 'Frame No. 01', note: 'Steel and glass table collection', mark: 'F' },
  { category: 'CUSTOM', title: 'Made Possible', note: 'One-off fabrication challenge', mark: '+' },
];

const process = ['Concept', 'Design', 'Fabrication', 'Finish', 'Installation'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [briefOpen, setBriefOpen] = useState(false);
  const [projectType, setProjectType] = useState('Metal Art');
  const [idea, setIdea] = useState('');
  const [location, setLocation] = useState('');
  const [contact, setContact] = useState('');
  const [error, setError] = useState('');
  const [prepared, setPrepared] = useState(false);
  const [copied, setCopied] = useState(false);

  const brief = useMemo(
    () => `SLEDGENDARY PROJECT BRIEF\nProject: ${projectType}\nIdea: ${idea.trim()}\nLocation: ${location.trim() || 'To be confirmed'}\nContact: ${contact.trim() || 'To be confirmed'}`,
    [projectType, idea, location, contact],
  );

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const prepareBrief = (event: React.FormEvent) => {
    event.preventDefault();
    if (idea.trim().length < 10) {
      setError('Tell us a little more about what you want to create.');
      setPrepared(false);
      return;
    }
    setError('');
    setPrepared(true);
  };

  const copyBrief = async () => {
    await navigator.clipboard.writeText(brief);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="site-shell">
      <header className="nav-shell">
        <button className="brand" onClick={() => goTo('top')} aria-label="Go to top">
          <span className="brand-mark"><Hammer size={22} strokeWidth={1.6} /></span>
          <span><strong>SLEDGENDARY</strong><small>METALWORK & FABRICATION STUDIO</small></span>
        </button>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <button onClick={() => goTo('work')}>Work</button>
          <button onClick={() => goTo('capabilities')}>Capabilities</button>
          <button onClick={() => goTo('process')}>Process</button>
          <button className="nav-cta" onClick={() => setBriefOpen(true)}>Start a Project <ArrowRight size={15} /></button>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          <button onClick={() => goTo('work')}>Work <ChevronRight /></button>
          <button onClick={() => goTo('capabilities')}>Capabilities <ChevronRight /></button>
          <button onClick={() => goTo('process')}>Process <ChevronRight /></button>
          <button className="mobile-project" onClick={() => { setBriefOpen(true); setMenuOpen(false); }}>Start a Project <ArrowRight /></button>
        </div>
      )}

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><span></span> BESPOKE METALWORK · WESTERN CAPE</div>
            <h1>YOU IMAGINE IT.<br/><em>WE BUILD IT</em><br/>IN STEEL.</h1>
            <p>Metal art, architectural metalwork, furniture, security and one-off fabrication — designed around the idea, the space and the standard it deserves.</p>
            <div className="hero-actions">
              <button className="primary-button" onClick={() => setBriefOpen(true)}>Start a Project <ArrowRight size={18} /></button>
              <button className="text-button" onClick={() => goTo('work')}>Explore the work <ArrowDown size={18} /></button>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="steel-frame frame-one"></div>
            <div className="steel-frame frame-two"></div>
            <div className="hero-sculpture">
              <span className="line line-a"></span><span className="line line-b"></span><span className="line line-c"></span><span className="line line-d"></span>
              <span className="sculpture-word">SLD</span>
            </div>
            <div className="material-card"><small>MATERIAL</small><strong>STEEL</strong><span>Made to endure.</span></div>
          </div>
          <div className="hero-index">01 — STUDIO</div>
        </section>

        <div className="ticker" aria-label="Services"><div>METAL ART <span>✦</span> ARCHITECTURAL FABRICATION <span>✦</span> BESPOKE FURNITURE <span>✦</span> SECURITY <span>✦</span> CUSTOM FABRICATION <span>✦</span> BUILT TO ENDURE <span>✦</span></div></div>

        <section className="statement">
          <div className="section-number">02</div>
          <div>
            <div className="eyebrow dark"><span></span> THE STUDIO</div>
            <h2>Not a catalogue.<br/>A capability.</h2>
            <p>Bring a sketch, an inspiration image, an architect&apos;s drawing, a difficult space or simply an idea. Sledgendary works out how to make it real — then fabricates it with the discipline of a craftsman and the eye of an artist.</p>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-heading">
            <div><div className="eyebrow"><span></span> SELECTED WORK</div><h2>Built to be<br/><em>remembered.</em></h2></div>
            <p>Portfolio direction for the studio. Real project photography will replace these art-directed placeholders as the archive is curated.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, i) => (
              <article className={`project-card project-${i + 1}`} key={project.title}>
                <div className="project-art"><span>{project.mark}</span><i></i><b></b></div>
                <div className="project-meta"><small>{project.category}</small><h3>{project.title}</h3><p>{project.note}</p></div>
                <button aria-label={`View ${project.title}`}><ArrowRight /></button>
              </article>
            ))}
          </div>
        </section>

        <section className="capabilities" id="capabilities">
          <div className="cap-intro">
            <div className="eyebrow dark"><span></span> WHAT WE MAKE</div>
            <h2>One studio.<br/>Six disciplines.</h2>
            <p>The common thread is not the product. It is the ability to turn a custom requirement into something precise, durable and worth owning.</p>
          </div>
          <div className="cap-list">
            {capabilities.map((item) => (
              <article key={item.title}>
                <span>{item.index}</span><h3>{item.title}</h3><p>{item.text}</p><ArrowRight size={20} />
              </article>
            ))}
          </div>
        </section>

        <section className="proof-band">
          <div><Sparkles /><strong>ARTIST-LED</strong><span>Detail is part of the product.</span></div>
          <div><ShieldCheck /><strong>BUILT FOR PLACE</strong><span>Material and finish selected for the environment.</span></div>
          <div><Hammer /><strong>MASTER FABRICATION</strong><span>Craftsmanship at the centre of every project.</span></div>
        </section>

        <section className="process-section" id="process">
          <div className="process-copy">
            <div className="eyebrow"><span></span> FROM IDEA TO INSTALL</div>
            <h2>Made properly,<br/>from the beginning.</h2>
            <p>Every project follows a visible path, so the design, cost, finish and installation are clear before steel starts moving through the workshop.</p>
            <button className="primary-button light" onClick={() => setBriefOpen(true)}>Bring us the idea <ArrowRight /></button>
          </div>
          <div className="process-list">{process.map((step, index) => <div key={step}><span>0{index + 1}</span><strong>{step}</strong>{index < process.length - 1 && <i></i>}</div>)}</div>
        </section>

        <section className="final-cta">
          <small>THE NEXT PIECE STARTS HERE</small>
          <h2>What do you want<br/>to make possible?</h2>
          <button onClick={() => setBriefOpen(true)}>START A PROJECT <ArrowRight /></button>
        </section>
      </main>

      <footer>
        <div className="brand footer-brand"><span className="brand-mark"><Hammer size={22} /></span><span><strong>SLEDGENDARY</strong><small>METALWORK & FABRICATION STUDIO</small></span></div>
        <p>Bespoke metalwork · Western Cape, South Africa</p>
        <span>© 2026 Sledgendary Studio</span>
      </footer>

      {briefOpen && (
        <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setBriefOpen(false); }}>
          <section className="brief-modal" role="dialog" aria-modal="true" aria-labelledby="brief-title">
            <button className="modal-close" onClick={() => setBriefOpen(false)} aria-label="Close project brief"><X /></button>
            <div className="eyebrow dark"><span></span> START A PROJECT</div>
            <h2 id="brief-title">Bring us the idea.</h2>
            {!prepared ? (
              <form onSubmit={prepareBrief}>
                <label>What are we making?<select value={projectType} onChange={(event) => setProjectType(event.target.value)}>{capabilities.map((item) => <option key={item.title}>{item.title}</option>)}</select></label>
                <label>Describe the idea *<textarea value={idea} onChange={(event) => setIdea(event.target.value)} placeholder="A gate inspired by a protea, a floating steel staircase, a custom wine wall..." rows={4}></textarea></label>
                <div className="field-row"><label>Project location<input value={location} onChange={(event) => setLocation(event.target.value)} placeholder="Cape Town / Stellenbosch / ..." /></label><label>Best contact<input value={contact} onChange={(event) => setContact(event.target.value)} placeholder="Phone or email" /></label></div>
                {error && <div className="form-error">{error}</div>}
                <button className="primary-button form-submit" type="submit">Prepare project brief <ArrowRight /></button>
                <small className="form-note">No quote is created yet. This prepares a clean brief you can copy and share with the studio.</small>
              </form>
            ) : (
              <div className="brief-ready">
                <div className="success-icon"><Check /></div><h3>Your project brief is ready.</h3><pre>{brief}</pre>
                <div className="brief-actions"><button className="primary-button" onClick={copyBrief}>{copied ? <><Check /> Copied</> : <><Copy /> Copy brief</>}</button><button className="secondary-button" onClick={() => setPrepared(false)}>Edit details</button></div>
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
