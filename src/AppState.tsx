import React, { useState } from 'react'


interface AppState {
  username: string;
  shoppingCart: { items: {id: number, name: string}[] }
}

const defaultContextValue : AppState = {
  username: 'EnzoLuo',
  shoppingCart: {
    items: [],
  }
}

const appContext = React.createContext(defaultContextValue)
const appSetStateContext = React.createContext<React.Dispatch<React.SetStateAction<AppState>> | undefined>(undefined)

const AppStateProvider: React.FC = (props) => {
  const [state, setState] = useState(defaultContextValue)

  return (
    <appContext.Provider value={state}>
      <appSetStateContext.Provider value={setState}>
        { props.children }
      </appSetStateContext.Provider>
    </appContext.Provider>
  )
}

export {
  appContext,
  AppStateProvider,
  appSetStateContext
}