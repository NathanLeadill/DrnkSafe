<script>
  // No client-side JS for now
</script>

<svelte:head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;500;600;700;800;900&display=swap">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>
</svelte:head>


<main>
  <section class="hero-rd">
    <div class="hero-rd-overlay"></div>
    <div class="hero-rd-content">
        <div class="hero-rd-icon">
          <i class="fa-solid fa-flask"></i>
        </div>
        <h1>Research &amp; Development</h1>
        <p>Building the next line of covert safety tech</p>
    </div>
  </section>

  <section class="innovation-pipeline">
    <h2>Innovation Pipeline</h2>
    <div class="pipeline-timeline">
      <div class="pipeline-row">
        <div class="pipeline-card pipeline-card-alpha">
          <div class="pipeline-phase">Q2 2026</div>
          <h3>DrnkSafe Straw Alpha</h3>
          <p>Drink-through detection with fiber-optic sensing technology</p>
        </div>
        <div class="pipeline-card pipeline-card-beta">
          <div class="pipeline-phase">Q4 2026</div>
          <h3>Key-Chain Tester</h3>
          <p>Key-Chain attached tester, with an NFC chip you can get the results on your phone.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="spotlight straw-spotlight">
    <div class="spotlight-grid">
      <div class="spotlight-visual">
        <div class="spotlight-device">
          <i class="fa-solid fa-wine-glass"></i>
          <p>DrnkSafe Straw 3D Model</p>
          <div class="spotlight-badge">360° View</div>
        </div>
      </div>
      <div>
        <h2>DrnkSafe Straw: drink, detect, discard</h2>
        <p>Revolutionary straw design tests for GHB and ketamine via capillary flow detection. Results appear in under 10 seconds with zero taste interference. The sensor tip uses micro-porous membrane technology impregnated with colorimetric dyes.</p>
        <div class="feature-list">
          <div><i class="fa-solid fa-droplet"></i><span>Dishwasher-safe shell</span></div>
          <div><i class="fa-solid fa-leaf"></i><span>Biodegradable capsules</span></div>
          <div><i class="fa-solid fa-shield"></i><span>Patent pending #GB-452381</span></div>
        </div>
        <button class="btn-secondary">Join Beta Waitlist</button>
      </div>
    </div>
  </section>

  <section class="spotlight keychain-tester">
    <div class="spotlight-grid">
      <div class="spotlight-visual">
        <div class="spotlight-device">
          <i class="fa-solid fa-key"></i>
          <p>Keychain Tester Mockup</p>
          <div class="spotlight-badge">Prototype</div>
        </div>
      </div>
      <div>
        <h2>Pocket-Ready: The Keychain Tester</h2>
        <p>Designed for subtlety and speed, the DrnkSafe Keychain Tester is your stealth safety companion. Just slide open the bottom, dip into your drink, and get a visible result within 30 seconds—no phone, no fuss.</p>
        <div class="feature-list">
          <div><i class="fa-solid fa-arrows-alt-h"></i><span>Clamshell spring slide to reveal strip</span></div>
          <div><i class="fa-solid fa-recycle"></i><span>Built for resusability, with replacable test strips</span></div>
          <div><i class="fa-solid fa-wine-glass"></i><span>Compatible with alcoholic, mixed, or non-alcoholic drinks</span></div>
          <div><i class="fa-solid fa-shield"></i><span>Waterproof, airport-friendly</span></div>
        </div>
        <button class="btn-secondary">Notify Me When Available</button>
      </div>
    </div>
  </section>

  <section class="design-journey">
    <h2>From napkin sketch to nightclub staple</h2>
    <div class="design-journey-row">
      <div class="design-card">
        <div class="design-image"><i class="fa-solid fa-pencil"></i></div>
        <h3>Concept Sketch</h3>
        <p class="design-date">Jan 2025</p>
        <p class="design-desc">Cocktail-napkin doodle of Flip-Clip design born from late-night hospital visit</p>
      </div>
      <div class="design-card">
        <div class="design-image"><i class="fa-solid fa-microchip"></i></div>
        <h3>Alpha PCB</h3>
        <p class="design-date">May 2025</p>
        <p class="design-desc">First Test strips integrated into our 3D printed prototype </p>
      </div>
    </div>
  </section>

  <section class="methodology">
    <h2>Methodology &amp; Lab Standards</h2>
    <div class="method-list">
      <div class="method-card expanded">
        <button>
          <div><i class="fa-solid fa-microscope"></i><span>ISO 17025 Calibration</span></div>
          <i class="fa-solid fa-chevron-down"></i>
        </button>
        <div class="method-content">
          Every strip tested against certified reference solutions with documented traceability to national standards.
        </div>
      </div>
      <div class="method-card">
        <button>
          <div><i class="fa-solid fa-thermometer"></i><span>Environmental Stress Testing</span></div>
          <i class="fa-solid fa-chevron-down"></i>
        </button>
      </div>
      <div class="method-card">
        <button>
          <div><i class="fa-solid fa-users"></i><span>Consumer Focus Groups</span></div>
          <i class="fa-solid fa-chevron-down"></i>
        </button>
      </div>
      <div class="method-card">
        <button>
          <div><i class="fa-solid fa-shield-check"></i><span>Regulatory Pathway</span></div>
          <i class="fa-solid fa-chevron-down"></i>
        </button>
      </div>
    </div>
  </section>

  <section class="team">
    <h2>Meet the Founder</h2>
    <div class="team-row">
      <div class="team-card">
        <div class="team-avatar">
          <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=123" alt="Dr. Sarah Chen" />
          <div class="team-linkedin">
            <i class="fa-brands fa-linkedin"></i>
          </div>
        </div>
        <h3>Nathan Leadill</h3>
        <p class="team-role">Founder</p>
        <p class="team-bio">Ex-Software Engineer</p>
      </div>
    </div>
  </section>

  <section class="cta-beta">
    <div class="cta-beta-card">
      <h2>Want early access to DrnkSafe Straw?</h2>
      <p>Join our beta program for exclusive access to next-gen prototypes</p>
      <div class="cta-beta-btns">
        <button class="btn-secondary">Join Beta Program</button>
        <button class="btn-outline">Download Press Kit</button>
      </div>
      <p class="cta-beta-note">No spam. Chem jokes maybe.</p>
    </div>
  </section>
