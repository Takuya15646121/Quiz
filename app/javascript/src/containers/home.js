import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }
    
    componentWillReceiveProps(nextProps) {
        
    }

    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" color="inherit">
                    クイズ作成アプリ
                </Typography>
                </Toolbar>
            </AppBar>
         )
    }
}
