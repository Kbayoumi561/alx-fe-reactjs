import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Username is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        }),
        onSubmit: (values) => {
            console.log('Form Submitted:', values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <h2>Registration Form with Formik</h2>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username && (
                    <p style={{ color: 'red' }}>{formik.errors.username}</p>
                )}
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                    <p style={{ color: 'red' }}>{formik.errors.email}</p>
                )}
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password && (
                    <p style={{ color: 'red' }}>{formik.errors.password}</p>
                )}
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default FormikForm;