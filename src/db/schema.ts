import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';


export const preOrderTable = pgTable('pre_orders', {
  id: serial('id').primaryKey(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  full_name: text('full_name').notNull(),
  email: text('email').notNull().unique(),
});
