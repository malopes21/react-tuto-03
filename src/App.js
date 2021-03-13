import React from 'react'
import Table from './Table'

class App extends React.Component {
    render() {

        const characters = [
            {
                name: 'Marcos Lopes Silva',
                job: 'Professor TI'
            },
            {
                name: 'Fulano de Tal',
                job: 'Trabalhador de Encanamento'
            },
            {
                name: 'Beltrano o Tal',
                job: 'Atendimento a Cliente'
            }
        ]

        return (
            <div className="container">
                <Table characterData ={characters}/>
            </div>
        )
    }
}

export default App