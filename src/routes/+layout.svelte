<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';


	import { faBars, faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

	import Navigation from './navigation.svelte'
	import Search from './search.svelte';
	import User from './user.svelte'
	import Shoppingbag from './shoppingbag.svelte';


	let menuOpen = false;
	let searchOpen = false;
	let cartOpen = false;
	let userOpen = false;


	let allIconOff = () => {
		menuOpen = false;
		searchOpen = false;
		cartOpen = false;
		userOpen = false;
	}

</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>


<header class="fixed flex justify-between w-full items-center p-5 text-2xl z-30">
	<div class="flex items-center gap-4">
		<button class="cursor-pointer" on:click={() => menuOpen = true}>	
			<FontAwesomeIcon icon={faBars} />
		</button>

		<h1>HaydiHa</h1>
	</div>

	<div class="absolute w-full inset-x-0 top-15 flex justify-center
			sm:static sm:inset-auto sm:top-auto">

			<button class="flex p-2 items-center text-black/40 border-2 border-black/75 
			cursor-pointer w-[80%] max-w-75 h-11" on:click={() => searchOpen = true}>
			Keresés
		</button>
	</div>

	<div class="flex items-center gap-4 text-2xl">
		<button class="cursor-pointer" on:click={() => cartOpen = true}>
			<FontAwesomeIcon icon={faShoppingBag} />
		</button>

		<button class="cursor-pointer" on:click={() => userOpen = true}>
			<FontAwesomeIcon icon={faUser} />
		</button>
	</div>
</header>

{#if menuOpen || searchOpen || cartOpen || userOpen}
	<button class="fixed inset-0 bg-black/50 z-40 text-transparent" on:click={allIconOff}>Close</button>
{/if}


{#if menuOpen}
	<Navigation />

{:else if searchOpen}
	<Search />

{:else if cartOpen}
	<Shoppingbag />

{:else if userOpen}
	<User />
{/if}


<main class="relative top-30 inset-x-0 px-10">
	<slot />
</main>
