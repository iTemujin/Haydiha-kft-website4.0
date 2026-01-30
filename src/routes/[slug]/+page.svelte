<script>

</script>

<section class="">
    <h2>ID:</h2>
    <div class="flex justify-center gap-30">
        <div class="bg-black w-100 aspect-[7/10]"></div>


        <div class="flex flex-col mt-30  items-center w-100 gap-10">
            <h3>Valamilyen Zokni</h3>
            
            <section class="w-70">
                <h3>Categoria:</h3>
                <ul class="flex gap-2 justify-center">
                    {#each ['fekete', 'ferfi'] as categoria}
                    <li>{categoria}</li>
                    {/each}
                </ul>
            </section>

            <section class="w-70">
                <h3>Meretek:</h3>
                <div class="flex gap-4  justify-center">
                    {#each ['52-52', '52-52','52-52'] as size}
                        <button class="">{size}</button>
                    {/each}
                </div>
                <p>Raktarban: 40</p>
            </section>

            <button>Kosárba</button>

            <section class="w-70">
                <h3>Leiras:</h3>
                <p class="text-center p-4">jfdfhadfhuhhgshgfuiohsgo</p>
            </section>
        </div>
    </div>
</section>