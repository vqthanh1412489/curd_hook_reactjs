import React from 'react';
import useForm from '../Hooks/useForm';
import { connect } from 'react-redux';

import './index.scss';

import { actAddUsersRequest } from '../actions/index';


function FormAddUser(props) {
    const { values, handleChange, handleSubmit } = useForm(addUser);

    function addUser(){
        if (!values.username || !values.name) return;
        props.onAddUsers({ username: values.username, name: values.name })
    }
    return (
        <form onSubmit={e => handleSubmit(e)} className="formAdd">
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter username"
                    name="username"
                    value={values.username}
                    onChange={e => handleChange(e)}
                />
                <small className="form-text text-muted">Please Input Username</small>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Entar name"
                    name="name"
                    value={values.name}
                    onChange={e => handleChange(e)}
                />
            </div>
            <button type="submit" className="btn btn-primary">Add</button>
        </form>
    );
}

const mapStateToProps = state => {
    return {
       
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddUsers: (user) => {
            dispatch(actAddUsersRequest(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormAddUser);
