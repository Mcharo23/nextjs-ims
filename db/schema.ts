import { pgTable, uuid, text, varchar } from "drizzle-orm/pg-core";

export const UserTable = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  userName: text("userName"),
  name: varchar("name", { length: 256 }),
  password: varchar("password", { length: 256 }),
  email: varchar("email", { length: 256 }).unique().notNull(),
});

export type UserType = typeof UserTable.$inferInsert;