</main>

<footer class="footer">
  <div class="footer-main">
    <div class="footer-grid">
      <div>
        <div class="footer-title">DrnkSafe</div>
        <p>Building safer social experiences through innovative detection technology.</p>
      </div>
      <div>
        <h4>Product</h4>
        <div><div>How it Works</div><div>Tech Specs</div><div>Pre-order</div></div>
      </div>
      <div>
        <h4>Company</h4>
        <div><div>About</div><div>R&D</div><div>Careers</div></div>
      </div>
      <div>
        <h4>Support</h4>
        <div><div>FAQ</div><div>Contact</div><div>Warranty</div></div>
      </div>
    </div>
    <div class="footer-bottom">
      <div>© 2025 DrnkSafe. All rights reserved.</div>
      <div class="footer-links">
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
        <div>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  </div>
</footer>

<style lang="scss">
:root {
  --color-neutral-50: #f9fafb;
  --color-neutral-100: #f3f4f6;
  --color-neutral-200: #e5e7eb;
  --color-neutral-300: #d1d5db;
  --color-neutral-400: #9ca3af;
  --color-neutral-500: #6b7280;
  --color-neutral-600: #4b5563;
  --color-neutral-700: #374151;
  --color-neutral-800: #1f2937;
  --color-neutral-900: #111827;
  --color-primary: #3b82f6;
  --color-white: #fff;
}

body {
  font-family: 'Inter', sans-serif;
  background: var(--color-neutral-50);
  color: var(--color-neutral-900);
}

.header-wrap { max-width: 80rem; margin: 0 auto; padding: 0 1rem; }
.nav { display: flex; justify-content: space-between; align-items: center; height: 4rem; }
.nav-title { font-size: 1.25rem; color: var(--color-neutral-900); }
.nav-links { display: none; }
.nav-mobile { display: block; }
@media (min-width: 768px) {
  .nav-links { display: flex; gap: 2rem; color: var(--color-neutral-600); }
  .nav-mobile { display: none; }
}

