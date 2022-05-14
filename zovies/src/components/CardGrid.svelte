<script lang="ts">
    import MovieCard from './MovieCard.svelte';
    import LayoutGrid from '@smui/layout-grid';
import Cell from '@smui/layout-grid/src/Cell.svelte';

    export let data: [];
</script>


<div class="flex-grid" >
    {#each data as _movie, _i}
    <div class="col">
        <MovieCard movieID="{_movie['movieId']}" title="{_movie['name']}" coverImageUrl={_movie['cover']}/>
    </div>
    {/each}
</div>

<!-- <LayoutGrid>
    {#each data as _movie, _i}
    <Cell >
        <div class="gridCell">
            <MovieCard movieID="{_movie['movieId']}" title="{_movie['name']}" coverImageUrl={_movie['cover']}/>
        </div>
        
    </Cell>
    {/each}

</LayoutGrid> -->

<style>






    .flex-grid {
        display: flex;
        width: 100%;
        justify-content: flex-start;

        flex-wrap: wrap;
        /* display: flex;
        
        flex-direction: row;
        /* justify-content: flex-start; */
        /* adjust to center grid */
        /* width: 80%; */
        /* height: 100%; */
    }

    .col {
        min-width: 300px;
        height: 450px;
        margin: 20px;
        /* justify-content: start; */
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

