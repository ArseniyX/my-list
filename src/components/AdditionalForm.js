import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 230px;
  margin: 0 auto;
`;

const RememberMeLabel = styled.div`
  font-family: "Glacial Indifference";
  font-size: 10px;
  text-transform: none;

  /* identical to box height */
  color: rgba(0, 0, 0, 0.61);
`

const RememberMeCheckBox = styled.input`
  margin: auto 0;
  margin-right: 5px;
`;

const ForgotPassLink = styled.p`
  font-family: "Glacial Indifference";
  text-transform: none;
  text-decoration: none;
  font-size: 10.5px;
  line-height: 12px;
  margin: auto 0;

  color: rgba(0, 0, 0, 0.61);
`

const LabelWrapper = styled.label`
  margin: auto 0;
  display: flex;
`

const AdditionalForm = () => {
  return (
    <Container>
      <LabelWrapper>
        <RememberMeCheckBox type="checkbox" />
        <RememberMeLabel>Remember</RememberMeLabel>
      </LabelWrapper>
      <ForgotPassLink>Forgot Password?</ForgotPassLink>
    </Container>
  );
};

export default AdditionalForm;
