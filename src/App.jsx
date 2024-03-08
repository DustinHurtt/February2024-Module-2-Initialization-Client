import { useState, useContext } from 'react'
import { ProjectContext } from './context/project.context'

import './App.css'

function App() {

  const { projects } = useContext(ProjectContext)


  return (
    <div>

      {
        projects.length > 0 ?

        <>
          {
            projects.map((project) => {
              return(
                <div>
                  <h1>{project.title}</h1>
                  <p>{project.description}</p>
                </div>
              )
            })

          }
        </>
        : <p>Loading...</p>
      }

    </div>
  )
}

export default App
