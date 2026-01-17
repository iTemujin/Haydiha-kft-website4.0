<script>

</script>

<div class="fixed flex w-full h-20 bg-black z-50 p-5 justify-center">
    <input type="text">

    <div class="absolute flex flex-col
     bg-white top-22 h-auto w-[65%] max-w-100 overflow-hidden rounded-2xl">

        {#each ['helo', 'szia'] as find}
            <a href="search/{find}"><div class="flex items-center p-3 rounded-md inset-x-0 h-12
             bg-white hover:bg-black/10 ">
                {find}
            </div></a>
        {/each}

    </div>
</div>
