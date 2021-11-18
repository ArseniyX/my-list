import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import AdditionalForm from "./AdditionalForm"
import StyledInput from "./StyledInput"
import authImage from "../images/login.svg"
import { set, useForm } from "react-hook-form"
import { navigate } from "gatsby"
import { userSelector, setCurrentUser } from "../state/user"
import { useAuth } from "../hooks/use-auth"
import { isLoggedIn, setUser } from "../utils/auth"
import Layout from "./layout"
import { PROJECT_PATH, ROUTES } from "../utils/constantas"

export const StyledContainer = styled.div`
  position: relative;
  margin: 30px auto;
  width: 500px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`

const AuthImage = styled.img`
  margin-bottom: -7px;
`

const AuthWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const AuthTitleContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 44px 60px;
`

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 5px;
  line-height: 1.7;
  cursor: pointer;
`

const TitleSpan = styled.span`
  font-size: ${({ size }) => size};
`

const Description = styled.p`
  font-family: "Glacial Indifference";
  font-size: 10px;
  color: #fff;
  opacity: 0.7;
  letter-spacing: 1px;
  margin: auto;
  line-height: 1.7;
`

const AuthForm = styled.form`
  text-align: center;
  text-transform: uppercase;
  font-family: "Caviar Dreams";
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  padding: 25px 0;
`

const FormTitle = styled.h2`
  word-spacing: 3px;
  color: rgb(150, 66, 154);
  font-size: 20px;
  margin: 0 auto;
`

const SubmitButton = styled.button`
  text-transform: uppercase;
  font-size: 12px;
  font-family: "Caviar Dreams";
  margin: 0 auto;
  height: 32px;
  color: #fff;
  background: linear-gradient(rgb(87, 25, 136), rgb(21, 16, 57));
  border: none;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: rgb(21, 16, 57);
  }
`

const ErrorContainer = styled.div`
  color: red;
  font-weight: bold;
  font-size: 12px;
  background-color: rgb(87, 25, 136);
  width: 200px;
  margin: 0 auto;
`

const Login = () => {
  if (isLoggedIn()) {
    navigate(PROJECT_PATH)
  }

  const [errorWrongPass, setErrorWrongPass] = useState(false)
  const auth = useAuth()
  const { handleSubmit, register } = useForm()

  const onSubmit = async data => {
    await auth
      .signin(data.email, data.password)
      .then(user => {
        console.log("login ")
        setUser(user)

        navigate(ROUTES.PROJECTS)
      })
      .catch(error => {
        console.log(error.code)
        if (error.code === "auth/user-not-found") {
          auth
            .signup(data.email, data.password)
            .then(user => {
              console.log("created ")
              setUser(user)
              navigate(ROUTES.PROJECTS)
            })
            .catch(error => {
              console.log(error)
            })
        }

        if (error.code === "auth/wrong-password") {
          setErrorWrongPass(true)
        }
      })
  }

  const test = () => {
    console.log(auth)
  }

  return (
    <Layout>
      <AuthImage src={authImage} />
      <AuthWrapper>
        <AuthTitleContainer>
          <Title>
            <TitleSpan size={"13px"}>Welcome to the</TitleSpan>
            <TitleSpan size={"31px"}>my notes</TitleSpan>
          </Title>
          <Description>
            Sed do eiusmod tempor incididunt ut labore et dolore magn aliqua.
            tempor incididunt ut labore et magn aliqua
          </Description>
        </AuthTitleContainer>
        <AuthForm onSubmit={handleSubmit(onSubmit)}>
          <FormTitle>User login</FormTitle>
          <StyledInput type={"email"} register={register} />
          <StyledInput type={"password"} register={register} />
          <AdditionalForm />
          <SubmitButton type="submit" onClick={test}>
            Login - Sign up
          </SubmitButton>
          <ErrorContainer>{errorWrongPass && "Wrong Password!"}</ErrorContainer>
        </AuthForm>
      </AuthWrapper>
    </Layout>
  )
}

export default Login
