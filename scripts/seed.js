const { db } = require("@vercel/postgres");

const { tasks } = require("../lib/placeholder-data.js");

async function seedTasks(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "tasks" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS tasks (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        description VARCHAR(255) NOT NULL UNIQUE,
        completed BOOLEAN NOT NULL
      );
    `;

    console.log(`Created "Tasks" table`);

    // Insert data into the "tasks" table
    const insertedTasks = await Promise.all(
      tasks.map(async (task) => {
        return client.sql`
        INSERT INTO tasks (id, title, description, completed)
        VALUES (${task.id}, ${task.title}, ${task.description}, ${task.completed})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );

    console.log(`Seeded ${insertedTasks.length} tasks`);

    return {
      createTable,
      tasks: insertedTasks,
    };
  } catch (error) {
    console.error("Error seeding tasks:", error);
    throw error;
  }
}

async function main() {
  const tasks = await db.connect();

  await seedTasks(tasks);

  await tasks.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
