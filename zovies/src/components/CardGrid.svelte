<script lang="ts">
    import MovieCard from './MovieCard.svelte';
</script>


<div class="flex-grid" >
    {#each Array(10) as _unused, _i}
    <div class="col">
        <MovieCard movieID="{_i.toString()}" title="{"movie title: " + _i}"/>
    </div>
    {/each}
</div>


<style>
    .flex-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        /* adjust to center grid */
        /* width: 80%; */
        height: 100%;
    }

    .col {
        min-width: 300px;
        height: 450px;
        margin: 20px;
        justify-content: start;
    }
    
    @media (max-width: 499px) {
        .flex-grid {
            display: block;
        }
        .col {
            margin-bottom: 20px;
        }
    }
</style>

