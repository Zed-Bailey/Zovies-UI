import {writable } from 'svelte/store';

export const ApiBase = "http://localhost:5000/api";
export let DownloadedMovieIds = writable(Array.of(String));
