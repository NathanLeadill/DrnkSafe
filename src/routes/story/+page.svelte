<script lang="ts">
  import { onMount } from "svelte";
  let observed = [false, false, false, false];

  // Scroll-trigger for fade-in narrative
  onMount(() => {
    if (typeof window === "undefined") return;
    const els = document.querySelectorAll(".story-scroll-fade");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      els.forEach(el => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // entry.target.classList.remove("story-scroll-fade");
            const target = entry.target as HTMLElement
            target.style.opacity = "1";
            
          }
        });
      },
      { threshold: 0.2 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });
</script>

<svelte:head>
  <title>Why I Built SipSafe</title>
  <meta name="description" content="The true story behind SipSafe: raw, personal, and powerful.">
  <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Poppins:wght@500;700&display=swap" rel="stylesheet">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>
</svelte:head>

<!-- 01: Hero Title + Quote -->
<section class="story-hero">
  <div class="story-hero-bg"></div>
  <div class="story-hero-overlay"></div>
  <div class="story-hero-content">
    <h1>
      It was 2:17 a.m. on a drizzly Friday when my phone lit up.
    </h1>
    <div class="story-hero-sub">THE TRUE STORY THAT SPARKED Sipsafe</div>
    <div class="story-hero-scroll-cue">
      <span>Read the story</span>
      <i class="fa-solid fa-chevron-down"></i>
    </div>
  </div>
</section>

<!-- 02: Personal Story (narrative scroll) -->
<section class="story-section story-narrative">
  <div class="story-content">
    <div class="story-scroll-fade" style="transition-delay:0ms">
      <div class="story-timestamp">2:17 a.m.</div>
      <p>
        The caller ID said ‘Amy ❤️,’ but the voice on the other end didn’t sound like my girlfriend. It was slurred, shaky — and scared. She was at some club in Camden, couldn’t remember how she got there, and her friends had left without her.
      </p>
    </div>
    <div class="story-scroll-fade" style="transition-delay:100ms">
      <div class="story-timestamp">3:08 a.m.</div>
      <p>
        By the time I reached the club she could barely stand. The bouncer helped me get her to the car, shaking his head like he’d seen this before. Amy kept saying she’d only had two drinks — a gin and tonic, then a vodka soda. She’d been careful. She always was.
      </p>
    </div>
    <div class="story-scroll-fade" style="transition-delay:200ms">
      <div class="story-timestamp">4:42 a.m.</div>
      <p>
        A&amp;E. A urine-test strip. A nurse with no expression: “Positive for GHB.” Three letters that changed everything. Amy wasn’t drunk —  <span class="pull-quote">she’d been used as target practice by a coward with chemistry homework.</span>
      </p>
    </div>
    <div class="story-scroll-fade" style="transition-delay:300ms">
      <div class="story-timestamp">7:15 a.m.</div>
      <p>
        Seeing her half-conscious on that plastic hospital bed flipped a switch in me that’s stayed stuck ever since. This wasn’t just statistics or news stories anymore. This was Amy. This was real. And this wasn’t going to happen again.
      </p>
    </div>
  </div>
</section>

<!-- 03: Turning Point Section -->
<section class="story-section turning-point">
  <div class="turning-point-inner">
    <h2>This wasn’t going to happen again — not to her, not to anyone.</h2>
    <div class="turning-point-cols">
      <div class="turning-sketch">
        <div class="turning-sketch-img" aria-label="Sketch of original SipSafe stir-strip concept">
          <i class="fa-solid fa-pencil"></i>
        </div>
        <div class="turning-sketch-caption">Sketch from that night</div>
      </div>
      <div class="turning-point-bullets">
        <ul>
          <li>Reagent strips &amp; colorimetric chemistry</li>
          <li>Known drug solubility in common mixers</li>
          <li>Portable testing device patents</li>
          <li>UK safety legislation requirements</li>
          <li>DIY casing ideas from the hardware store</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- 04: From Pain to Prototype Timeline -->
<section class="story-section prototype-timeline">
  <div class="timeline-inner">
    <h2>From Pain to Prototype</h2>
    <div class="timeline-band">
      <div class="timeline-node">
        <div class="timeline-label">Week 1</div>
        <div class="timeline-icon"><i class="fa-solid fa-pencil"></i></div>
        <div class="timeline-title">Whiteboard Sketch</div>
        <div class="timeline-desc">First diagram of a stir stick with embedded test strip</div>
      </div>
      <div class="timeline-node">
        <div class="timeline-label">Month 2</div>
        <div class="timeline-icon"><i class="fa-solid fa-vial"></i></div>
        <div class="timeline-title">First Working Strip</div>
        <div class="timeline-desc">Tested on soda with known compounds</div>
      </div>
      <div class="timeline-node">
        <div class="timeline-label">Month 6</div>
        <div class="timeline-icon"><i class="fa-solid fa-cube"></i></div>
        <div class="timeline-title">Flip-Clip Model</div>
        <div class="timeline-desc">3D printed hinge mechanism (failed 47 times)</div>
      </div>
      <div class="timeline-node">
        <div class="timeline-label">Q4 2025</div>
        <div class="timeline-icon"><i class="fa-solid fa-shield-check"></i></div>
        <div class="timeline-title">SipSafe V1.2</div>
        <div class="timeline-desc">In bars, festivals, and beta programs</div>
      </div>
    </div>
    <div class="timeline-quote">
      Every design decision came from one question: <span>Would Amy feel safe using this?</span>
    </div>
  </div>
