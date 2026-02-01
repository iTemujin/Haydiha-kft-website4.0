import { pgTable, integer, varchar, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('user', {
    email: varchar({ length: 50 }).unique().notNull(),
    code: varchar({ length: 6 }).notNull(),
    role: varchar().default("customer"),
    session: varchar({ length: 64 }).unique(),
    sessionExpiresAt: timestamp(),
});

export const products = pgTable("product", {
    vendor: varchar().references(() => users.email, { onDelete: 'cascade' }), // Elado vendor = kereskedo
    productName: varchar({ length: 50 }).notNull().unique(),
    category: varchar().array(), 
    price: integer().notNull(),
    discount: integer().notNull(),
    imgLink: varchar().notNull(),
});

export const productSizes = pgTable("Size", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    productName: varchar().references(() => products.productName, { onDelete: 'cascade' }),
    size: varchar({ length: 50 }).notNull(),
    pieces: integer().notNull(),
});

export const orders = pgTable("order", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    customer: varchar().references(() => users.email),
    productId: integer().references(() => productSizes.id, { onDelete: 'cascade' }),
    role: varchar().notNull()
});
