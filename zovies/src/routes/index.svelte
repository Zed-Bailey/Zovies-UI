<script lang="ts">
	
	import { ApiBase } from '../persistent/api';
	import CardGrid from '../components/CardGrid.svelte';

	const movies = (async () =>  {
		const response = await fetch(ApiBase + "/movie")
		const json = await response.json()
		console.log(json);
		return json;
	})()
</script>


<div class="movie-grid-center">
	
	{#await movies}
		<p>Waiting.......</p>
	{:then data} 
		<CardGrid {data}/>	
	{:catch error}
		<p>An error occurred! {error}</p>
	{/await}
	
	
</div>





<style>

	/* center movie grid in the middle of the screen */
	.movie-grid-center {
		display: flex;
		
		justify-content: center;
	}
</style>
