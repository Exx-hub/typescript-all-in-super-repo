import { useReducer, useState } from 'react'

// const initialState = {
//     username: "",
//     password: ""
// }


// type FormState = {
//     username: string
//     password: string
// }

// type FormAction = {
//     type: string
//     payload: string
// }

// const reducer = (state: FormState, action: FormAction) => {
//     switch (action.type) {
//         case 'username':
//             return { ...state, username: action.payload }
//         case 'password':
//             return { ...state, password: action.payload }
//         default:
//             return state
//     }
// }



function Form() {

    const [ loginCreds, setLoginCreds ] = useState({ username: "", password: "" })
    console.log(loginCreds)

    // const [ state, dispatch ] = useReducer(reducer, initialState)

    // console.log(state)
    return (
        <div>
            <div>
                <input
                    value={loginCreds.username}
                    // onChange={(e) => dispatch({ type: 'username', payload: e.target.value })}
                    onChange={(e) =>
                        setLoginCreds({ ...loginCreds, username: e.target.value })
                    }
                    placeholder="enter username"
                />
            </div>
            <div>
                <input value={loginCreds.password}
                    // onChange={(e) => dispatch({ type: 'password', payload: e.target.value })}
                    onChange={(e) =>
                        setLoginCreds({ ...loginCreds, password: e.target.value })
                    }
                    placeholder="enter password" />
            </div>
            <button>Submit</button>
        </div>
    );
}

export default Form