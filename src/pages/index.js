import React, { useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// import { useSelector } from "react-redux"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import user, { userSelector, setCurrentUser } from "../state/user"
import { useAuth } from "../hooks/use-auth"
import { Router, Redirect, navigate, Route, Switch } from "@reach/router"
import Login from "../components/Login"

const IndexPage = () => {
  const auth = useAuth()
  // console.log(user)
  useEffect(() => {
    // navigation()
  }, [])

  // if (!auth.user && window.location.href !== `/app/login`) {
  //   // If we’re not logged in, redirect to the home page.
  //   navigate(`/app/login`, { replace: true })
  //   return null
  // }

  return (
    <Layout>
      <Router>
        <Login path="/auth" />
      </Router>
      <p>{auth?.user?.email}</p>
    </Layout>
  )
}

export default IndexPage