.hero-rd {
  position: relative; height: 340px; background: linear-gradient(to bottom, var(--color-neutral-900), var(--color-neutral-800));
  display: flex; align-items: center; overflow: hidden;
}
.hero-rd-overlay {
  position: absolute; inset: 0; background: rgba(17,24,39,0.8); z-index: 1;
}
.hero-rd-content {
  position: relative; z-index: 2; width: 100%; display: flex; align-items: center; justify-content: center; height: 100%; flex-direction: column;
  .hero-rd-icon { margin-bottom: 1.5rem; opacity: 0.8; font-size: 2.5rem; color: #fff; text-align: center;}
  h1 { font-size: 2.5rem; margin-bottom: 1rem; color: #fff; }
  p { color: var(--color-neutral-300); font-size: 1.125rem; }
}

.innovation-pipeline {
  padding: 6rem 0 0 0;
  h2 { text-align: center; font-size: 2rem; color: var(--color-neutral-900); margin-bottom: 4rem; }
  .pipeline-timeline { position: relative; }
  .pipeline-row {
    display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; max-width: 48rem; margin: 0 auto;
    @media (max-width: 768px) { grid-template-columns: 1fr; }
  }
  .pipeline-card {
    position: relative; background: #fff; border-radius: 1.5rem; padding: 1.5rem; box-shadow: 0 4px 24px rgba(0,0,0,0.07);
    border: 2px solid var(--color-neutral-200);
    &.pipeline-card-alpha { border-color: var(--color-neutral-500);}
    &.pipeline-card-beta { border-color: var(--color-neutral-200);}
    .pipeline-phase {
      position: absolute; left: 50%; top: -1.25rem; transform: translateX(-50%);
      background: var(--color-neutral-500); color: #fff; padding: 0.25rem 0.75rem; border-radius: 999px; font-size: 0.9rem;
    }
    h3 { font-size: 1.25rem; color: var(--color-neutral-900); margin: 1.2rem 0 0.5rem 0; }
    p { color: var(--color-neutral-600); font-size: 0.95rem; }
  }
}

.spotlight {
  padding: 6rem 0; background: var(--color-neutral-50);
  &.straw-spotlight { background: var(--color-neutral-50);}
  &.keychain-tester { background: var(--color-white);}
  .spotlight-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; max-width: 80rem; margin: 0 auto; align-items: center;
    @media (max-width: 1024px) { grid-template-columns: 1fr; }
  }
  .spotlight-visual {
    background: #fff; border-radius: 2rem; padding: 2rem; height: 24rem; display: flex; align-items: center; justify-content: center; position: relative;
    .fa-solid { font-size: 4rem; margin-bottom: 1rem; color: var(--color-neutral-600);}
    p { color: var(--color-neutral-600);}
    .spotlight-badge {
      position: absolute; top: 1rem; right: 1rem; background: var(--color-neutral-500); color: #fff;
      padding: 0.2rem 0.8rem; border-radius: 8px; font-size: 0.82rem;
    }
  }
  h2 { font-size: 2rem; color: var(--color-neutral-900); margin-bottom: 1.5rem; }
  p { color: var(--color-neutral-700); margin-bottom: 2rem; }
  .feature-list { margin-bottom: 2rem;
    div { display: flex; align-items: center; gap: 0.75rem; color: var(--color-neutral-700); margin-bottom: 0.5rem;
      i { color: var(--color-neutral-500); }
    }
  }
  .btn-secondary {
    background: var(--color-neutral-500); color: #fff; padding: 0.8rem 2.2rem; border-radius: 0.7rem; font-size: 1.1rem; border: none; cursor: pointer; transition: background .2s;
    &:hover { background: var(--color-neutral-600); }
  }
}

.design-journey {
  padding: 6rem 0; background: var(--color-neutral-900);
  h2 { color: #fff; text-align: center; margin-bottom: 4rem; font-size: 2rem; }
  .design-journey-row {
    display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; max-width: 48rem; margin: 0 auto;
    @media (max-width: 768px) { grid-template-columns: 1fr; }
  }
  .design-card {
    background: var(--color-neutral-800); border-radius: 1.5rem; padding: 2rem;
    .design-image { background: var(--color-neutral-700); border-radius: 0.7rem; height: 10rem; margin-bottom: 1rem; display: flex; align-items: center; justify-content: center;
      i { color: #fff; font-size: 2rem; }
    }
    h3 { color: #fff; font-size: 1.25rem; margin-bottom: 0.5rem; }
    .design-date { color: var(--color-neutral-300); font-size: 0.9rem; margin-bottom: 0.5rem; }
    .design-desc { color: var(--color-neutral-400); font-size: 0.95rem; }
  }
}

.methodology {
  padding: 6rem 0;
  h2 { text-align: center; font-size: 2rem; color: var(--color-neutral-900); margin-bottom: 4rem; }
  .method-list { display: flex; flex-direction: column; gap: 1.5rem; }
  .method-card {
    border: 1px solid var(--color-neutral-200); border-radius: 1rem; background: #fff;
    button { width: 100%; background: none; border: none; padding: 1.5rem; text-align: left; display: flex; align-items: center; justify-content: space-between; font-size: 1.1rem; cursor: pointer; transition: background .2s;
      &:hover { background: var(--color-neutral-50); }
      div { display: flex; align-items: center; gap: 1rem;
        i { color: var(--color-neutral-600);}
        span { color: var(--color-neutral-900); font-size: 1.1rem;}
      }
      i.fa-chevron-down { color: var(--color-neutral-400); }
    }
    .method-content { padding: 0 1.5rem 1.5rem 1.5rem; color: var(--color-neutral-700); }
    &.expanded .method-content { display: block; }
    &:not(.expanded) .method-content { display: none; }
  }
}

.team {
  padding: 6rem 0; background: var(--color-neutral-50);
  h2 { text-align: center; font-size: 2rem; color: var(--color-neutral-900); margin-bottom: 4rem; }
  .team-row {
    display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2rem; max-width: 70rem; margin: 0 auto;
    @media (max-width: 900px) { grid-template-columns: 1fr; }
  }
  .team-card {
    background: #fff; border-radius: 1.5rem; padding: 2rem; text-align: center; transition: box-shadow .2s; position: relative;
    &:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.07);}
    .team-avatar { position: relative; margin-bottom: 1rem;
      img { width: 8rem; height: 8rem; border-radius: 999px; margin: 0 auto; border: 4px solid var(--color-neutral-500);}
      .team-linkedin { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.2s;
        i { color: var(--color-neutral-500); font-size: 1.7rem;}
      }
      &:hover .team-linkedin { opacity: 1; }
    }
    h3 { font-size: 1.25rem; color: var(--color-neutral-900); margin-bottom: 0.2rem; }
    .team-role { color: var(--color-neutral-600); font-size: 1rem; margin-bottom: 0.5rem; }
    .team-bio { color: var(--color-neutral-500); font-size: 0.9rem;}
  }
}

.cta-beta {
  padding: 6rem 0;
  .cta-beta-card { background: var(--color-neutral-900); border-radius: 2rem; padding: 3rem; text-align: center; max-width: 40rem; margin: 0 auto;
    h2 { color: #fff; font-size: 2rem; margin-bottom: 1rem;}
    p { color: var(--color-neutral-300); margin-bottom: 2rem;}
    .cta-beta-btns { display: flex; flex-direction: column; gap: 1rem; justify-content: center; align-items: center; margin-bottom: 2rem;
      @media (min-width: 640px) { flex-direction: row; }
      button { padding: 0.8rem 2.2rem; border-radius: 0.7rem; font-size: 1.1rem; border: none; cursor: pointer; }
      .btn-secondary { background: var(--color-neutral-500); color: #fff; transition: background .2s;
        &:hover { background: var(--color-neutral-600);}
      }
      .btn-outline { background: none; border: 1.5px solid var(--color-neutral-500); color: var(--color-neutral-500); transition: all .2s;
        &:hover { background: var(--color-neutral-500); color: #fff; }
      }
    }
    .cta-beta-note { color: var(--color-neutral-400); font-size: 0.92rem; }
  }
}

.footer {
  background: var(--color-neutral-900); color: #fff; padding: 3rem 1rem;
  .footer-main { max-width: 70rem; margin: 0 auto; }
  .footer-grid {
    display: grid; grid-template-columns: repeat(4,1fr); gap: 2rem; margin-bottom: 2rem;
    @media (max-width: 900px) { grid-template-columns: 1fr; }
    .footer-title { font-size: 1.5rem; margin-bottom: 1rem;}
    p { color: var(--color-neutral-400); font-size: 1rem;}
    h4 { color: #fff; margin-bottom: 1rem; }
    div > div { color: var(--color-neutral-400); font-size: 1rem; margin-bottom: 0.4rem; cursor: pointer; transition: color .2s;
      &:hover { color: #fff;}
    }
  }
  .footer-bottom {
    border-top: 1px solid var(--color-neutral-800); padding-top: 2rem; display: flex; flex-direction: column; align-items: center; gap: 1rem;
    @media (min-width: 768px) { flex-direction: row; justify-content: space-between;}
    color: var(--color-neutral-400); font-size: 1rem;
    .footer-links { display: flex; gap: 1.5rem; align-items: center;
      span { cursor: pointer; transition: color .2s; &:hover { color: #fff;}}
      i { color: var(--color-neutral-400); font-size: 1.3rem; transition: color .2s; cursor: pointer; margin-left: 0.7rem;
        &:hover { color: #fff;}
      }
    }
  }
}
</style>
