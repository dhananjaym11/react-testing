import React, { useState, useEffect } from "react";

export default function User(props) {
    const [user, setUser] = useState(null);

    async function fetchUserData(id) {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
        setUser(await response.json());
    }

    useEffect(() => {
        fetchUserData(props.id);
    }, [props.id]);

    if (!user) {
        return "loading...";
    }

    return (
        <details>
            <summary>{user.name}</summary>
            <br />
            Username: <strong>{user.username}</strong>
            <br />
            Email: {user.email}
        </details>
    );
}