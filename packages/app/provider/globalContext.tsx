import { createContext, useContext, useState } from 'react'

export interface userContextInterface {
  value: string
  setValue: (string) => void
}
const globalContext = createContext<userContextInterface | null>(null)

const GlobalProvider = ({ children }) => {
  const [value, setValue] = useState('demo')

  return (
    <globalContext.Provider value={{ value, setValue }}>
      {children}
    </globalContext.Provider>
  )
}
const useGlobalContext = () => {
  const context = useContext(globalContext)
  if (context === undefined) {
    throw new Error("context doesn't exist")
  }
  return context
}

export { globalContext, GlobalProvider, useGlobalContext }
