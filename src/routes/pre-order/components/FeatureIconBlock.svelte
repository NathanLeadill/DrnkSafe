<script>
  export let icon; // slot or svg
  export let headline;
  export let desc;
</script>

<div class="feature-card">
  <div class="icon-block">{@html icon}</div>
  <h3 class="headline">{headline}</h3>
  <p class="desc">{desc}</p>
</div>

<style lang="scss">
@import "$styles/variables.scss";

.feature-card {
  background: $charcoal-900;
  border-radius: $radius-xl;
  box-shadow: $shadow-md;
  padding: $space-8;
  text-align: center;
  color: $white;
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon-block {
    margin-bottom: $space-4;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: $neutral-800;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      stroke: $teal-500;
      width: 32px;
      height: 32px;
    }
  }
  .headline {
    font-family: $font-heading;
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: $white;
  }
  .desc {
    color: $neutral-100;
    font-family: $font-body;
    font-size: 1rem;
  }
}
</style>
