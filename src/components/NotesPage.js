import React from "react"
import styled from "styled-components"
import Layout from "./layout"
import SearchBar from "./SearchBar"

const NotesHeader = styled.h2`
  font-family: "Caviar Dreams";
  color: #fff;
  margin-left: 20px;
`

const ProjectPage = ({ projectName }) => {
  return (
    <Layout pageName={"Notes"}>
      <NotesHeader>Project: {projectName}</NotesHeader>
      <SearchBar searchType={"Note"} />
    </Layout>
  )
}

export default ProjectPage
