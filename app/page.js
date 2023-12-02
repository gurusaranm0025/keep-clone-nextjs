import NavBar from "@/components/NavBar/NavBar";
import NotesInpForm from "@/components/NotesInpForm/NotesInpForm";
import NotesList from "@/components/NotesList/NotesList";

export default function Home() {
  return (
    <>
      <NavBar />
      <NotesInpForm />
      <NotesList />
    </>
  );
}
