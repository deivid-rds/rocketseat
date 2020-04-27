import React, { useState } from 'react';

import './App.css';
import backgroundImage from './assets/background.jpeg';

import Header from './components/Header'

function App() {

    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

    function handleAddProject() {
        setProjects([...projects, `Novo projeto ${Date.now()}`]);   
        //'...projects' significa que estou trazendo o que essa variável já tem de conteúdo

        console.log(projects);
    }

    return (
        <>
            <Header title="Projects" />

            <img width={300} src={backgroundImage} />

            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    )
}

export default App;