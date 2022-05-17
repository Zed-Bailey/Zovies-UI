<script lang="ts">
	import Drawer, { AppContent, Content, Header, Subtitle, Title } from '@smui/drawer';
	import List, { Graphic, Item, Text } from '@smui/list';

	import Separator from '@smui/list/src/Separator.svelte';
	import { ApiBase } from '../persistent/api';

	let clicked = 'Home';

	let lightTheme =
		typeof window === 'undefined' || window.matchMedia('(prefers-color-scheme: light)').matches;

	function switchTheme() {
		lightTheme = !lightTheme;
		let themeLink = document.head.querySelector<HTMLLinkElement>('#theme');
		if (!themeLink) {
			themeLink = document.createElement('link');
			themeLink.rel = 'stylesheet';
			themeLink.id = 'theme';
		}
		themeLink.href = `/smui${lightTheme ? '' : '-dark'}.css`;
		document.head
			.querySelector<HTMLLinkElement>('link[href$="/smui-dark.css"]')
			?.insertAdjacentElement('afterend', themeLink);
	}

	function chooseForMe() {
		fetch(ApiBase + "/movie/random")
			.then(async response => {
				const json = await response.json();
				window.location.href = "/watch/?id=" + json;
			});
		
	}
</script>

<div class="drawer-container">
	<Drawer>
		<Header>
			<Title>Zovies</Title>
			<Subtitle>Zeds Movie Service</Subtitle>
		</Header>
		<Content>
			<List>
				<Item
					href="/"
					on:click={() => (clicked = 'Home')}
					activated={clicked === 'Home'}
				>
					<Graphic class="material-icons" aria-hidden="true">home</Graphic>
					<Text>Home</Text>
				</Item>
				<Item href="/search" on:click={() => (clicked = 'Search')} activated={clicked === 'Search'}>
					<Graphic class="material-icons" aria-hidden="true">search</Graphic>
					<Text>Search</Text>
				</Item>
				
				<Item
					href="/download"
					on:click={() => (clicked = 'Download')}
					activated={clicked === 'Download'}
				>
					<Graphic class="material-icons" aria-hidden="true">download</Graphic>
					<Text>Download</Text>
				</Item>
				<Item disabled></Item>
				<Separator />

				<Item on:click={chooseForMe}>
					<Graphic>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path d="M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z"/>
						</svg>
					</Graphic>
					<Text>Choose for me!</Text>
				</Item>

				<Item on:click={switchTheme}>
					<Graphic class="material-icons" aria-hidden="true">lightbulb</Graphic>
					<Text>{lightTheme ? 'Toggle Dark theme' : 'Toggle Light Theme'}</Text>
				</Item>
			</List>
		</Content>
	</Drawer>

	<AppContent class="app-content">
		<main class="main-content">
			<slot />
		</main>
	</AppContent>
</div>

<style>
	/* These classes are only needed because the
	  drawer is in a container on the page. */
	.drawer-container {
		position: relative;
		display: flex;
		height: calc(100vh - 3px);
		max-width: 100%;
		border: 1px solid var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
		overflow: hidden;
		z-index: 0;
	}

	* :global(.app-content) {
		flex: auto;
		overflow: auto;
		position: relative;
		flex-grow: 1;
	}

	.main-content {
		overflow: auto;
		padding: 16px;
		height: 100%;
		box-sizing: border-box;
	}
</style>
