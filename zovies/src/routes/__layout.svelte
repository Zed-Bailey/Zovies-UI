<script lang="ts">
	import AppBar from '../components/navigation/AppBar.svelte';
	import type { TopAppBarComponentDev } from '@smui/top-app-bar';
	import { AutoAdjust } from '@smui/top-app-bar';
	import Drawer from '../components/navigation/Drawer.svelte';
	let topAppBar: TopAppBarComponentDev;
	let open = false;

	function toggleMenu() {
		open = !open;
	}
	
</script>

<AppBar {topAppBar} {open}/>

<AutoAdjust {topAppBar} >
	<Drawer open={open}> 
		<slot />
	</Drawer>
	
</AutoAdjust>