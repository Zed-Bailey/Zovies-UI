<script lang="ts">
	import Button, { Label, Icon } from '@smui/button';
	import Card, {Media} from '@smui/card';

	import '@videojs/themes/dist/city/index.css';
	import MovieCard from '../components/MovieCard.svelte';
	import CardGrid from '../components/CardGrid.svelte';
	
	let clicked = 0;

	function handleClick(event: CustomEvent | MouseEvent) {
		event = event as MouseEvent;
		if (event.button === 0) {
			clicked++;
		}
	}

	function reset() {
		clicked = 0;
	}
</script>

<Button on:mousedown={handleClick}>
	<Icon class="material-icons">thumb_up</Icon>
	<Label>Click Me</Label>
</Button>
<p class="mdc-typography--body1">
	{#if clicked}
		You've clicked the button {clicked} time{clicked === 1 ? '' : 's'}. You can
		<a on:click={reset} href="#">reset it</a>.
	{:else}
		<span class="grayed">You haven't clicked the button.</span>
	{/if}
</p>


<CardGrid/>

<!-- <video id="movie-player" class="video-js vjs-deafult-skin" controls preload="auto" width="640" height="264">
	<source src="./example.mp4" type="video/mp4" />
</video> -->




<style>
	.grayed {
		opacity: 0.6;
	}

	* :global(.card-media-square) {
    	background-image: url(https://place-hold.it/320x320?text=square&fontsize=23);
  	}
</style>
