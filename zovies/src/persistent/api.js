import {writable } from 'svelte/store';

export const ApiBase = "http://192.168.20.3:8080/api";
export let DownloadedMovieIds = writable(Array.of(String));
