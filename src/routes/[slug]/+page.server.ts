import { db } from '$lib/server/db'
import { products, productSizes } from '$lib/server/db/schema'
import { eq } from 'drizzle-orm'

export async function load({ params }) {
    const result = await db.select()
    .from(products)
    .where(eq(products.productName, params.slug))

    console.log(result)
    console.log(params.slug)

    if (result.length == 0) { return { message: false }}

    const sizeResult = await db.select()
    .from(productSizes)
    .where(eq(productSizes.productName, result[0].productName))

    console.log(sizeResult)

    return {
        message: true,
        name: params.slug,
        category: result[0].category,
        price: result[0].price,
        discount: result[0].discount,
        img: result[0].imgLink,
        size: sizeResult,
    }
}
