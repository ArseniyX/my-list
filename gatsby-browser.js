import React from "react"
import { Provider } from "react-redux"
import store from "./src/state/store"
import { ProvideAuth } from "./src/hooks/use-auth"
import "firebase/auth"
import "firebase/firestore"
import "firebase/functions"

export const wrapRootElement = ({ element }) => {
  return (
    <ProvideAuth>
      <Provider store={store}>{element}</Provider>
    </ProvideAuth>
  )
}
