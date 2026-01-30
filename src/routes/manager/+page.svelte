<script>
    import Card from '$lib/komponens/card.svelte'

</script>

<a class="bg-green-500 p-2 m-5" href="manager/upload">Hozza add+</a>

<div class="grid grid-cols-[repeat(auto-fit,minmax(150px,300px))] gap-4">

    {#each ['1','2'] as item}
        <article class="p-5 w-full aspect-square bg-amber-200 hover:bg-blue-500 cursor-pointer">
            <h3>Id:</h3>
            <Card product={'Szia'} />
            <ul>
                {#each ['42-52', '42-52', '42-52'] as many}
                    <li>{many}: 52</li>
                {/each} 
            </ul>
            Ar: 52520ft

            <button class="mx-10 w-20 h-5 bg-red-500 cursor-no-drop active:size-100 active:fixed top-0">Torles</button>
        </article>
    {/each}
    
</div>


