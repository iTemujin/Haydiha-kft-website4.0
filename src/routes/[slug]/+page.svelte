<script>
	import { dateDuration } from 'drizzle-orm/gel-core';

    let { data } = $props();
    console.log(data.message);

    let stroage = $state(data.size[0].pieces);
    let id = $state(data.size[0].id);

    let changeSize = (i) => {
        console.log(i);
        stroage = data.size[i].pieces;
        id = data.size[i].id
    }
</script>

<section class="">
    <h2>ID: {id}</h2>
    <div class="flex justify-center gap-30">
        <div class="bg-black w-100 aspect-[7/10]" style="background-image: url({data.img});
        background-size:cover; background-position: center;"></div>


        <div class="flex flex-col mt-30  items-center w-100 gap-10">
            <h3>{data.name}</h3>
            
            <section class="w-70">
                <h3>Categoria: </h3>
                <ul class="flex gap-2 justify-center">
                    {#each data.category as categoria}
                    <li>{categoria}</li>
                    {/each}
                </ul>
            </section>

            <section class="w-70">
                <h3>Meretek:</h3>
                <div class="flex gap-4  justify-center">
                    {#each data.size as size, i}
                        <button on:click={() => changeSize(i)} class="">{size.size}</button>
                    {/each}
                </div>
                <p>Raktarban: {stroage}</p>
            </section>

            <p>price: {data.price}ft</p>
            <button>Kosárba</button>
        </div>
    </div>
</section>