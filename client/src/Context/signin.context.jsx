import { createContext, useState } from "react";

export const SignInContext = createContext({
    signedin: false,
    setSignedin: () => {}
})

export const SignInProvider = ({children}) => {
    const [signedin, setSignedin] = useState(false)
    let value = {
        signedin,
        setSignedin
    }
    return (
        <SignInContext.Provider value={value}>
            {children}
        </SignInContext.Provider>
    )
}