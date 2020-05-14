import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header'

function App() {

    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

    useEffect(() => {
        api.get('projects').then(response => {
            console.log(response);
        });
    }, []);

    function handleAddProject() {
        setProjects([...projects, `Novo projeto ${Date.now()}`]);   
        //'...projects' significa que estou trazendo o que essa variável já tem de conteúdo

        console.log(projects);
    }

    return (
        <>
            <Header title="Projects" />

            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    )
}

export default App;