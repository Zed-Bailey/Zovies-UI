<script lang="ts">
	import Button, {Label} from '@smui/button';
	import type { TopAppBarComponentDev } from '@smui/top-app-bar';
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	import { Icon } from '@smui/common';
	import { Svg } from '@smui/common/elements';
	import { mdiGithub, mdiWeb, mdiLightbulb, mdiLightbulbOutline } from '@mdi/js';

	let topAppBar: TopAppBarComponentDev;

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

	import Drawer, {
	  AppContent,
	  Content,
	  Header,
	  Subtitle,
	  Scrim,
	} from '@smui/drawer';

	import List, { Item, Text, Graphic, Separator, Subheader } from '@smui/list';
	import { H6 } from '@smui/common/elements';
  
	let open = false;
	let active = 'Gray Kittens';
  
	function setActive(value: string) {
	  active = value;
	}
</script>

<TopAppBar bind:this={topAppBar} variant="standard">
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


<div class="drawer-container">
	<!-- Don't include fixed={false} if this is a page wide drawer.
		  It adds a style for absolute positioning. -->
	<Drawer variant="modal" fixed={false} bind:open>
	  <Header>
		<Title></Title>
		<Subtitle></Subtitle>
	  </Header>
	  <Content>
		<List>
		  <Item
			href="javascript:void(0)"
			on:click={() => setActive('Inbox')}
			activated={active === 'Inbox'}
		  >
			<Graphic class="material-icons" aria-hidden="true">home</Graphic>
			<Text>Home</Text>
		  </Item>
		  <Item
			href="javascript:void(0)"
			on:click={() => setActive('Star')}
			activated={active === 'Star'}
		  >
			<Graphic class="material-icons" aria-hidden="true">search</Graphic>
			<Text>Search</Text>
		  </Item>
		  <Item
			href="javascript:void(0)"
			on:click={() => setActive('Sent Mail')}
			activated={active === 'Sent Mail'}
		  >
			<Graphic class="material-icons" aria-hidden="true">download</Graphic>
			<Text>Download</Text>
		  </Item>
		  <Item
			href="javascript:void(0)"
			on:click={() => setActive('Drafts')}
			activated={active === 'Drafts'}
		  >
			<Graphic class="material-icons" aria-hidden="true">settings</Graphic>
			<Text>Settings</Text>
		  </Item>
  
		  <!-- <Separator />
		  <Subheader component={H6}>Labels</Subheader>
		  <Item
			href="javascript:void(0)"
			on:click={() => setActive('Family')}
			activated={active === 'Family'}
		  >
			<Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
			<Text>Family</Text>
		  </Item>
		  <Item
			href="javascript:void(0)"
			on:click={() => setActive('Friends')}
			activated={active === 'Friends'}
		  >
			<Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
			<Text>Friends</Text>
		  </Item>
		  <Item
			href="javascript:void(0)"
			on:click={() => setActive('Work')}
			activated={active === 'Work'}
		  >
			<Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
			<Text>Work</Text>
		  </Item> -->
		</List>
	  </Content>
	</Drawer>
  
	<!-- Don't include fixed={false} if this is a page wide drawer.
		  It adds a style for absolute positioning. -->
	<Scrim fixed={false} />
	<AppContent class="app-content">
	  <main class="main-content">
		  <AutoAdjust {topAppBar} style="display: flex; justify-content: space-between;">
			<div class="container">
				<slot />
			</div>
		</AutoAdjust>
	  </main>
	</AppContent>
  </div>
  
  <style>
	/* These classes are only needed because the
	  drawer is in a container on the page. */
	.drawer-container {
	  position: relative;
	  display: flex;
	  height: 100%;
	  max-width: 100%;
	  border: 1px solid
		var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
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
  