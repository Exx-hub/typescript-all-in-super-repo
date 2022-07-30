import { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}

function User2() {
    const [ user, setUser ] = useState<AuthUser>({} as AuthUser)

    const handleLogin = () => {
        setUser({
            name: 'alvin',
            email: 'alvinfloresacosta@gmail.com'
        })
    };

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <p>User name is {user.name}</p>
            <p>User email is {user.email}</p>
        </div>
    );
}

export default User2