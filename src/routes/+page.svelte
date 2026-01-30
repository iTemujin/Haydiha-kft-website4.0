<script>
    import Cardlist from '$lib/komponens/productlist.svelte'
</script>

<div class="bg-black inset-x-0 aspect-video mb-20">
    
</div>


{#each ['noknek', 'ferfiaknak'] as category}
    <Cardlist {category} />
{/each}