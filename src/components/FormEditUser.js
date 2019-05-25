import React, { useState, useEffect } from 'react';

import './index.scss';
import { connect } from 'react-redux';

import { actUpdateUserRequest } from '../actions/index';

function FormEditUser(props) {
    const [user, setUser] = useState(props.taskEditting);

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    useEffect(() => {
        setUser({ ...user, username: props.taskEditting.username, name: props.taskEditting.name });
    }, [props.taskEditting])

    const handleSubmit = e => {
        e.preventDefault();
        props.onUpdateUser(user.id, user);
    }

    return (
        <form onSubmit={handleSubmit} className="formUpdate">
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter new username"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                />
                <small className="form-text text-muted">Please Input Username</small>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter new name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">Update</button>
        </form>
    );
}

const mapStateToProps = state => {
    return {
        taskEditting: state.taskEditting,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onUpdateUser: (id, user) => {
            dispatch(actUpdateUserRequest(id, user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormEditUser);
