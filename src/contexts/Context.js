import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isBooleanState, setIsBooleanState] = useState(false);
    const [user, setUser] = useState(null);
    const [isLogin, setIsLogin] = useState(false);

    const toggleBooleanState = () => {
        setIsBooleanState((prevValue) => !prevValue);
    };

    return (
        <AppContext.Provider value={{ isBooleanState, toggleBooleanState, user, setUser, isLogin, setIsLogin }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};




