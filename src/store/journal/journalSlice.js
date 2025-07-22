import { createSlice } from '@reduxjs/toolkit';

export const JournalSlice = createSlice({
    name: 'Journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
    },
    reducers: {
        addNewNote: (state, { payload }) => {
            state.notes.push(payload);
            state.isSaving = false;
        },
        setActiveNote: (state, { payload }) => {
            state.active = payload;
            state.isSaving = false;
            state.messageSaved = '';
        },
        setNotes: (state, { payload }) => {
            state.notes = payload;
            state.isSaving = false;
        },
        setSaving: (state) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        updateNote: (state, { payload }) => {
            state.isSaving = false;
            state.notes = state.notes.map(note =>
                note.id === payload.id ? payload : note
            );
            state.messageSaved = `${payload.title}, updated successfully`;
        },
        deleteNoteById: (state, { payload }) => {
            state.isSaving = false;
            state.notes = state.notes.filter(note => note.id !== payload);
            state.active = null;
        },
        setPhotosToActiveNote: (state, { payload }) => {
            if (state.active) {
                state.active.imageUrls = [...state.active.imageUrls, ...payload];
                state.isSaving = false;
            } else {
                console.error('No active note to set photos for');
            }
        },
        clearNoteLogout: (state) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.active = null;
        }
    }
});


// Action creators are generated for each case reducer function
export const {
    addNewNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById,
    setPhotosToActiveNote,
    clearNoteLogout
} = JournalSlice.actions;