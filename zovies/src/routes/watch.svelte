<script>
    import { page } from '$app/stores';

    import '@videojs/themes/dist/city/index.css';


    import { ApiBase } from '../persistent/api';
    import Chip, { Set, Text } from '@smui/chips';
    import List from '@smui/list/src/List.svelte';

    import { Graphic, Item } from '@smui/list';


    const id = $page.url.searchParams.get('id')

    
	const movie = (async () =>  {
		const response = await fetch(ApiBase + "/movie/" + id)
		const json = await response.json()
		console.log(json);
		return json;
	})()

</script>

<style>
    .container {  
        margin-top: 50px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr; 
        grid-template-rows: 1fr 1fr 0.3fr 0.5fr 1fr 1fr; 
        gap: 0px 0px; 
        grid-template-areas: 
            ". video-player video-player video-player video-player video-player ."
            ". video-player video-player video-player video-player video-player ."
            ". cover title title title . ."
            ". cover information information . . ."
            ". cover description description description . ."
            ". . cast cast cast . ."; 
        }

    .video-player { 
        grid-area: video-player; 
        margin-bottom: 25px;
    }

    .cover { 
        grid-area: cover; 
        margin-right: 30px;
    }

    .title { grid-area: title; }

    .information { grid-area: information; }

    .description { grid-area: description; }

    .cast { grid-area: cast; }


    #movie-player {
        width: 100%;
        height: 100%;
    }

</style>

{#await movie}
    <p>Loading...</p>
{:then data} 
    <div class="container">
        <div class="video-player">
            {#if data['details']['movieFileUrl'] === ""}
                <h4 class="mdc-typography--headline4">Movie still downloading...Check back later</h4>
            {:else}
            
                <video id="movie-player"  class="video-js vjs-theme-city"  controls preload="auto">
                    <track kind="captions"/>
                    <source src={ApiBase+data['details']['movieFileUrl']}/>
                </video>
            
               
            {/if}
            
        </div>
        <div class="cover">
            <img src={data['details']['coverUrl']} alt={data['movieName']}/>
        </div>
        <div class="title">
            <p class="mdc-typography--headline3">{data['title']}</p>
        </div>
        <div class="information">
            <p class="mdc-typography--headline6">Released {data['details']['year']}</p>
            <span class="mdc-typography--headline6" style="text-align: center;">{data['details']['rating']} ⭐</span>
            
            
            <Set chips={data['details']['genres'].split(',')} let:chip nonInteractive>
                <Chip {chip}>
                  <Text>{chip}</Text>
                </Chip>
            </Set> 
    
        </div>
        <div class="description">
            <p class="mdc-typography--body1">{data['details']['description']}</p>
        </div>

        <div class="cast">
            <p class="mdc-typography--body1">Actors</p>
            <List>
                {#each data['cast'].split(',') as actor}
                    <Item>
                        <Text>{actor}</Text>
                    </Item>
                {/each}
            </List>
        </div>
  </div>
{/await}

