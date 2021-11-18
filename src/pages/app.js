import React from "react"
import { navigate, Router } from "@reach/router"
import Login from "../components/Login"
import PrivateRoute from "../components/PrivateRoute"
import { useAuth } from "../hooks/use-auth"
import { logout } from "../utils/auth"
import NotesHome from "../components/ProjectsPage"
import ProjectPage from "../components/NotesPage"
import { ROUTES } from "../utils/constantas"

const App = () => {
  const auth = useAuth()
  const Test = ({ id }) => (
    <div>
      <button onClick={() => logout(auth).then(() => navigate(ROUTES.LOGIN))}>
        singout
      </button>
      <p>{id}</p>
    </div>
  )
  return (
    <>
      {/* <Status /> */}
      <Router>
        <Login path={ROUTES.LOGIN} />
        <PrivateRoute path={ROUTES.PROJECTS} component={NotesHome} />
        <PrivateRoute path={ROUTES.PROJECT_NAME} component={ProjectPage} />
      </Router>
    </>
  )
}

export default App
