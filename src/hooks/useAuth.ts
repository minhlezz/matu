import React, {useEffect, useState} from 'react';

interface SignedInUser {
    id?: string,
    username?: string,
    isLoggedIn?: boolean
}

const useAuth = () => {
    const [user, setUser] = useState<SignedInUser>({
        id: "",
        username: "",
        isLoggedIn: false
    });

    useEffect(() => {
        getMe().then(user => setUser(prev => {
            return {
                ...user,
                isLoggedIn: true
            }
        }))
    }, [])

    const getMe = async () => {
        return await fetch("http://localhost:8080/api/v1/users/me", {
            credentials: "include"
        })
            .then(res => res.json())
            .catch(err => {
                setUser(prev => {
                    return {
                        ...prev,
                        isLoggedIn: false
                    }
                })
                throw new Error(err)
            })
    }

    return user
}