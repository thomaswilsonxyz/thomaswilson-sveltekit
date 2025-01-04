<script lang="ts">
	import type { Map, Marker } from 'leaflet';
	import { onMount } from 'svelte';
	import type { PageData } from './$types.js';
	import type { Wainwright } from './Wainwright.js';
	import { browser } from '$app/environment';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	let { wainwrights } = $derived(data);

	onMount(async () => {
		const L = await import('leaflet');

		function makeMap(): Map {
			return new L.Map('map', {
				center: [54.529149, -3.12411],
				zoom: 12,
				layers: [
					L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
						attribution:
							'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
					})
				]
			});
		}

		function makePopup(wainwright: Wainwright): string {
			return `
            <div class="wainwright-popup">
                <b>${wainwright.name}</b> </br>
                <p>${wainwright.heightMetres}m</p>
            </div>`;
		}

		function makeMarkerForWainwright(map: Map, wainwright: Wainwright): Marker {
			const marker: Marker = L.marker([wainwright.latitude, wainwright.longitude], {
				alt: wainwright.name,
				title: wainwright.name
			});
			marker.bindPopup(makePopup(wainwright)).openPopup();
			return marker;
		}

		const map: Map = makeMap();
		wainwrights.forEach((wainwright: Wainwright) => {
			const marker = makeMarkerForWainwright(map, wainwright);
			marker.addTo(map);
		});
	});
</script>

<h1>Wainwrights</h1>

<p>
	The Lake District is a National Park in the North West of England. In the mid 20th century, Alfred
	Wainwright published a series of books describing (illustrated, and with character), two hundred
	and forteen fells (including four mountains). These have become known as the Wainwrights.
</p>

<div id="map" style="height: 400px;"></div>

<style lang="scss">
	:global .wainwright-popup {
		text-align: center;

		b,
		p {
			font-family: var(--font-family-sans);
			font-size: var(--font-size-sm);
			color: var(--gray-950);
		}
	}
</style>
