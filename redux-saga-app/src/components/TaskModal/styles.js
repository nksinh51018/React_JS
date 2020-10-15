const styles = (theme)=>({
    modal:{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
    },
    header:{
        backgroundColor: theme.color.primary,
        color: theme.color.textColor,
        padding: theme.spacing(2),
        fontWeight: 700,
        display:'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    icon:{
        cursor: 'pointer',
        fontSize: 30
    },
    content:{
        padding: theme.spacing(2),
    }
})

export default styles;