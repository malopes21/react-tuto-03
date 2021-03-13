import React from 'react'
import Table from './Table'

class App extends React.Component {
    removeCharacter = (index) => {
        const {characters} = this.state
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            })
        })
    }
    state = {
        characters: [
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
    }
    render() {
        const {characters} = this.state
        return (
            <div className="container">
                <Table characterData ={characters}
                    removeCharacter={this.removeCharacter}/>
            </div>
        )
    }
}

export default App