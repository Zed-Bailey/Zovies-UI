<script lang="ts">
  import { Label } from '@smui/button';
  import { ApiBase, DownloadedMovieIds } from '..//persistent/api';
  import type { SnackbarComponentDev } from '@smui/snackbar';
  import Snackbar from '@smui/snackbar';
  import CircularProgress from '@smui/circular-progress';
  import Paper from '@smui/paper';
  import { Input } from '@smui/textfield';
  import Fab from '@smui/fab/dist/';
  import { Icon } from '@smui/common';


  let snackbar: SnackbarComponentDev;

  let url = '';
  const successLabel = 'Movie has been qeued to download';
  const errorLabel = 'Failed to find movie';
  let label = successLabel;
  let submitted = false;

  async function submitUrl() {
      submitted = true;
      let formData = new FormData();
      formData.append('downloadUrl', url);
      let response = await fetch(ApiBase + "/download", {
          body: formData,
          method: "post"
      }).then(async response => {
          label = successLabel;
          let json = await response.json();
          $DownloadedMovieIds.concat(json['id']);
      }).catch(() => label = errorLabel)
      
      console.log(response);
      submitted = false;
      url = '';
      snackbar.open();
  }
</script>

<Snackbar leading bind:this={snackbar}>
    <Label>{label}</Label>
</Snackbar>

{#if !submitted}
  <div class="solo-demo-container solo-container">
    <Paper class="solo-paper" elevation={6}>
      <Icon class="material-icons">search</Icon>
      <Input
        bind:value={url}
        placeholder="Search"
        class="solo-input"
      />
    </Paper>
    <Fab
      on:click={submitUrl}
      disabled={url === ''}
      color="primary"
      mini
      class="solo-fab"
    >
      <Icon class="material-icons">arrow_forward</Icon>
    </Fab>
  </div>
{:else}
  <div class="solo-container">
    <CircularProgress
      class="my-four-colors"
      style="height: 60px; width: 60px;"
      indeterminate
      fourColor
    />
  </div>
{/if}


   
<style>
  .solo-demo-container {
    padding: 36px 18px;
  }
 
  .solo-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  * :global(.solo-paper) {
    display: flex;
    align-items: center;
    flex-grow: 1;
    max-width: 600px;
    margin: 0 12px;
    padding: 0 12px;
    height: 48px;
  }
  * :global(.solo-paper > *) {
    display: inline-block;
    margin: 0 12px;
  }
  * :global(.solo-input) {
    flex-grow: 1;
    color: var(--mdc-theme-on-surface, #f8f8f8);
  }
  * :global(.solo-input::placeholder) {
    color: var(--mdc-theme-on-surface, #f8f8f8);
    opacity: 0.6;
  }
  * :global(.solo-fab) {
    flex-shrink: 0;
  }
</style>