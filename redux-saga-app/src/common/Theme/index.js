import {createMuiTheme} from '@material-ui/core/styles'

const theme = createMuiTheme({
    color:{
        primary: "#ef9a9a",
        secondary: '#ce93d8',
        error:'#9fa8da',
        textColor: 'white'
    },
    typography:{
        fontFamily: 'Roboto',
    },
    shape:{
        backgroundColor: '#81d4fa',
        color: '#80cbc4',
        borderColor: '#ccc',
        padding: 20,
        margin:10,
        borderRadius: 4
    }
})

export default theme