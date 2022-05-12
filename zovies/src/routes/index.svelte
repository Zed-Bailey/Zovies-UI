<script lang="ts">
	
	import CardGrid from '../components/CardGrid.svelte';
</script>


<div class="movie-grid-center">
	
	<CardGrid/>
	
</div>





<style>
	.grayed {
		opacity: 0.6;
	}

	/* center movie grid in the middle of the screen */
	.movie-grid-center {
		display: flex;
		
		justify-content: center;
	}
</style>
