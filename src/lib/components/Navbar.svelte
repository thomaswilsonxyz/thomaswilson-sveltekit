<nav>
	<div class="left">
		<a href="/" class="home">Thomas Wilson</a>
	</div>

	<div class="right">
		<a href="/blog" class="blog">Blog</a>
	</div>
</nav>

<style>
	nav {
		display: flex;
		flex-flow: row;
		max-width: 100vw;
		overflow: hidden;
		min-height: var(--navbar-height);
	}

	.left {
		flex: 1;
		flex-grow: 0;
		text-align: left;
		padding: var(--spacing-base);
	}

	.home {
		color: var(--brand-orange);
		text-decoration: none;
		font-weight: 300;
		display: flex;
		width: fit-content;
		white-space: nowrap;
		transition: 0.3s;
	}

	.home:hover {
		transform: rotate(11deg);
	}

	.right {
		display: flex;
		flex: 1;
		text-align: right;
		align-items: center;
		justify-content: flex-end;
		padding: var(--spacing-base);
	}

	.blog {
		font-size: 1.4rem;
		padding: 0;
		color: var(--gray-1000);
	}
	.blog:visited {
		color: var(--gray-1000);
	}
</style>
