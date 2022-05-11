<script lang="ts">
    // the movies id returned from the api
    export let movieID: string;
    // the movies title
    export let title: string;
    // the movies image url, default to placeholder if nothing is passed in
    export let coverImageUrl:string = "https://place-hold.it/300x450?text=square&fontsize=23";
    
    import Card, { Content, Media, MediaContent, PrimaryAction } from "@smui/card";


    // TODO: navigate to detail screen
    function movieClicked() {
      console.log("Movie card clicked!");
    }
</script>



<div class="card-container">
  <Card style="width: 300px; height: 450px; background-image: url({coverImageUrl});">
    <PrimaryAction on:click={movieClicked}>
         <Content style="height: 450px;">
            <div style="color: #fff; position: absolute; bottom: 16px; left: 16px;">
              <h2 class="mdc-typography--headline6" style="margin: 0;">{title}</h2>
              <h3 class="mdc-typography--subtitle2" style="margin: 0;">And a subtitle. {movieID}</h3>
            </div>
         </Content>
    </PrimaryAction>
  </Card>
</div>

