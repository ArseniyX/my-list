import React from "react"
import styled from "styled-components"
import usernameImg from "../images/username.svg"
import passwordImg from "../images/password.svg"

const InputContainer = styled.div`
  position: relative;
  margin: 0 auto;
`

const LabelImage = styled.label``

const Image = styled.img`
  width: 12px;
`

const ImageContainer = styled.div`
  display: inline-block;
  position: absolute;
  padding: 3px 15px;
  border-radius: 20px;
  background-color: rgb(94, 26, 147);
  height: 30px;
`

const Input = styled.input`
  padding-left: 45px;
  padding-bottom: 3px;
  border-radius: 20px;
  border: none;
  width: 190px;
  background: linear-gradient(90deg, rgb(105, 31, 146), rgb(209, 88, 157));
  outline: none;
  color: #fff;
  height: 30px;
  &::hover {
    background-color: #fff;
  }
`

const StyledInput = ({ type, register }) => {
  const getAlt = () => (type === "text" ? "username" : type)
  const pattern =
    type === "password"
      ? "(?=.*[0-9a-zA-Z]).{6,}"
      : ".*"

  let imageUrl

  switch (type) {
    case "text": {
      break
    }
    case "email": {
      imageUrl = usernameImg
      break
    }
    case "password": {
      imageUrl = passwordImg
      break
    }
    default: {
      imageUrl = usernameImg
      break
    }
  }

  return (
    <InputContainer>
      <LabelImage htmlFor={`${type}-input`}>
        <ImageContainer>
          <Image src={imageUrl} alt={getAlt()} />
        </ImageContainer>
      </LabelImage>
      <Input
        required
        minLength="6"
        pattern={pattern}
        {...register(type, { required: true, pattern, minLength: 6 })}
        type={type}
        id={`${type}-input`}
        
        placeholder={type}
        spellcheck="false"
      />
    </InputContainer>
  )
}

export default StyledInput
