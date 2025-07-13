<script lang=ts>
	import FaqAccordion from "./components/FAQAccordion.svelte";
	import FeatureIconBlock from "./components/FeatureIconBlock.svelte";
	import TierCard from "./components/TierCard.svelte";

  let packagesSection: HTMLElement;

  function scrollToPackages() {
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }



  // Feature data
  const features = [
    {
      icon: `<svg fill="none" stroke-width="2.5" viewBox="0 0 48 48"><circle cx="24" cy="24" r="21" stroke="#17C3B2"/><path stroke="#17C3B2" d="M24 10v14l8 8"/></svg>`,
      headline: "30s Detection",
      desc: "Fast & accurate drug test"
    },
    {
      icon: `<svg fill="none" stroke-width="2.5" viewBox="0 0 48 48"><rect x="10" y="18" width="28" height="12" rx="6" stroke="#17C3B2"/><path stroke="#17C3B2" d="M16 24v-7a4 4 0 0 1 4-4h8"/></svg>`,
      headline: "Flip-Clip Hinge",
      desc: "Clips to your glass like magic"
    },
    {
      icon: `<svg fill="none" stroke-width="2.5" viewBox="0 0 48 48"><rect x="12" y="12" width="24" height="24" rx="8" stroke="#17C3B2"/><path stroke="#17C3B2" d="M24 18v12"/></svg>`,
      headline: "Disposable",
      desc: "Single-use for hygiene"
    },
    {
      icon: `<svg fill="none" stroke-width="2.5" viewBox="0 0 48 48"><ellipse cx="24" cy="24" rx="14" ry="8" stroke="#17C3B2"/><path stroke="#17C3B2" d="M16 28l-2 2"/><path stroke="#17C3B2" d="M32 28l2 2"/></svg>`,
      headline: "Discreet",
      desc: "No app, no flashing lights, no weird looks"
    },
  ];

  // Packages (Tiers)
  const tiers = [
    {
      tier: "Solo",
      desc: "1 DrinkSafe Clip",
      price: "£49",
      popular: false,
      id: "buy_btn_1RkY0WIOQniArCcPavHjYaN8",
      key: "pk_live_51RkT8fIOQniArCcPvk44LCaBitFp5STvj1QEA6v0vds4Q1MhCM6EJWlckdI6JBxMQZoemrzUJRYQ3itXrMcQiei800HD5GypMA"
    },
    {
      tier: "Trio",
      desc: "3 Clips",
      price: "£129",
      popular: true,
      id: "buy_btn_1RkXz2IOQniArCcPduG1tKOg",
      key: "pk_live_51RkT8fIOQniArCcPvk44LCaBitFp5STvj1QEA6v0vds4Q1MhCM6EJWlckdI6JBxMQZoemrzUJRYQ3itXrMcQiei800HD5GypMA"
    },
    {
      tier: "Keychain",
      desc: "Our Innovative in-development keychain",
      price: "£79",
      popular: false,
      key: "pk_live_51RkT8fIOQniArCcPvk44LCaBitFp5STvj1QEA6v0vds4Q1MhCM6EJWlckdI6JBxMQZoemrzUJRYQ3itXrMcQiei800HD5GypMA",
      id: "buy_btn_1RkXw6IOQniArCcPlNYdW6Fe"
    }
  ];
</script>

<!-- Sticky Nav -->
<!-- Use your global header component here, or inline nav if not present -->

<main>
  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-content">
      <div class="hero-img">
        <img src="/images/drinksafe-clip-bar.png" alt="DrinkSafe Clip on bar surface" width="480" height="320" />
      </div>
      <div class="hero-info">
        <div class="badge">Limited batch 001</div>
        <h1>Pre-Order the DrinkSafe Clip</h1>
        <p>Your personal drink safety device — now available for pre-order. Ships November 2025.</p>
        <button class="scroll-cta" on:click={scrollToPackages}>Protect your night — Pre-order now</button>
      </div>
    </div>
  </section>

  <!-- Feature Highlights -->
  <section class="features">
    <div class="feature-grid">
      {#each features as f}
        <FeatureIconBlock {...f} />
      {/each}
    </div>
  </section>

  <!-- Package Selector -->
  <section bind:this={packagesSection} id="packages" class="packages">
    <h2>Our Products</h2>
    <div class="tiers">
      {#each tiers as t}
        <TierCard {...t} />
      {/each}
    </div>
  </section>
  <iframe width="380" height="38" style="border:0;" src="https://climate.stripe.com/badge/oMPa08?theme=light&size=small&locale=en-GB"></iframe>

  <!-- FAQ Accordion -->
  <section class="faq">
    <h2>Frequently Asked Questions</h2>
    <FaqAccordion />
    <div class="faq-link">
      <a href="/faq" aria-label="View full FAQ page">View full FAQ page</a>
    </div>
  </section>
</main>

<!-- Footer here or via global import -->

<style lang="scss">
@import "$styles/variables.scss";

// Layout container max width
main {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 4vw;
}

// Hero
.hero {
  padding: 3rem 0 $space-6 0;
  .hero-content {
    display: flex;
    flex-direction: column-reverse;
    gap: $space-8;
    @media (min-width: 900px) {
      flex-direction: row;
      align-items: center;
    }
    .hero-img {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        max-width: 100%;
        border-radius: $radius-xl;
        box-shadow: $shadow-lg;
        object-fit: cover;
        width: 320px;
      }
    }
    .hero-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .badge {
        background: $charcoal-900;
        color: $teal-500;
        font-family: $font-heading;
        font-size: 0.95rem;
        font-weight: 600;
        border-radius: 999px;
        padding: 0.4rem 1rem;
        margin-bottom: 1rem;
        letter-spacing: 0.03em;
      }
      h1 {
        font-family: $font-heading;
        font-size: 2.4rem;
        color: $charcoal-900;
        margin-bottom: 1.5rem;
        font-weight: 800;
      }
      p {
        color: $neutral-800;
        font-family: $font-body;
        font-size: 1.1rem;
        margin-bottom: 2rem;
      }
      .scroll-cta {
        background: $teal-500;
        color: $charcoal-900;
        border-radius: $radius-xl;
        padding: 1.25rem 2.25rem;
        font-family: $font-heading;
        font-size: 1.12rem;
        font-weight: 600;
        border: none;
        cursor: pointer;
        transition: background 0.18s;
        box-shadow: $shadow-md;
        &:hover,
        &:focus {
          background: $teal-700;
          color: $white;
        }
      }
    }
  }
}

// Features grid
.features {
  padding: 3rem 0;
  .feature-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $space-8;
    @media (min-width: 600px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 900px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
}

// Package Selector
.packages {
  padding: 3rem 0;
  h2 {
    text-align: center;
    font-family: $font-heading;
    font-size: 2rem;
    margin-bottom: 2.5rem;
    color: $charcoal-900;
    font-weight: 700;
  }
  .tiers {
    display: grid;
    gap: $space-8;
    grid-template-columns: 1fr;
    @media (min-width: 700px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

// FAQ
.faq {
  padding: 3rem 0;
  h2 {
    text-align: center;
    font-family: $font-heading;
    font-size: 2rem;
    color: $charcoal-900;
    margin-bottom: 2.5rem;
    font-weight: 700;
  }
  .faq-link {
    text-align: center;
    margin-top: 2rem;
    a {
      color: $teal-500;
      text-decoration: underline;
      font-family: $font-body;
      font-weight: 500;
      font-size: 1rem;
      &:hover,
      &:focus {
        color: $charcoal-900;
      }
    }
  }
}
</style>
