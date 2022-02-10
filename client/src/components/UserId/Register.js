import "./Index.css";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser } from "../../store/actions/User";
import * as Yup from "yup";

const Register = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },

        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, "name cannot exceed 25 characters")
                .required("required"),
            email: Yup.string().min(10, "check email ").required("required"),

            password: Yup.string()
                .min(8, "password cannot be less than 10 characters")
                .required("required"),
        }),

        onSubmit: (formik) => {
            const newUser = {
                username: formik.name,
                email: formik.email,

                password: formik.password,
            };

            dispatch(RegisterUser(newUser));

            setTimeout(() => {
                window.location.replace("/home");
            }, 400);
        },
    });

    return (
        <div className="register">
            <form onSubmit={formik.handleSubmit}>
                <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                    <p>{formik.errors.name}</p>
                ) : null}
                <br /> <br />
                <input
                    type="text"
                    id="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <p>{formik.errors.email}</p>
                ) : null}
                <br /> <br />
                <input
                    type="password"
                    id="password"
                    placeholder="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                    <p>{formik.errors.password}</p>
                ) : null}
                <br /> <br />
                <button type="submit" id="btn">
                    Submit
                </button>
                <br /> <br />
            </form>
        </div>
    );
};

export default Register;
