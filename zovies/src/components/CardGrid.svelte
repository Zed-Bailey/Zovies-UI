<script lang="ts">
import Card ,{ Media } from '@smui/card';

import ImageList, {
        Item,
        ImageAspectContainer,
        Image,
        Supporting,
        Label,
    } from '@smui/image-list';
    import LayoutGrid, { Cell } from '@smui/layout-grid';
import MovieCard from './MovieCard.svelte';
</script>


<!-- <LayoutGrid >
    {#each Array(10) as _unused, _i}
    <Cell  span={2}> -->
        <!-- <div class="movie-cell"> -->
            <!-- <MovieCard movieID="{_i.toString()}" title="{"movie title: " + _i}"/> -->
        <!-- </div> -->

        <!-- </Cell>
    {/each}
</LayoutGrid> -->

<div class="flex-grid">
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
        justify-content: space-between;
        justify-content: start;
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

