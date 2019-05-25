import React, { useEffect } from 'react';
// import { createSelector } from 'reselect';
import { connect } from 'react-redux';

import { actFetchUsersRequest, actDelUserRequest, actUpdateUserRequest, actSetTaskEditting } from '../actions/index';

function ListUser(props) {
    const { users } = props;
    useEffect(() => {
        props.onFetchUsers();
    }, []);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Username</th>
                    <th scope="col">Name</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.length > 0 ? (
                        users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index}</th>
                                    <td>{user.username}</td>
                                    <td>{user.name}</td>
                                    <td>
                                        <button className="btn btn-info"
                                            onClick={() => props.onSetTaskEditting(user)}
                                        >Update</button>
                                        <button className="btn btn-danger"
                                            onClick={() => props.onDelUser(user.id)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                            <tr>
                                <td colSpan={3}>No users</td>
                            </tr>
                        )
                }

            </tbody>
        </table>
    );
}

const mapStateToProps = state => {
    return {
        users: state.users,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFetchUsers: () => {
            dispatch(actFetchUsersRequest());
        },
        onDelUser: id => {
            dispatch(actDelUserRequest(id));
        },
        onUpdateUser: (id, user) => {
            dispatch(actUpdateUserRequest(id, user));
        },
        onSetTaskEditting: (task) => {
            dispatch(actSetTaskEditting(task))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListUser);