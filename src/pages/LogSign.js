import React from 'react'
import { useAppContext } from '../contexts/Context';
import Login from "./Login"
import Signup from "./Signup"

const LogSign = () => {
    const { isBooleanState } = useAppContext();
    return (
        <>
            {isBooleanState ? <Signup /> : <Login />}
        </>
    )
}

export default LogSign