import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface userSlice {
    _id: string;
    name: string;
    email: string;
    profilePic?: string;
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
    collegeName?: string;
}
const initialState: userSlice = {
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
    collegeName: ''
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
            state.teacherId = action.payload.teacherId;
            state.designation = action.payload.designation;
            state.gender = action.payload.gender;
            state.isHOD = action.payload.isHOD;
            state.section = action.payload.section;
            state.classRollNumber = action.payload.classRollNumber;
            state.collegeId = action.payload.collegeId;
            state.branch = action.payload.branch;
            state.collegeName = action.payload.collegeName;
        },
        logout: (state) => {
            return initialState;
        }
    }
});

export const { addCurrentUserData, logout } = userSlice.actions;

export default userSlice.reducer;
