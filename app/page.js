import NavBar from "@/components/NavBar/NavBar";
import NotesInpForm from "@/components/NotesInpForm/NotesInpForm";
import NotesList from "@/components/NotesList/NotesList";

import { findFromDB } from "@/actions/serverActions";

export default async function Home() {
  const notes = await findFromDB();
  return (
    <>
      <NavBar />
      <NotesInpForm />
      <NotesList notes={notes} />
    </>
  );
}
