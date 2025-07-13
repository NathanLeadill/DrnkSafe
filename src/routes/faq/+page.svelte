<script lang="ts">
  export let faqs = [
    {
      q: "When does it ship?",
      a: "All pre-orders will ship in November 2025. You'll receive tracking information once your order is dispatched."
    },
    {
      q: "Is it legal to test my own drink?",
      a: "Yes, it's completely legal to test your own drink in the UK, EU, and US. Local venue rules may still apply."
    },
    {
      q: "Does it work with cocktails?",
      a: "Yes, the DrinkSafe Clip works with all types of drinks including cocktails, beer, wine, and non-alcoholic beverages."
    },
    {
      q: "What's your refund policy?",
      a: "We offer a 30-day money-back guarantee from the date of delivery. If you're not satisfied, contact us for a full refund."
    },
    {
      q: "How does the DrinkSafe Clip work?",
      a: "The DrinkSafe Clip uses advanced chemical detection technology to identify common spiking agents like GHB and ketamine. Simply flip the clip into your drink, wait for the indicator to change color, and check it's safe to drink."
    },
    {
        q: "Can I use it with any type of drink?",
        a: "Yes, the DrinkSafe Clip is designed to work with all types of beverages, including cocktails, beer, wine, and non-alcoholic drinks. It detects harmful substances regardless of the drink type."
    },
    {
        q: "What about your other products like the key-chain and straw?",
        a: "We are currently developing additional products like a key-chain and straw that will also use our advanced detection technology. Stay tuned for updates!"

    }   
  ];

  let openIndex: number | null = null;
  function toggle(idx: number) {
    openIndex = openIndex === idx ? null : idx;
  }
</script>

<div class="faq-accordion">
  {#each faqs as faq, i}
    <div class="faq-item">
      <button
        class="faq-q"
        aria-expanded={openIndex === i}
        aria-controls={"faq-a-" + i}
        on:click={() => toggle(i)}
      >
        <span>{faq.q}</span>
        <svg width="22" height="22" viewBox="0 0 22 22" class="chevron" style="transform: rotate({openIndex === i ? 180 : 0}deg);">
          <polyline points="6 9 11 14 16 9" fill="none" stroke="#17C3B2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="faq-a" id={"faq-a-" + i} style="display: {openIndex === i ? 'block' : 'none'};">
        <p>{faq.a}</p>
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
@import "$styles/variables.scss";

.faq-accordion {
  display: flex;
  flex-direction: column;
  gap: $space-4;
  .faq-item {
    background: $white;
    border: 1.5px solid $neutral-200;
    border-radius: $radius-xl;
    overflow: hidden;
    transition: box-shadow 0.18s;
    box-shadow: 0 1px 6px rgba(17,33,49,0.04);
    .faq-q {
      width: 100%;
      padding: 1.1rem $space-6;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: $font-heading;
      font-size: 1.1rem;
      color: $charcoal-900;
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      &:hover {
        background: $neutral-50;
      }
      .chevron {
        transition: transform 0.18s cubic-bezier(.4,0,.2,1);
      }
    }
    .faq-a {
      padding: 0 $space-6 $space-4 $space-6;
      color: $neutral-800;
      font-size: 1rem;
      font-family: $font-body;
    }
  }
}
</style>
