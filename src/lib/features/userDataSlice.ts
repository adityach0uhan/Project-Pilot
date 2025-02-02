import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
    _id: string;
    name: string;
    email: string;
    profilePic?: string;
    collegeLocation?: string;
    department?: string;
    semester?: number;
    role: string;
    branch?: string;
    classRollNumber?: string;
    gender?: string;
    section?: string;
    collegeId?: string;
    teacherId?: string;
    designation?: string;
    isHOD?: boolean;
    groupNumber?: string;
    collegeName?: string;
}

const initialState: UserState = {
    _id: '',
    name: '',
    email: '',
    profilePic: '',
    role: '',
    branch: '',
    department: '',
    semester: 0,
    classRollNumber: '',
    section: '',
    collegeId: '',
    gender: '',
    isHOD: false,
    designation: '',
    teacherId: '',
    collegeName: '',
    collegeLocation: '',
    groupNumber: ''
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addCurrentUserData: (
            state,
            action: PayloadAction<Partial<UserState>>
        ) => {
            return { ...state, ...action.payload };
        },
        logout: () => initialState
    }
});

export const { addCurrentUserData, logout } = userSlice.actions;

export default userSlice.reducer;
