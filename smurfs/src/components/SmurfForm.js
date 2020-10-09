import React, {useState} from 'react'
import {addSmurf} from '../store/actions'
import {connect} from 'react-redux'

const SmurfForm = props => {
    const [formState, setFormState] = useState({
        name: '',
        age: '',
        height: '',
    })

    const inputChange = e => {
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    const formSubmit = e => {
        props.addSmurf(formState)
    }

    return (
        <div className="form-container">
            <form onSubmit={formSubmit}>
                <div className="form-name">
                    <label htmlFor="name">
                        <input
                            placeholder="Smurf Name"
                            type="text"
                            name="name"
                            onChange={inputChange}
                            value={formState.name}
                        />
                    </label>
                </div>
                <div className="form-age">
                    <label htmlFor="age">
                        <input
                            placeholder="Smurf Age"
                            type="text"
                            name="age"
                            onChange={inputChange}
                            value={formState.age}
                        />
                    </label>
                </div>
                <div className="form-height">
                    <label htmlFor="height">
                        <input
                            placeholder="Smurf Height (cm)"
                            type="text"
                            name="height"
                            onChange={inputChange}
                            value={formState.height}
                        />
                    </label>
                </div>
                <button type="submit">Add Smurf</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        addSmurf: state.addSmurf
    }
}

export default connect(mapStateToProps, {addSmurf})(SmurfForm)