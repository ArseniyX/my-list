export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("user")
    ? JSON.parse(window.localStorage.getItem("user"))
    : {}

export const setUser = user =>
  isBrowser() && window.localStorage.setItem("user", JSON.stringify(user))

export const isLoggedIn = () => {
  const user = getUser()
  return !!user.email
}

export const getUserId = () => {
  const user = getUser()
  return user.uid
}

export const logout = auth => {
  return new Promise(resolve => {
    auth.signout().then(function () {
      setUser({})
      resolve()
    })
  })
}
