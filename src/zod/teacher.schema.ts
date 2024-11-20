import { z } from 'zod';

export const teacherSchema = z.object({
    name: z
        .string()
        .min(2, { message: 'Name must be at least 2 characters long' })
        .max(50, { message: 'Name cannot exceed 50 characters' }),
    email: z.string().email({ message: 'Please enter a valid email address' }),
    profilePic: z
        .string()
        .url({ message: 'Profile picture must be a valid URL' })
        .optional(),
    password: z
        .string()
        .min(6, { message: 'Password must be at least 6 characters long' })
        .max(30, { message: 'Password cannot exceed 30 characters' }),
    confirmPassword: z.string().min(6, {
        message: 'Confirmation password must match the password'
    }),
    department: z
        .string()
        .min(2, {
            message: 'Department name must be at least 2 characters long'
        })
        .max(50, {
            message: 'Department name cannot exceed 50 characters'
        }),
    designation: z
        .string()
        .min(2, {
            message: 'Designation must be at least 2 characters long'
        })
        .max(50, { message: 'Designation cannot exceed 50 characters' }),
    semester: z.preprocess(
        (val) => Number(val),
        z
            .number()
            .int()
            .min(1, 'Semester must be at least 1')
            .max(8, 'Semester cannot be more than 8')
    ),
    employeeId: z.string().min(2, {
        message: 'Employee ID must be at least 2 characters long'
    })
});
