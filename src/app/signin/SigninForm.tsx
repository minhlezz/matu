"use client"
import React, {useState} from 'react';
import {Button} from "@chakra-ui/react";
import {useFormik} from "formik";
import {useRouter} from "next/navigation";

interface Credentials {
    username: string,
    password: string
}
const SigninForm = () => {
    const router = useRouter()
    const [error, setError] = useState<string>("");

    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        onSubmit: async (values) => {
            const res = await fetch("http://localhost:8080/api/v1/auth/signin", {
                method: 'POST',
                body: JSON.stringify({
                    username: values.username,
                    password: values.password
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: "include"
            })

            if(res.ok) {
                router.push("/")
            } else  {
                setError("Authenticated failed !!")
            }
        },
    });

    return (
        <div className={"w-full flex  justify-center h-full"}>
            <form onSubmit={formik.handleSubmit} className="flex flex-col justify-center w-1/3 bg-slate-200 p-5">
                <label htmlFor="firstName">Username</label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                />
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <Button className="mt-5" colorScheme='teal' type="submit">Submit</Button>
                {error && (
                    <p className="text-red">{error}</p>
                )}
            </form>

        </div>
    );
};

export default SigninForm;