import React, { Component } from 'react';
import './NoteForm.css'

class NoteForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newContent: ''
        };
    }

    handleChange = e => {
        this.setState({
            newContent: e.target.value,
        })
        console.log(e.target.value)
    }

    handleSubmit = () => {
        this.props.addNote(this.state.newContent)

        this.setState({
            newContent: '',
        })
    }
    render() {
        return (
                <div className="formWrapper">
                    <input type="text" className="noteInput" placeholder="Write note here ..." value={this.state.newContent}
                    onChange={this.handleChange}
                    />
                    <button className="noteButton" onClick={this.handleSubmit}>Add</button>
                </div>
        );
    }
}

export default NoteForm;
