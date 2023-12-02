"use server";

import { revalidatePath } from "next/cache";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const insertToDB = async (data) => {
  const notesDB = await prisma.notes.create({
    data: {
      title: data.title,
      notes: data.notes,
    },
  });
  console.log(notesDB);
  revalidatePath("/");
};

const findFromDB = async () => {
  const notesFromDB = await prisma.notes.findMany();
  console.log("server actions");
  return notesFromDB;
};

export { insertToDB, findFromDB };
