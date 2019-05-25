import React, { useState, useEffect } from 'react';
import './App.css';
import './index.scss';

import ListUser from './components/ListUser';
import FormAddUser from './components/FormAddUser';
import FormEditUser from './components/FormEditUser';
import Footer from './components/Footer/Footer';

import { connect } from 'react-redux';
import { actSetTaskEditting } from './actions';

function isEmpty(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            return false;
        }
    }

    return JSON.stringify(obj) === JSON.stringify({});
}

function App(props) {

    const btnAddUserStyle = !isEmpty(props.taskEditting) ? 'btn btn-primary show' : 'btn btn-primary hide';
    return (
        <div className="App">
            {/* <div className="container">
                <h1>CRUD App with Hooks - Redux</h1>
                <div className="row">
                    <div className="col-md-6">
                        <button className={btnAddUserStyle} onClick={() => props.onSetTaskEditting()}>Add User</button>
                        <h2>{isEmpty(props.taskEditting) ? 'Add User' : 'Edit user'}</h2>
                        {isEmpty(props.taskEditting) ? <FormAddUser /> : <FormEditUser />}

                    </div>
                    <div className="col-md-6">
                        <h2>View users</h2>
                        <ListUser />
                    </div>
                </div>
            </div> */}
            <Footer/>            
        </div>
    );
}
const mapStateToProps = state => {
    return {
        users: state.users,
        taskEditting: state.taskEditting,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSetTaskEditting: () => {
            dispatch(actSetTaskEditting({}));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
