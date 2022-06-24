<script lang="ts">
    import CardGrid from "../components/CardGrid.svelte";
    import Select, {Option} from '@smui/select';
    import Textfield from '@smui/textfield';
    import { ApiBase } from "../persistent/api";
    import IconButton, { Icon } from '@smui/icon-button';
    import Fab from "@smui/fab/dist/Fab.svelte";

    let generes = ['action', 'adventure', 'comedy', 'drama', 'fantasy', 'horror', 'mystery', 'romance', 'thriller'];
    let chosenGenre = ''; 
    

    let ratings = ['0', '1', '2', '3', '4', '5', '6', '7', '8',  '9'];
    let chosenRating = '';

    let searchTerm = '';

    let filtered: any = [];
    let searchClicked = false;

    async function searchFor() {
        searchClicked = true;
        filtered = [];
        let query = '/movie/filter?';
        if(chosenGenre != undefined && chosenGenre != '') query += 'genre=' + chosenGenre + '&';
        if(chosenRating != undefined && chosenRating != '') query += 'rating=' + chosenRating + '&';
        if(searchTerm != undefined && searchTerm != '') query += 'search='+searchTerm;
        // all filter params were empty
        if (query === '/filter?') {
            searchClicked = false;
            return;
        }
        console.log(query);
        filtered = await fetch(ApiBase + query).then(async res => await res.json());
        console.log(filtered);
    }

</script>

<div style="display: flex; align-items:center;">
    <div class="col">
        <Textfield bind:value={searchTerm} label="Movie name"></Textfield>
    </div>
    <div class="col">
        <Select bind:value={chosenGenre} label="Genre">
          <Option value="" />
          {#each generes as genre}
            <Option value={genre}>{genre}</Option>
          {/each}
        </Select>
    </div>
    
    <div class="col">
        <Select bind:value={chosenRating} label="Rating">
          <Option value="" />
          {#each ratings as rating}
            <Option value={rating}>above {rating}/10 stars</Option>
          {/each}
        </Select>
    </div>
    <div class="col">
       <Fab color="primary" on:click={searchFor}> 
           <Icon class="material-icons">arrow_forward</Icon>
        </Fab>
    </div>
</div>


{#if filtered.length > 0}
    <CardGrid data={filtered}/>
{:else if searchClicked && filtered.length == 0}
    <h3 class="mdc-typography--headline3">No movies matched your search</h3>
{/if}

<style>
    .col {
        padding: 15px;
    }
</style>