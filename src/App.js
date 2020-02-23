import React from 'react';
import './App.css';
import Person from './Person/Person'



class App extends React.Component {
  constructor(props) {
    super(props)

    // state:用于改变组件内容状态的值（动态）
    // props:用于组件通信进行传值
    this.state = {
      persons: [
        { id: 1, name: '米斯特吴', count: 50 },
        { id: 2, name: 'Henry', count: 5 },
        { id: 3, name: 'Hemiah', count: 15 },
      ],
      otherState: 'anything',
      showPersons: false
    }
  }

  switchNameHandler = (newName) => {
    // console.log('Hello');
    // this.state.persons[0].name = "米斯特"
    this.setState({
      persons: [
        { name: newName, count: 50 },
        { name: 'Henry', count: 50000 },
        { name: 'Hemiah', count: 15 },
      ],
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = { ...this.state.persons[personIndex] }

    person.name = event.target.value

    const persons = [...this.state.persons]

    persons[personIndex] = person

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons
    persons.splice(personIndex, 1)
    this.setState({
      persons: persons
    })
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px soild blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                changed={(event) => this.nameChangedHandler(event, person.id)}
                myclick={() => this.deletePersonHandler(index)}
                key={index}
                name={person.name}
                count={person.count} />
            })
          }
        </div>
      )

      style.backgroundColor = 'red'
    }

    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

    return (
      <div className="App" >
        <h1>Hello World</h1>
        <p className={classes.join(' ')}>Hi,React App</p>
        <button style={style} onClick={this.togglePersonsHandler}>内容切换</button>
        {persons}
      </div>
    );
  }
}

export default App;
