import { z } from 'zod';

export const studentSchema = z
    .object({
        name: z
            .string()
            .min(1, 'Name is required')
            .max(25, 'Maximum length is 25')
            .regex(
                /^[a-zA-Z ]+$/,
                'Name can only contain alphabets and spaces'
            ),
        profilePic: z
            .string()
            .url('Profile picture must be a valid URL')
            .optional(),
        email: z
            .string()
            .email('Invalid email address')
            .regex(
                /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                'Email cannot contain special characters'
            ),
        department: z.string().min(1, 'Department is required'),
        password: z
            .string()
            .min(8, 'Password must be at least 8 characters long'),
        confirmPassword: z
            .string()
            .min(8, 'must be at least 8 characters long'),

        // Using z.preprocess to convert semester input to a number
        semester: z.preprocess(
            (val) => Number(val),
            z
                .number()
                .int()
                .min(1, 'Semester must be at least 1')
                .max(8, 'Semester cannot be more than 8')
        ),
        classRollNumber: z.string().min(1, 'Class Roll Number is required'),
        enrollmentNumber: z.string().min(1, 'Enrollment Number is required'),
        universityRollNumber: z
            .string()
            .min(1, 'University Roll Number is required')
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ['confirmPassword'],
        message: 'Passwords do not match'
    });