</section>

<!-- 05: Mission Forward -->
<section class="story-section mission-forward">
  <div class="mission-forward-inner">
    <h2>We’re not just building devices. We’re building deterrents.</h2>
    <p>
      SipSafe now protects people at festivals, bars, campuses and beyond. But we’re still asking questions, running tests, and staying mad enough to keep going. Spiking isn't a product problem — it's a culture problem. This is just our contribution.
    </p>
  </div>
</section>

<!-- 06: Call to Action -->
<section class="story-section story-cta">
  <div class="story-cta-card">
    <h2>Tell us your story. Or help us stop the next one.</h2>
    <p>Every story we hear helps us build better protection for everyone</p>
    <div class="story-cta-btns">
      <button class="cta-btn-main">Share My Story</button>
      <button class="cta-btn-outline">Join the Movement</button>
    </div>
    <div class="story-cta-socials">
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-linkedin"></i>
      <i class="fa-brands fa-instagram"></i>
    </div>
    <div class="story-cta-fineprint">
      We read every story. Some become inspiration. All help us build better.
    </div>
  </div>
</section>

<!-- 07: Footer (inherit from main site) -->
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
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Poppins:wght@500;700&display=swap');

:root {
  --color-teal-500: #22d3ee;
  --color-charcoal-900: #0d1b2a;
  --color-charcoal-800: #1b263b;
  --color-charcoal-700: #24344d;
  --color-neutral-50: #f9fafb;
  --color-neutral-900: #111827;
  --radius-3xl: 24px;
}

body {
  font-family: 'Inter', sans-serif;
  background: var(--color-neutral-50);
  color: var(--color-neutral-900);
  margin: 0;
}

