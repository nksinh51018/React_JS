import React from 'react';
import { Box, Grid, CircularProgress, withStyles } from '@material-ui/core';
import styles from './styles';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import * as UIActions from '../../actions/UI'
import { bindActionCreators, compose } from 'redux';
const GlobalLoading = (props) => {

    const { classes, isLoadding } = props;
    let xHtml = <></>
    if (isLoadding) {
        xHtml = (<Box width="100%" className={classes.globalLoading}>
            <Grid container spacing={2} alignContent='center' justify='center' className={classes.globalGridLoading}>
                <CircularProgress />
            </Grid>
        </Box>)
    }
    return xHtml;
}

GlobalLoading.propTypes = {
    classes: PropTypes.object,
    isLoadding: PropTypes.bool,
}

const mapStateToProps = (state) => ({
    isLoadding: state.ui.isLoadding,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    uiActionCreators: bindActionCreators(UIActions, dispatch)
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
export default compose(withStyles(styles), withConnect)(GlobalLoading)