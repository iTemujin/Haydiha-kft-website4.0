<section class="absolute z-200 bg-white top-0 left-0 p-3">
    <h2 class="m-3" >Uj termek hozzaadasa</h2>

    <a href="/manager" class="p-2 bg-amber-950 text-white">Vissza X</a>

    <button class="bg-green-500 p-2 mx-20 cursor-pointer">Mentes</button>

    <div class="relative bg-black w-70 h-100 my-10">
        
    </div>

    

    
    <div class="m-20">
        <div class="flex flex-col gap-20 w-60">
            <div class="flex flex-col gap-2">
                <input type="text" placeholder="Nev">
                <div class="flex gap-5">
                    <p>Categoria:</p>

                    <button class="bg-black hover:bg-red-500 cursor-pointer rounded-2xl hover:rounded-none text-white p-1 font-bold">Szia</button>

                </div>
                <div class="flex">
                    <input type="text" placeholder="Categoria">
                    <button class="cursor-pointer bg-green-400">Hozza add</button>
                </div>
                <input type="number" placeholder="Ar">
                <input type="number" placeholder="Kedvezmeny">
                <input type="image">
            </div>
            
            <div class="relative flex flex-col gap-10 bg-blue-100">
                {#each ['szia', 'je;'] as item}
                    <div class="flex flex-col gap-1">
                        <input type="number" placeholder="Meret">
                        <input type="number" placeholder="DarabSzam">
                        <button class="bg-red-500 cursor-pointer">Meret Torlese</button>
                    </div>
                {/each}
                <button class="bg-green-500 cursor-pointer">Meret hozzaadas</button>
            </div>
        </div>

    </div>

</section>