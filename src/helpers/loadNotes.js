import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";


export const loadNotes = async (uid = '') => {
    if (!uid) throw new Error('The user ID does not exist');

    const notes = await getDocs(collection(FirebaseDB, `${uid}/journal/notes`));
    const notesArray = [];

    notes.forEach(note => {
        notesArray.push({
            id: note.id,
            ...note.data()
        });
    });

    return notesArray;
}