import React from 'react'
import {deleteSmurf} from '../store/actions'
import {connect} from 'react-redux'

const Smurf = (props) => {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Height: {props.height}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        deleteSmurf: state.deleteSmurf
    }
}

export default connect(mapStateToProps, {deleteSmurf})(Smurf)