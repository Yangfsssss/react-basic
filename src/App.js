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
        { name: '米斯特吴', count: 50 },
        { name: 'Henry', count: 5 },
        { name: 'Hemiah', count: 15 },
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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, count: 50 },
        { name: 'Henry', count: 50000 },
        { name: 'Hemiah', count: 15 },
      ],
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px soild blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            changed={this.nameChangedHandler}
            name={this.state.persons[0].name}
            count={this.state.persons[0].count} />
          <Person
            myclick={this.switchNameHandler.bind(this, '米修missu')}
            name={this.state.persons[1].name}
            count={this.state.persons[1].count} />
          <Person
            name={this.state.persons[2].name}
            count={this.state.persons[2].count} >非常感谢</Person>
        </div>
      )
    }

    return (
      <div className="App" >
        <h1>Hello World</h1>
        {/* <button onClick={()=>this.switchNameHandler("米修")}>更改状态值</button> */}
        {/* <button style={style} onClick={this.switchNameHandler.bind(this, 'missu')}>更改状态值</button> */}
        <button style={style} onClick={this.togglePersonsHandler}>内容切换</button>
        {persons}
      </div>
    );
  }
}

export default App;
