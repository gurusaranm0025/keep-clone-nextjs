import NavBar from "@/components/NavBar/NavBar";
import NotesInpForm from "@/components/NotesInpForm/NotesInpForm";
import NotesList from "@/components/NotesList/NotesList";
import { findFromDB, prismaDisconnect } from "@/actions/serverActions";
// import { useEffect } from "react";
import { custRevalidatePath } from "@/actions/serverActions";

export default async function Home() {
  custRevalidatePath();
  const notes = await findFromDB()
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      prismaDisconnect();
    });
  console.log("pages");
  return (
    <>
      <NavBar />
      <NotesInpForm />
      <NotesList notes={notes} />
    </>
  );
}
