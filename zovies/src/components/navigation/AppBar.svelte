<script lang="ts">
	import type { TopAppBarComponentDev } from '@smui/top-app-bar';
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	import { Icon } from '@smui/common';
	import { Svg } from '@smui/common/elements';
	import { mdiLightbulb, mdiLightbulbOutline } from '@mdi/js';



	export let topAppBar: TopAppBarComponentDev;
    export let open:boolean;
    

	let lightTheme = typeof window === 'undefined' || window.matchMedia('(prefers-color-scheme: light)').matches;
	
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
  
	

</script>

<style>
    /* Hide everything above this component. */
    :global(app),
    :global(body),
    :global(html) {
      display: block !important;
      height: auto !important;
      width: auto !important;
      position: static !important;
    }
  </style>


<TopAppBar bind:this={topAppBar} variant="short">
	<Row>
		<Section align="start" toolbar>
			<IconButton class="material-icons" on:click={() => (open = !open)}>menu</IconButton>
		</Section>

		<Section>
			<Title>Zovies</Title>
		</Section>
		
		
		<Section align="end" toolbar>
			<IconButton aria-label="Demo Site" href="" on:click={switchTheme}>
				<Icon component={Svg} viewBox="0 0 24 24">
					<path fill="currentColor" d={ lightTheme ? mdiLightbulbOutline : mdiLightbulb } />
				</Icon>
			</IconButton>
			
		</Section>
	</Row>
</TopAppBar>




  


