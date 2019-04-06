import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Switch, Redirect, Route } from 'react-router';

import * as actionCreator from '../actions'
import Home from './home'

class Login extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }
    
    componentWillReceiveProps(nextProps) {
        
    }

    handleToHome = () => {
        this.props.history.push('/home/index')
    }

    render() {
        const loading = this.props.isLoading ? <CircularProgress /> : ""
        const isEmpty = this.props.id === "" || this.props.password === ""
        if(this.props.token != "") {
            this.handleToHome()
        }
        return (
            <div>
                <div>
                    <TextField
                        id="standard-name"
                        label="ID"
                        onChange={(event) => this.props.editId(event.target.value)}
                        margin="normal"
                        variant="outlined"
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                        onChange={(event) => this.props.editPassword(event.target.value)}
                    />
                </div>
                <div >
                    <Button 
                        variant="outlined" 
                        color="primary" 
                        disabled={isEmpty}
                        onClick={()=>this.props.requestLogin(this.props.id, this.props.password)}
                    >
                        ログイン
                    </Button>
                </div>
                <div>
                    {loading}
                </div>
                <div>
                    {this.props.token}
                </div>
            </div>
        )
    }
}

export default connect(
    state => state.login,
    dispatch => bindActionCreators(actionCreator.loginActionCreator, dispatch)
)(Login)