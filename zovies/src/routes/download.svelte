<script lang="ts">
    import Textfield from '@smui/textfield';
    import Icon from '@smui/textfield/icon';
    import HelperText from '@smui/textfield/helper-text';
    import Button from '@smui/button/src/Button.svelte';
    import { Label } from '@smui/button';
    import { ApiBase, DownloadedMovieIds } from '..//persistent/api';
    import type { SnackbarComponentDev } from '@smui/snackbar';
    import Snackbar from '@smui/snackbar';
    
    let snackbar: SnackbarComponentDev;

    let url = '';
    const successLabel = 'Movie has been qeued to download';
    const errorLabel = 'Failed to find movie';
    let label = successLabel;
    
    async function submitUrl() {
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

        snackbar.open();
    }
</script>

<Snackbar leading bind:this={snackbar}>
    <Label>{label}</Label>
</Snackbar>

<div style="height: 100%; width:100%;">
    <Textfield
        class="shaped-outlined"
        variant="outlined"
        bind:value={url}
        label="Movie Url"  style="width: 500px;">
        <HelperText slot="helper">Lookmovie url</HelperText>
    </Textfield>
    
    <Button variant="outlined" on:click={submitUrl} style="margin-left: 175px;">
        <Icon class="material-icons">upload</Icon>
        <Label>Download</Label>
    </Button>
</div>

   
  <style>
    *
      :global(.shaped-outlined
        .mdc-notched-outline
        .mdc-notched-outline__leading) {
      border-radius: 28px 0 0 28px;
      width: 28px;
    }
    *
      :global(.shaped-outlined
        .mdc-notched-outline
        .mdc-notched-outline__trailing) {
      border-radius: 0 28px 28px 0;
    }
    * :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__notch) {
      max-width: calc(100% - 28px * 2);
    }
    *
      :global(.shaped-outlined.mdc-text-field--with-leading-icon:not(.mdc-text-field--label-floating)
        .mdc-floating-label) {
      left: 16px;
    }
    * :global(.shaped-outlined + .mdc-text-field-helper-line) {
      padding-left: 32px;
      padding-right: 28px;
    }
  </style>