.story-navbar {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .story-nav-title {
    font-size: 1.5rem;
    color: var(--color-neutral-900);
    letter-spacing: -0.03em;
    font-weight: 600;
  }
  .story-nav-links { color: #3b4558; font-size: 1rem; }
  .story-nav-mobile { display: none; }
  @media (max-width: 700px) {
    .story-nav-links { display: none; }
    .story-nav-mobile { display: block; color: #3b4558; }
  }
}

/* 01. Hero */
.story-hero {
  min-height: 80vh;
  position: relative;
  display: flex; align-items: center; justify-content: center;
  .story-hero-bg {
    /* Substitute your city-rain night BG here */
    background: url('/images/city-night-blur-rain.png'), #0d1b2a;
    background-size: cover; background-position: center;
    filter: blur(5px) brightness(0.8);
    position: absolute; inset: 0; z-index: 1;
  }
  .story-hero-overlay {
    position: absolute; inset: 0; background: rgba(13,27,42,0.55); z-index: 2;
  }
  .story-hero-content {
    position: relative; z-index: 3; max-width: 780px; width: 100%; text-align: center; color: #fff;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    h1 {
      font-family: 'Merriweather', Georgia, serif;
      font-size: 3rem; /* 48px */
      font-weight: 700;
      line-height: 1.13;
      margin-bottom: 1.7rem;
      @media (max-width: 700px) { font-size: 2rem; }
    }
    .story-hero-sub {
      font-family: 'Poppins', Arial, sans-serif;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.13em;
      color: #bcd2ea;
      margin-bottom: 2.5rem;
    }
    .story-hero-scroll-cue {
      margin-top: 2.5rem;
      color: #aacbe0;
      font-size: 1.1rem;
      letter-spacing: 0.09em;
      opacity: 0.85;
      display: flex;
      flex-direction: column;
      align-items: center;
      span { margin-bottom: 0.2em; }
      i {
        font-size: 1.7em;
        animation: hero-bounce 1.8s infinite;
      }
      @media (prefers-reduced-motion: reduce) { i { animation: none; } }
    }
  }
}

@keyframes hero-bounce {
  0%, 100% { transform: translateY(0);}
  50% { transform: translateY(18px);}
}

/* 02. Story Narrative */
.story-section.story-narrative {
  background: var(--color-neutral-50);
  padding: 64px 0 60px 0;
}
.story-content {
  max-width: 780px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 68px;
  font-family: 'Merriweather', Georgia, serif;
  font-size: 1.18rem;
  line-height: 1.8;
  letter-spacing: -0.01em;
}


.story-scroll-fade {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s cubic-bezier(0.77,0,0.18,1), transform 0.3s cubic-bezier(0.77,0,0.18,1);
  &.is-visible { opacity: 1; transform: none;}
}

.story-content.story-scroll-fade.is-visible {
  opacity: 1;
background-color: #0b1623;
}
.story-timestamp {
  font-family: 'Poppins', Arial, sans-serif;
  font-size: 1.4rem;
  color: var(--color-charcoal-700);
  font-weight: 600;
  margin-bottom: 0.8em;
  letter-spacing: 0.04em;
}
.pull-quote {
  display: block;
  margin: 2rem 0 0.5rem 0;
  padding-left: 1.3rem;
  font-family: 'Poppins', Arial, sans-serif;
  font-size: 1.45rem;
  font-weight: 600;
  color: var(--color-charcoal-900);
  border-left: 4px solid var(--color-teal-500);
  line-height: 1.35;
  background: none;
  max-width: 540px;
  text-align: left;
}

/* 03. Turning Point Section */
.turning-point {
  background: #0b1623;
  color: #fff;
  padding: 72px 0;
}
.turning-point-inner {
  max-width: 780px;
  margin: 0 auto;
}
.turning-point-inner > h2 {
  font-family: 'Poppins', Arial, sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3.5rem;
  letter-spacing: -0.02em;
}
.turning-point-cols {
  display: flex;
  gap: 3rem;
  align-items: center;
  @media (max-width: 900px) { flex-direction: column; }
}
.turning-sketch {
  min-width: 220px; flex: 1 1 220px; display: flex; flex-direction: column; align-items: center;
}
.turning-sketch-img {
  width: 190px; height: 190px; background: #19233d; border-radius: 20px;
  display: flex; align-items: center; justify-content: center;
  font-size: 4.2rem; color: #79e4ed;
  margin-bottom: 1rem;
}
.turning-sketch-caption {
  font-size: 1rem; color: #b3b9c7; text-align: center;
}
.turning-point-bullets {
  flex: 2 1 320px;
  ul { padding-left: 0; margin: 0; list-style: none; display: flex; flex-direction: column; gap: 1.2em;}
  li {
    font-size: 1.1rem; color: #eaf2ff; position: relative; padding-left: 2.2rem;
    &:before {
      content: '';
      display: block;
      position: absolute; left: 0.3rem; top: 0.7em;
      width: 1.1rem; height: 0.33rem;
      border-radius: 2px;
      background: var(--color-teal-500);
    }
  }
}

/* 04. Timeline */
.prototype-timeline {
  background: var(--color-neutral-50);
  padding: 68px 0 54px 0;
}
.timeline-inner {
  max-width: 960px;
  margin: 0 auto;
}
.timeline-inner > h2 {
  font-family: 'Poppins', Arial, sans-serif;
  font-size: 2.1rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2.5rem;
  color: var(--color-charcoal-900);
}
.timeline-band {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 1.8rem;
  position: relative;
  @media (max-width: 900px) { grid-template-columns: 1fr; gap: 2.8rem; }
}
.timeline-node {
  background: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 4px 18px rgba(20,30,70,0.06);
  padding: 2rem 1.2rem 1.5rem 1.2rem;
  border: 2px solid #f2f4fa;
  display: flex; flex-direction: column; align-items: center;
  position: relative;
  min-height: 320px;
  .timeline-label {
    position: absolute;
    top: -1.4rem;
    left: 50%; transform: translateX(-50%);
    background: #4b5c77;
    color: #fff;
    padding: 0.28em 1.25em;
    border-radius: 1em;
    font-size: 1rem;
    font-family: 'Poppins', Arial, sans-serif;
    font-weight: 600;
    letter-spacing: 0.04em;
    z-index: 2;
    width: 35%;
  }
  .timeline-icon {
    width: 76px; height: 76px;
    background: #eef4fa;
    border-radius: 13px;
    margin: 2.3rem 0 1.4rem 0;
    display: flex; align-items: center; justify-content: center;
    font-size: 2.6rem; color: #7bd9e5;
  }
  .timeline-title {
    font-family: 'Poppins', Arial, sans-serif;
    font-size: 1.18rem;
    font-weight: 600;
    color: var(--color-charcoal-900);
    margin-bottom: 0.4em;
    text-align: center;
  }
  .timeline-desc {
    color: #526176;
    font-size: 1.01rem;
    text-align: center;
    margin-top: 0.5em;
  }
}
.timeline-node:last-child { border-color: var(--color-teal-500);}
.timeline-quote {
  text-align: center;
  margin: 2.6rem auto 0 auto;
  color: #596174;
  font-style: italic;
  font-size: 1.17rem;
  span { color: var(--color-charcoal-900); font-weight: 600;}
}

/* 05. Mission Forward */
.mission-forward {
  background: var(--color-neutral-50);
  padding: 68px 0 54px 0;
  .mission-forward-inner {
    max-width: 720px; margin: 0 auto; text-align: center;
    h2 {
      font-family: 'Poppins', Arial, sans-serif;
      font-size: 2rem;
      font-weight: 700;
      color: var(--color-charcoal-900);
      margin-bottom: 1.5rem;
    }
    p {
      font-family: 'Merriweather', Georgia, serif;
      font-size: 1.17rem;
      line-height: 1.8;
      color: #324155;
      margin: 0 auto; max-width: 700px;
    }
  }
}

/* 06. Call to Action */
.story-cta {
  background: #112131;
  padding: 74px 0 74px 0;
}
.story-cta-card {
  max-width: 540px;
  margin: 0 auto;
  background: var(--color-charcoal-900);
  border-radius: var(--radius-3xl);
  padding: 3rem 2rem 2.5rem 2rem;
  text-align: center;
  h2 {
    color: #fff;
    font-size: 2rem;
    font-family: 'Poppins', Arial, sans-serif;
    margin-bottom: 1.1rem;
    font-weight: 700;
  }
  p {
    color: #b3b9c7;
    font-size: 1.1rem;
    margin-bottom: 2.1rem;
  }
  .story-cta-btns {
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
    align-items: center;
    margin-bottom: 2.2rem;
    @media (min-width: 540px) { flex-direction: row; justify-content: center;}
    button {
      padding: 0.85rem 2.5rem;
      border-radius: 0.7rem;
      font-size: 1.1rem;
      font-family: 'Poppins', Arial, sans-serif;
      font-weight: 500;
      border: none;
      cursor: pointer;
      transition: background 0.2s, color 0.2s;
      outline: none;
      &:focus { outline: 2px solid var(--color-teal-500);}
    }
    .cta-btn-main {
      background: var(--color-neutral-500);
      color: #fff;
      &:hover { background: var(--color-teal-500);}
    }
    .cta-btn-outline {
      background: none;
      border: 1.5px solid var(--color-neutral-500);
      color: var(--color-neutral-400);
      &:hover { background: var(--color-neutral-500); color: #fff;}
    }
  }
  .story-cta-socials {
    display: flex; gap: 2.1rem; justify-content: center; margin-bottom: 1.6rem;
    i {
      font-size: 1.45rem;
      color: var(--color-teal-500);
      border: 1.5px solid var(--color-teal-500);
      border-radius: 999px;
      padding: 0.35em 0.47em;
      transition: background 0.14s, color 0.14s;
      cursor: pointer;
      &:hover {
        background: var(--color-teal-500);
        color: #122235;
      }
    }
  }
  .story-cta-fineprint {
    color: #7a8aaa;
    font-size: 0.92rem;
    margin-top: 1.2rem;
  }
}

/* Footer (reuse your main site style, keep high contrast) */
.footer {
  background: var(--color-charcoal-900);
  color: #fff;
  padding: 3rem 1rem;
  .footer-main { max-width: 1100px; margin: 0 auto; }
  .footer-grid {
    display: grid; grid-template-columns: repeat(4,1fr); gap: 2rem; margin-bottom: 2rem;
    @media (max-width: 900px) { grid-template-columns: 1fr; }
    .footer-title { font-size: 1.5rem; margin-bottom: 1rem;}
    p { color: #b3b9c7; font-size: 1rem;}
    h4 { color: #fff; margin-bottom: 1rem; }
    div > div { color: #b3b9c7; font-size: 1rem; margin-bottom: 0.4rem; cursor: pointer; transition: color .2s;
      &:hover { color: #fff;}
    }
  }
  .footer-bottom {
    border-top: 1px solid var(--color-charcoal-800); padding-top: 2rem; display: flex; flex-direction: column; align-items: center; gap: 1rem;
    @media (min-width: 768px) { flex-direction: row; justify-content: space-between;}
    color: #b3b9c7; font-size: 1rem;
    .footer-links { display: flex; gap: 1.5rem; align-items: center;
      span { cursor: pointer; transition: color .2s; &:hover { color: #fff;}}
      i { color: #b3b9c7; font-size: 1.3rem; transition: color .2s; cursor: pointer; margin-left: 0.7rem;
        &:hover { color: #fff;}
      }
    }
  }
}

@media (max-width: 600px) {
  .story-content { font-size: 1rem; }
  .turning-point-cols { flex-direction: column; gap: 2.2rem;}
  .timeline-band { grid-template-columns: 1fr; gap: 2rem;}
}
</style>
