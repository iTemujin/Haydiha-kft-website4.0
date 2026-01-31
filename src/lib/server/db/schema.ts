import { pgTable, integer, varchar } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
    email: varchar({ length: 50 }).unique().notNull(),
    code: varchar({ length: 4 }).notNull(),
    role: varchar().default("customer"),
    session: varchar().unique()
});

export const product = pgTable("product", {
    vendor: varchar().references(() => user.email, { onDelete: 'cascade' }), // Elado vendor = kereskedo
    productName: varchar({ length: 50 }).notNull().unique(),
    category: varchar().array(), 
    price: integer().notNull(),
    discount: integer().notNull(),
    imgLink: varchar().notNull(),
});

export const productSize = pgTable("Size", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    productName: varchar().references(() => product.productName, { onDelete: 'cascade' }),
    size: varchar({ length: 50 }).notNull(),
    pieces: integer().notNull(),
});

export const order = pgTable("order", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    customer: varchar().references(() => user.email),
    productId: integer().references(() => productSize.id, { onDelete: 'cascade' }),
    role: varchar().notNull()
});
