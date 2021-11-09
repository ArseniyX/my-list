import React from "react"
import { navigate, Router } from "@reach/router"
import Layout from "../components/layout"
import Login from "../components/Login"
import PrivateRoute from "../components/PrivateRoute"
import { useAuth } from "../hooks/use-auth"
import { logout } from "../utils/auth"

const App = () => {
  const auth = useAuth()
  const Profile = () => (
    <div>
      <button
        onClick={() => logout(auth).then(() => navigate(`/app/login`))}
      >
        singout
      </button>
    </div>
  )
  return (
    <>
      {/* <Status /> */}
      <Router>
        <PrivateRoute path="/app/profile" component={Profile} />
        <Login path="app/login" />
      </Router>
    </>
  )
}

export default App
