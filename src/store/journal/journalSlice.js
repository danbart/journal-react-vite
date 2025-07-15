import { createSlice } from '@reduxjs/toolkit';

export const JournalSlice = createSlice({
    name: 'Journal',
    initialState: {
        isSaving: true,
        messageSaved: '',
        notes: [],
        active: null,
    },
    reducers: {
        increment: (state, /* action */) => {
            state.counter += 1;
        },
    }
});


// Action creators are generated for each case reducer function
export const { increment } = JournalSlice.actions;