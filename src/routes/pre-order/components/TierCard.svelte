<script lang="ts">
  const { id, key, tier, desc, price } = $props();
</script>

<div class="tier-card">
  <!-- {#if popular}
    <div class="popular-badge">Most Popular</div>
  {/if} -->
  <h3>{tier}</h3>
  <p class="desc">{desc}</p>
  <div class="price">{price}</div>
<stripe-buy-button
  buy-button-id={id}
  publishable-key={key}
>
</stripe-buy-button>
  <div class="subtext">
    Secured by Stripe • Ships Oct 2025 • 30-day refund window
  </div>
</div>

<style lang="scss">
@import "$styles/variables.scss";

.tier-card {
  background: $white;
  border-radius: $radius-3xl;
  box-shadow: $shadow-md;
  border: 1.5px solid $neutral-200;
  padding: $space-8;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-family: $font-heading;
    font-size: 2rem;
    font-weight: 700;
    color: $charcoal-900;
    margin-bottom: 0.5rem;
  }
  .desc {
    color: $neutral-700;
    margin-bottom: 1.5rem;
    font-family: $font-body;
  }
  .price {
    font-size: 2rem;
    font-weight: 600;
    color: $charcoal-900;
    margin-bottom: 1.5rem;
  }
  .cta {
    width: 100%;
    height: 56px;
    background: $teal-500;
    color: $charcoal-900;
    border-radius: $radius-xl;
    font-family: $font-heading;
    font-weight: 600;
    font-size: 1.1rem;
    border: none;
    transition: background 0.2s;
    cursor: pointer;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover,
    &:focus {
      background: $teal-700;
      color: $white;
    }
    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
  .subtext {
    font-size: 0.85rem;
    color: $neutral-700;
    margin-top: 0.5rem;
  }
  &.popular {
    border: 2.5px solid $charcoal-900;
    .popular-badge {
      position: absolute;
      top: -1.25rem;
      left: 50%;
      transform: translateX(-50%);
      background: $charcoal-900;
      color: $white;
      font-family: $font-heading;
      font-size: 0.95rem;
      font-weight: 500;
      border-radius: 999px;
      padding: 0.25rem 1rem;
      box-shadow: $shadow-md;
      letter-spacing: 0.02em;
    }
  }
}
</style>
