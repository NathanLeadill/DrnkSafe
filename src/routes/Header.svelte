<script lang="ts">

	let mobileOpen = false;
	const toggleMobile = () => (mobileOpen = !mobileOpen);

	// Navigation items
	const navItems = [
		{ label: 'How It Works', href: '/how-it-works' },
		{ label: 'Story', href: '/story' },
		{ label: 'FAQ', href: '/faq' },
		{ label: "Pre-order", href: '/pre-order' },
		{ label: 'Contact', href: '/contact' },
		{ label: "Kickstarter", href: 'https://www.kickstarter.com/projects/drnksafe/drinksafe-clip' },
		{label: "Blog", href: '/blog'}
	];

</script>

<header class="site-header">
	<div class="container">
		<div class="logo">DrnkSafe</div>
		<nav class="desktop-nav">
			{#each navItems as item}
				<a href={item.href}>{item.label}</a>
			{/each}
			<a href="#final-cta" class="btn btn--primary">Pre‑order</a>
		</nav>

		<button class="mobile-toggle" on:click={toggleMobile} aria-label="Toggle navigation">
			<i class="fa-solid fa-bars"></i>
		</button>
	</div>

	{#if mobileOpen}
		<nav class="mobile-nav">
			{#each navItems as item}
				<a href={item.href} on:click={() => (mobileOpen = false)}>{item.label}</a>
			{/each}
			<a href="#final-cta" class="btn btn--primary mt-2" on:click={() => (mobileOpen = false)}>Pre‑order</a>
		</nav>
	{/if}
</header>

<style lang="scss">
/* Utility classes */
.container {
	width: 100%;
	max-width: 72rem;
	margin-inline: auto;
	padding-inline: 1rem;
	display: flex;
}

/* Header */
.site-header {
	position: sticky;
	top: 0;
	background: #fff;
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
	z-index: 50;
	.mobile-toggle {
		display: none;
		background: none;
		border: none;
		font-size: 1.25rem;
		color: var(--color-base-600);
	}
	.logo {
		font-size: 1.5rem;
		font-weight: bold;
		color: var(--color-base-900);
		margin-right: auto;
		flex-grow: 1
	}
	.desktop-nav {
		display: flex;
		align-items: center;
		gap: 2rem;
		a {
			color: var(--color-base-600);
			&:hover {
				color: var(--color-base-900);
			}
		}
	}
	@media (max-width: 48rem) {
		.desktop-nav {
			display: none;
		}
		.mobile-toggle {
			display: inline-flex;
		}
	}
}
.mobile-nav {
	position: absolute;
	top: 4rem;
	right: 1rem;
	background: #fff;
	border: 1px solid var(--color-base-100);
	border-radius: 0.5rem;
	padding: 1rem;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
	width: 12rem;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	>a {
		padding: 0.5rem 0.75rem;
		border-radius: 0.375rem;
		color: var(--color-base-700);
		&:hover {
			background: var(--color-base-50);
		}
	}
}

</style>