import { createContext, useEffect, useState } from "react";

import { BACKEND_URL } from "../services/BACKEND_URL";

import axios from 'axios'

const ProjectContext = createContext()

const ProjectProvider = ({ children }) => {


    const [ projects, setProjects ] = useState([])


    useEffect(() => {

        axios.get(BACKEND_URL + '/projects')
            .then((response) => {
                console.log("These are the projects ===>", response.data)
                setProjects(response.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])

    return (
        <ProjectContext.Provider value={{ projects, setProjects }}>
            {children}
        </ProjectContext.Provider>
    )
}

export { ProjectContext, ProjectProvider }