<script lang="ts">
	interface FaqItem {
		q: string;
		a: string;
	}

	const faqs: FaqItem[] = [
		{
			q: 'Is DrnkSafe legal to use in bars?',
			a: 'Yes. DrnkSafe is a consumer‑grade testing device and is legal in hospitality venues worldwide.'
		},
		{
			q: 'How accurate is the testing?',
			a: 'Independent lab tests confirm a 99.8% accuracy rate across 12+ substances.'
		},
		{
			q: 'What drugs can it detect?',
			a: 'It currently identifies the most common drink‑spiking agents including GHB, ketamine, and benzodiazepines like rohypnol and diazepam.'
		},
		{
			q: 'Why is the pre‑order price so high?',
			a: 'Early adopters are helping underwrite R&D and certification; the final retail price is expected to land at £15–£19.'
		}
	];

	let openFaq = 4; // The last FAQ is pre‑opened like the original markup
</script>

<svelte:head>
	<!-- Fonts & icons -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com"  />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;500;600;700;900&display=swap" rel="stylesheet" />
	<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/js/all.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</svelte:head>



<main>
	<section id="hero" class="hero-section section">
		<div class="container grid-two">
			<div class="hero-copy">
				<h1>Test your drink before it tests you</h1>
				<p class="lead">Detect spiking drugs in under 15&nbsp;seconds with our pocket‑sized tester. Medical‑grade accuracy you can trust.</p>
				<a href="#final-cta" class="btn btn--primary btn--lg mb-2">Pre‑order DrnkSafe</a>
				<p class="meta">Ships Q4&nbsp;2025 • 30‑day money‑back guarantee</p>
			</div>
			<div class="hero-media">
				<div class="placeholder">Product on bar counter mock‑up</div>
			</div>
		</div>
	</section>

	<section id="problem" class="problem-section section alt-bg">
		<div class="container text-center">
			<div class="stat">1&nbsp;in&nbsp;9</div>
			<p class="lead">College students report having their drink spiked without consent</p>
			<p class="meta">Don’t become a statistic. Take control of your safety with DrnkSafe.</p>
		</div>
	</section>

	<section id="how-it-works" class="how-section section">
		<div class="container">
			<h2 class="section-title text-center">How DrnkSafe Works</h2>
			<div class="three-cols">
				<div class="step text-center">
					<div class="step-icon">1</div>
					<h3>Dip</h3>
					<p>Insert the test strip into your drink for 3&nbsp;seconds</p>
				</div>
				<div class="step text-center">
					<div class="step-icon">2</div>
					<h3>Wait</h3>
					<p>Results appear in under 15&nbsp;seconds on the digital display</p>
				</div>
				<div class="step text-center">
					<div class="step-icon">3</div>
					<h3>Decide</h3>
					<p>Clear results help you make informed decisions about your safety</p>
				</div>
			</div>
		</div>
	</section>

	<section id="benefits" class="benefits-section section alt-bg">
		<div class="container">
			<h2 class="section-title text-center">Why Choose DrnkSafe</h2>
			<div class="four-cols">
				<div class="benefit text-center">
					<i class="fa-solid fa-bolt"></i>
					<h3>Lightning Fast</h3>
					<p>Results in under 15&nbsp;seconds</p>
				</div>
				<div class="benefit text-center">
					<i class="fa-solid fa-bullseye"></i>
					<h3>99.8% Accurate</h3>
					<p>Medical‑grade precision you can trust</p>
				</div>
				<div class="benefit text-center">
					<i class="fa-solid fa-mobile-alt"></i>
					<h3>Pocket‑Sized</h3>
					<p>Fits discreetly in your pocket or purse</p>
				</div>
				<div class="benefit text-center">
					<i class="fa-solid fa-shield-alt"></i>
					<h3>Peace of Mind</h3>
					<p>Confidence in every sip</p>
				</div>
			</div>
		</div>
	</section>

	<section id="use-cases" class="use-section section">
		<div class="container">
			<h2 class="section-title text-center">Perfect For Any Setting</h2>
			<div class="three-cols">
				<div class="use text-center">
					<i class="fa-solid fa-glass-martini"></i>
					<h3>Bars & Clubs</h3>
					<p>Stay safe during nights out with friends</p>
				</div>
				<div class="use text-center">
					<i class="fa-solid fa-music"></i>
					<h3>Festivals</h3>
					<p>Essential protection at music festivals and events</p>
				</div>
				<div class="use text-center">
					<i class="fa-solid fa-graduation-cap"></i>
					<h3>Campus Life</h3>
					<p>Must‑have safety tool for college parties</p>
				</div>
			</div>
		</div>
	</section>

	<section id="specs" class="specs-section section alt-bg">
		<div class="container narrow text-center">
			<h2 class="section-title">Technical Specifications</h2>
			<div class="two-cols specs-list">
				<ul>
					<li><i class="fa-solid fa-check"></i> Detects 12+ common spiking drugs</li>
					<li><i class="fa-solid fa-check"></i> 99.8% accuracy rate</li>
					<li><i class="fa-solid fa-check"></i> 15‑second test time</li>
					<li><i class="fa-solid fa-check"></i> 50+ tests per device</li>
				</ul>
				<ul>
					<li><i class="fa-solid fa-check"></i> Pocket‑sized: 3″ × 1″ × 0.5″</li>
					<li><i class="fa-solid fa-check"></i> Waterproof design</li>
					<li><i class="fa-solid fa-check"></i> 6‑month battery life</li>
					<li><i class="fa-solid fa-check"></i> FDA‑approved components</li>
				</ul>
			</div>
			<a href="#" class="download-link">Download full technical datasheet (PDF)</a>
		</div>
	</section>

	<section id="technology" class="tech-section section">
		<div class="container grid-two">
			<div class="tech-media">
				<div class="placeholder h‑large">Device technology diagram</div>
			</div>
			<div>
				<h3 class="h3 mb-4">Laboratory‑Grade Precision</h3>
				<div class="tech-points">
					<div class="point">
						<i class="fa-solid fa-microscope"></i>
						<div>
							<h4>Biosensor Technology</h4>
							<p>Advanced electrochemical sensors detect molecular signatures</p>
						</div>
					</div>
					<div class="point">
						<i class="fa-solid fa-cpu"></i>
						<div>
							<h4>AI‑Powered Analysis</h4>
							<p>Machine learning algorithms ensure accurate results</p>
						</div>
					</div>
					<div class="point">
						<i class="fa-solid fa-database"></i>
						<div>
							<h4>Continuous Updates</h4>
							<p>Database expands to detect new substances</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="faq" class="faq-section section alt-bg">
		<div class="container narrow">
			<h2 class="section-title text-center">Frequently Asked Questions</h2>

			{#each faqs as item, i}
				<article class="faq-item {i === openFaq ? 'open' : ''}">
					<button class="faq-question" on:click={() => (openFaq = openFaq === i ? -1 : i)}>
						<span>{item.q}</span>
						<i class="fa-solid fa-chevron-down"></i>
					</button>
					{#if openFaq === i}
						<div class="faq-answer">
							<p>{item.a}</p>
						</div>
					{/if}
				</article>
			{/each}
		</div>
	</section>

	<section id="final-cta" class="cta-section section">
		<div class="container narrow text-center">
			<h2 class="section-title">Ready to Take Control of Your Safety?</h2>
			<p class="lead">Join thousands who trust DrnkSafe for their peace of mind</p>

			<div class="cta-actions">
				<a href="#" class="btn btn--primary btn--lg">Pre‑order Now – £49</a>
				<input type="email" placeholder="Enter your email for updates" />
			</div>

			<div class="partners">
				<div class="partner-logo">Logo 1</div>
				<div class="partner-logo">Logo 2</div>
				<div class="partner-logo">Logo 3</div>
			</div>
		</div>
	</section>
</main>

<footer class="site-footer">
	<div class="container grid-four">
		<div>
			<h3>DrnkSafe</h3>
			<p class="meta">Keeping you safe, one test at a time.</p>
		</div>
		<div>
			<h4>Legal</h4>
			<ul>
				<li><a href="#">Privacy Policy</a></li>
				<li><a href="#">Terms of Service</a></li>
				<li><a href="#">Refund Policy</a></li>
			</ul>
		</div>
		<div>
			<h4>Support</h4>
			<ul>
				<li><a href="#">Contact Us</a></li>
				<li><a href="#">FAQ</a></li>
				<li><a href="#">User Manual</a></li>
			</ul>
		</div>
		<div>
			<h4>Stay Updated</h4>
			<form class="subscribe">
				<input type="email" placeholder="Email" />
				<button type="submit">Subscribe</button>
			</form>
			<div class="socials">
				<a href="#"><i class="fa-brands fa-twitter"></i></a>
				<a href="#"><i class="fa-brands fa-instagram"></i></a>
				<a href="#"><i class="fa-brands fa-linkedin"></i></a>
			</div>
		</div>
	</div>

	<div class="footer-meta">© 2025 DrnkSafe. All rights reserved.</div>
</footer>

<!-- ---------------------- STYLES ---------------------- -->
<style lang="scss">
/*
  SCSS variables & global resets
*/
:global(*) {
	box-sizing: border-box;
}

:global(html, body) {
	margin: 0;
	font-family: 'Inter', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: var(--color-base-content);
	scroll-behavior: smooth;
}

:global(:root) {
	// Base colours (kept as CSS vars for easy theming)
	--color-base: #ffffff;
	--color-base-50: #f9fafb;
	--color-base-100: #f3f4f6;
	--color-base-200: #e5e7eb;
	--color-base-300: #d1d5db;
	--color-base-400: #9ca3af;
	--color-base-500: #6b7280;
	--color-base-600: #4b5563;
	--color-base-700: #374151;
	--color-base-800: #1f2937;
	--color-base-900: #111827;
	--color-base-content: #1f2937;

	// Primary (DrnkSafe brand) colour
	--color-primary: #3b82f6;
	--color-primary-focus: #2563eb;
}

main {
	background-color: white;
}

/* Utility classes */
.container {
	width: 100%;
	max-width: 72rem;
	margin-inline: auto;
	padding-inline: 1rem;
}

.text-center {
	text-align: center;
}

/* Buttons */
.btn {
	display: inline-flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	padding: 0.5rem 1.5rem;
	border-radius: 0.5rem;
	font-weight: 600;
	text-decoration: none;
	transition: background 0.2s;
	&:hover {
		text-decoration: none;
	}
	&--primary {
		background: var(--color-base-900);
		color: #fff;
		&:hover {
			background: var(--color-base-800);
		}
	}
	&--lg {
		padding: 1rem 2rem;
		font-size: 1.125rem;
	}
}

/* Grids */
.grid-two {
	display: grid;
	gap: 3rem;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
.three-cols {
	display: grid;
	gap: 2rem;
	grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}
.four-cols {
	display: grid;
	gap: 2rem;
	grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}
.two-cols {
	display: grid;
	gap: 2rem;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

/* Sections */
.section {
	padding-block: 6rem 4rem;
}
.alt-bg {
	background: var(--color-base-50);
}

.section-title {
	font-size: 2rem;
	margin-bottom: 3rem;
	font-weight: 700;
	color: var(--color-base-900);
}

.lead {
	font-size: 1.25rem;
	color: var(--color-base-500);
}
.meta {
	font-size: 0.875rem;
	color: var(--color-base-400);
}

/* Hero */
.hero-section {
	min-height: 600px;
	.hero-copy {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.hero-media {
		.placeholder {
			background: var(--color-base-300);
			height: 20rem;
			border-radius: 0.75rem;
			color: #fff;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			padding: 1rem;
		}
	}
}

/* Problem stat */
.stat {
	font-size: 5rem;
	font-weight: 700;
	color: var(--color-base-900);
}

/* Steps */
.step {
	.step-icon {
		background: var(--color-base-900);
		color: #fff;
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-inline: auto;
		margin-bottom: 1rem;
		font-weight: 600;
	}
}

/* Specs */
.specs-list {
	ul {
		list-style: none;
		padding: 0;
		li {
			display: flex;
			align-items: center;
			gap: 0.75rem;
			margin-bottom: 0.75rem;
			color: var(--color-base-600);
			i {
				color: var(--color-base-900);
			}
		}
	}
}

.download-link {
	display: inline-block;
	margin-top: 2rem;
	text-decoration: underline;
	color: var(--color-base-900);
	cursor: pointer;
	&:hover {
		opacity: 0.8;
	}
}

/* FAQ */
.faq-item {
	border: 1px solid var(--color-base-200);
	border-radius: 0.5rem;
	margin-bottom: 1rem;
	&.open {
		.faq-question {
			color: var(--color-base-900);
		}
	}
	.faq-question {
		width: 100%;
		background: none;
		border: none;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.5rem;
		font-size: 1rem;
		color: var(--color-base-600);
		cursor: pointer;
	}
	.faq-answer {
		padding: 0 1.5rem 1.5rem;
		p {
			margin: 0;
			color: var(--color-base-600);
		}
	}
}

/* CTA */
.cta-actions {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	justify-content: center;
	input {
		border: 1px solid var(--color-base-300);
		padding: 1rem 1.25rem;
		border-radius: 0.5rem;
		font-size: 1rem;
	}
	@media (min-width: 40rem) {
		flex-direction: row;
		input {
			flex: 1;
		}
	}
}
.partners {
	display: flex;
	justify-content: center;
	gap: 2rem;
	margin-top: 2rem;
	opacity: 0.6;
	.partner-logo {
		background: var(--color-base-300);
		width: 5rem;
		height: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 0.25rem;
		font-size: 0.75rem;
		color: #fff;
	}
}

/* Footer */
.site-footer {
	background: var(--color-base-900);
	color: #fff;
	padding-block: 4rem 2rem;
	.grid-four {
		display: grid;
		gap: 2rem;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		ul {
			list-style: none;
			padding: 0;
			li {
				margin-bottom: 0.5rem;
				>a {
					color: var(--color-base-400);
					text-decoration: none;
					&:hover {
						color: #fff;
					}
				}
			}
		}
		.subscribe {
			display: flex;
			input {
				flex: 1;
				padding: 0.5rem 0.75rem;
				border: none;
				border-radius: 0.5rem 0 0 0.5rem;
				background: var(--color-base-800);
				color: #fff;
			}
			button {
				padding: 0.5rem 1rem;
				border: none;
				border-radius: 0 0.5rem 0.5rem 0;
				background: #fff;
				color: var(--color-base-900);
				cursor: pointer;
			}
		}
		.socials {
			display: flex;
			gap: 1rem;
			margin-top: 0.75rem;
			a {
				color: var(--color-base-400);
				font-size: 1.25rem;
				&:hover {
					color: #fff;
				}
			}
		}
	}
	.footer-meta {
		margin-top: 3rem;
		text-align: center;
		font-size: 0.875rem;
		color: var(--color-base-400);
	}
}

/* Placeholder utility for grey boxes */
.placeholder {
	background: var(--color-base-300);
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
}
.h-large {
	height: 16rem;
	border-radius: 0.75rem;
}

/* Responsive helpers */
.narrow {
	max-width: 50rem;
}

/* For dev convenience — remove if using a CSS reset */
img, svg {
	max-width: 100%;
	display: block;
}
</style>
