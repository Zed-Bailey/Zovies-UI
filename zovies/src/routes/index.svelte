<script lang="ts">
	import '@videojs/themes/dist/city/index.css';
	import CardGrid from '../components/CardGrid.svelte';
</script>


<div class="movie-grid-center">
	
	<CardGrid/>
	
</div>


<!-- <video id="movie-player" class="video-js vjs-deafult-skin" controls preload="auto" width="640" height="264">
	<source src="./example.mp4" type="video/mp4" />
</video> -->




<style>
	.grayed {
		opacity: 0.6;
	}

	/* center movie grid in the middle of the screen */
	.movie-grid-center {
		display: flex;
		height: 100vh;
		justify-content: center;
	}
</style>
