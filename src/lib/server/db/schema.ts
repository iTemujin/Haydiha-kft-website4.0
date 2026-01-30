
import { isNotNull } from 'drizzle-orm';
import { pgTable, integer, varchar } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
    email: varchar({ length: 50 }).unique().notNull()
});

export const product = pgTable("product", {
    productName: varchar({ length: 50 }).notNull().unique(),
    // category in array
    price: integer().notNull(),
    discount: integer().notNull(),
})

export const productSize = pgTable("Size", {
    productName: varchar().references(() => product.productName),
    size: varchar({ length: 50 }),
    pieces: integer(),
})

export const order = pgTable("order", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    productId: integer(),
    
})
