import { useContext } from "react"
import { UserContext } from "./UserContext"


function UserWithContext() {
    const { user, setUser } = useContext(UserContext)
    console.log(user)



    const handleLogin = () => {

        setUser({
            name: 'alvin',
            email: 'alvin.gmail.com'
        })

    }

    const handleLogout = () => {

        setUser(null)

    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <p>User name is {user?.name}</p>
            <p>User email is {user?.email}</p>
        </div>
    )
}

export default UserWithContext