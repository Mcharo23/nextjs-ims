import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const migrationClient = postgres(
  "postgres://postgres:postgres@localhost:5432/ims",
  {
    max: 1,
  }
);

async function main() {
  try {
    await migrate(drizzle(migrationClient), {
      migrationsFolder: "./db/migrations",
    });
    console.log("Migrations completed successfully.");
  } catch (error) {
    console.error("Migration failed:", error);
  } finally {
    await migrationClient.end();
  }
}

main();
