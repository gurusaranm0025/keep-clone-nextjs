"use server";

import { revalidatePath } from "next/cache";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function insertToDB(data) {
  const notesDB = await prisma.notes.create({
    data: {
      title: data.title,
      notes: data.notes,
    },
  });
  console.log(notesDB);
  revalidatePath("keep-clone-next.onrender.com");
  prismaDisconnect();
}

const findFromDB = async () => {
  const notesFromDB = await prisma.notes.findMany();
  console.log("server actions");
  prismaDisconnect();
  return notesFromDB;
};

const prismaDisconnect = async () => {
  console.log("disconnected from prisma");
  await prisma.$disconnect();
};

export { insertToDB, findFromDB, prismaDisconnect };
