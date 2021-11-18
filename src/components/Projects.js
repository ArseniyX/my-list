import { Link } from "@reach/router"
import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import folder from "../images/folder.svg"
import Folder from "./Folder"

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: flex-start;
  overflow-y: auto;
  max-height: 280px;
`

const ProjectWrapper = styled.div`
  overflow-y: auto;
  height: 50px;
  margin-top: 20px;
  font-size: 14px;
  color: #000;
`

const Projects = ({ projectNames, projectRef }) => {
  return (
    <ProjectsContainer ref={projectRef}>
      {projectNames?.map((projectName) => (
        <Folder key={projectName.split(' ').join('-')}>
          <ProjectWrapper>{projectName}</ProjectWrapper>
        </Folder>
      ))}
    </ProjectsContainer>
  )
}

export default Projects
