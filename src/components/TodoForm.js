import React from 'react'

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            textVal: ''
        }
    }
    changeText(val) {
        this.setState({
            textVal: val
        })
    }

    render() {
        return (
            <div>
                <input onChange={(event) => this.changeText(event.target.value)} />
                <button onClick={ () => this.props.addTask(this.state.textVal)}>Add</button>
            </div>
        )
    }
}

export default TodoForm