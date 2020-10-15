import React from 'react';
import styles from './styles'
import PropTypes from 'prop-types'
import CloseIcon from '@material-ui/icons/Close';
import { withStyles, Modal} from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as ModalActions from '../../actions/modal'
const TaskModal = (props) => {
    const { open,  classes,component,modalActionCreator,title } = props;
    const {hideModal} = modalActionCreator;
    return (
        <Modal open={open} onClose={hideModal}>
            <div className={classes.modal}>
                <div className={classes.header}>
                    <span className={classes.title}>{title}</span>
                    <CloseIcon className={classes.icon} onClick={hideModal} />
                </div>
                <div className={classes.content}>
                    {component}
                </div>
            </div>
        </Modal>
    );
}

TaskModal.propTypes = {
    open: PropTypes.bool,
    classes: PropTypes.object,
    component: PropTypes.object,
    modalActionCreator: PropTypes.shape({
        hideModal: PropTypes.func,
    }),
    title: PropTypes.string
}

const mapStateToProps = (state)=>({
    open: state.modal.showModal,
    component: state.modal.component,
    title: state.modal.title,
})

const mapDispatchToProps = (dispatch)=>({
    modalActionCreator: bindActionCreators(ModalActions,dispatch)
})

const withConnect = connect(mapStateToProps,mapDispatchToProps)

export default compose(withStyles(styles),withConnect)(TaskModal);