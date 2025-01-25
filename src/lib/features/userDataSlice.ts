import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface userSlice {
    _id: string;
    name: string;
    email: string;
    profilePic: string;
    department: string;
    semester: number;
    role: string;
}

const initialState: userSlice = {
    _id: '',
    name: '',
    email: '',
    profilePic: '',
    role: '',
    department: '',
    semester: 0
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addCurrentUserData: (state, action: PayloadAction<userSlice>) => {
            state._id = action.payload._id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.profilePic = action.payload.profilePic;
            state.department = action.payload.department;
            state.semester = action.payload.semester;
            state.role = action.payload.role;
        }
    }
});

export const { addCurrentUserData } = userSlice.actions;

export default userSlice.reducer;
