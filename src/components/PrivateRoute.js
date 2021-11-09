import React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
import { useAuth } from "../hooks/use-auth"
import { isLoggedIn } from "../utils/auth"

const PrivateRoute = ({ component: Component, location, ...rest }) => {

  const auth = useAuth()

  console.log(auth.user)

  if (!isLoggedIn() && location.pathname !== `/app/login`) {
    // If we’re not logged in, redirect to the home page.
    navigate(`/app/login`, { replace: true })
    return null
  }

  return <Component {...rest} />
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
}

export default PrivateRoute
