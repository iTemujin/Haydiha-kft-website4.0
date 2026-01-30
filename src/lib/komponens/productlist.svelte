<script>

    import { faBars, faUser, faShoppingBag, faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

    import Card from '$lib/komponens/card.svelte'

    

    let { category } = $props()

    let x = $state(0);

    let left = () => {
        x -= 100
    }

    let right = () => {
        x += 100

    }

</script>

<section class="my-20 relative overflow-hidden flex flex-col justify-center">
        <h2>{category}</h2>
        <div class="flex inset-x-0 h-100 xl:h-200 gap-4 p-5" style="transform: translateX({x}px);">
            {#each ['ez', 'az', 'amot','ez', 'az', 'amot'] as product}
                <Card {product} />
            {/each}
        </div>
        <button class="absolute left-1  z-10
        rounded-full bg-white w-10 h-10" on:click={right}>
            <FontAwesomeIcon icon={faLeftLong} /></button>
        <button class="absolute right-3  z-10
         rounded-full bg-white w-10 h-10" on:click={left}>
            <FontAwesomeIcon icon={faRightLong} />
        </button>
</section>

