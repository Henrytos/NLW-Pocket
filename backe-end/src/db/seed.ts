import { db } from ".";
import { goals } from "./schema";

async function seed() {
  await db
    .insert(goals)
    .values([
      { title: "Acordar cedo", desiredWeeklyFrequency: 5 },
      { title: "Me exercitar", desiredWeeklyFrequency: 3 },
      { title: "Meditar", desiredWeeklyFrequency: 1 },
    ])
    .returning();
}

seed().finally(() => {
  console.log("Seed complete");
});
