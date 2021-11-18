import React, { useEffect, useRef, useState } from "react"
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  setDoc,
  arrayUnion,
  updateDoc,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore"
// import { useCollection, useDocument } from "react-firebase-hooks/firestore"
import { useAuth, useFirestore } from "../hooks/use-auth"
import {
  NOTES_COLLECTION,
  PROJECTS_DOCUMENT,
  NOTES_DOCUMENT,
  USER_DATA_COLLECTION,
  PROJECTS_DETAILS,
} from "../utils/constantas"
import { navigate } from "@reach/router"
import { getUserId, logout } from "../utils/auth"
import styled from "styled-components"
import { StyledContainer } from "./Login"
import SearchBar from "./SearchBar"
import Projects from "./Projects"
import Layout from "./layout"

const NotesHome = () => {
  const db = useFirestore()
  const auth = useAuth()
  const uid = getUserId()
  const projectRef = useRef()

  const [projectNames, setProjectNames] = useState([])
  const [allProjects, setAllProjects] = useState([])

  const docRef = doc(
    db,
    USER_DATA_COLLECTION,
    uid,
    NOTES_COLLECTION,
    PROJECTS_DETAILS
  )
  useEffect(() => {
    const unsubscribe = onSnapshot(docRef, doc => {
      if (doc.exists()) {
        const { names } = doc.data()
        console.log(names, uid)
        setAllProjects(names)
        setProjectNames(names)
      } else {
        console.log("not exist")
        setDoc(docRef, {
          names: [],
        })
      }
    })
    return () => unsubscribe()
  }, [onAddProject])

  const onAddProject = async searchValue => {
    try {
      await setDoc(
        doc(db, USER_DATA_COLLECTION, uid, NOTES_COLLECTION, searchValue),
        {
          notes: [],
        }
      )
    } catch (e) {
      console.error(e)
    }

    try {
      await updateDoc(docRef, {
        names: arrayUnion(searchValue),
      })
      projectRef.current.scrollTo(0, projectRef.current.scrollHeight)
    } catch (e) {
      console.error(e)
    }
  }

  const filterProjects = filter => {
    const filteredProjects = allProjects.filter(name => name.includes(filter))
    setProjectNames(filteredProjects)
  }

  return (
    <Layout pageName="Projects">
      <Projects projectRef={projectRef} projectNames={projectNames} />
      <SearchBar onAddProject={onAddProject} filterProjects={filterProjects} searchType={"Project"} />
      <div></div>
    </Layout>
  )
}

export default NotesHome
