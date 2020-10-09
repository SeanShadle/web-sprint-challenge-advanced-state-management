import React, {useEffect} from 'react'
import {fetchSmurf} from '../store/actions'
import Smurf from './Smurf'
import SmurfForm from './SmurfForm'
import {connect} from 'react-redux'

const Smurfs = props => {
    useEffect(() => {
        props.fetchSmurf()
    }, [])

    if(props.updated){
        props.fetchSmurf()
    }

    return (
        <div>
            <SmurfForm />
            {props.smurfData.map(smurf => (
                <Smurf
                    name={smurf.name}
                    age={smurf.age}
                    height={smurf.height}
                />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfData: state.smurfData,
        isFetching: state.isFetching,
        error: state.error,
        updated: state.updated
    }
}

export default connect(mapStateToProps, {fetchSmurf})(Smurfs)