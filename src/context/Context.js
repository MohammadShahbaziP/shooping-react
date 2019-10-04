import React, {useContext,useReducer} from 'react'

export const shopingContext = React.createContext()

export const ProductProvider = ({children,initialState,reducer})=>{
    return (
        <shopingContext.Provider value={useReducer(reducer,initialState)}>
            {children}
        </shopingContext.Provider>
    )
}

export const useGlobalState= ()=>useContext(shopingContext)