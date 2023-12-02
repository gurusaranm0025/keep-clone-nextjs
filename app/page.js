import NavBar from "@/components/NavBar/NavBar";
import NotesInpForm from "@/components/NotesInpForm/NotesInpForm";
import NotesList from "@/components/NotesList/NotesList";
import { findFromDB, prismaDisconnect } from "@/actions/serverActions";

export default async function Home() {
  const notes = await findFromDB()
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      prismaDisconnect();
    });
  return (
    <>
      <NavBar />
      <NotesInpForm />
      <NotesList notes={notes} />
    </>
  );
}
