<script>
	import { faTrash } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
</script>

<section class="fixed flex flex-col w-80 h-150 top-5 right-3 bg-white z-50 p-5 gap-4">
    <h2>Kosar</h2>

    <div class="inset-x-0 flex flex-col gap-4 overflow-y-auto h-100">
        {#each ['1','5', '4', '6', '7'] as item}
            <div class="inset-x-0 h-50  flex justify-between">
                <div class="bg-black h-full aspect-square">

                </div>

                <div class="p-1 w-40 ">
                    <p>Valami Zikni</p>
                    <p>Meret: 52-52</p>
                    <p>Mennyiseg: 52</p>
                    <p>Egyseg ar: 50</p>
                </div>

                <button class="bg-red-400 w-10 cursor-pointer"><FontAwesomeIcon icon={faTrash}/></button>
            </div>
        {/each}
    </div>

    <div class="flex justify-between p-2">
        <div class="flex gap-1">
            <p>Osszesen</p>Afaval
        </div>

        <p>10000ft</p>
    </div>

    <button>Feldolgozas</button>

</section>
