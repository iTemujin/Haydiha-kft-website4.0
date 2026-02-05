<script>
    import Card from '$lib/komponens/card.svelte'

    const productsGet = async () => {
        const response = await fetch("")
    }
</script>



<section>
    <h2>Noi</h2>
    <div class="grid grid-cols-[repeat(auto-fit,minmax(150px,300px))] gap-4 justify-center">
        <Card product="Szia" />
        <Card product="Szia" />
        <Card product="Szia" />
        <Card product="Szia" /> 
        <Card product="Szia" />
        <Card product="Szia" />
        <Card product="Szia" />
    </div>
</section>