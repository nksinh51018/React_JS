import { Box, Button, Grid, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import * as ModalActions from '../../actions/modal'
import * as TaskActions from '../../actions/task'
import { reduxForm, Field } from 'redux-form'
import renderTextField from '../../components/FormHelper/TextField'
// import { minLength5, required } from '../../common/ValidateForm';
import validate from './validate'
const TaskForm = (props) => {

    const { classes, modalActionCreator, handleSubmit, invalid, submitting } = props;
    const { hideModal } = modalActionCreator;

    const handleSubmitForm = (data) => {
        const {taskActionCreator} = props;
        const {addTask} = taskActionCreator;
        const {title,description} = data
        addTask(title,description)
    }

    return (
        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <Grid container>
                <Grid item md={12}>
                    {/* <TextField id="standard-basic" label="Title" className={classes.TextField} /> */}
                    <Field id='title'
                        label='Title'
                        className={classes.TextField}
                        margin='normal'
                        name='title'
                        component={renderTextField} 
                        // validate={[required,minLength5]}
                        />
                </Grid>
                <Grid item md={12}>
                    <Field id='description'
                        label='description'
                        className={classes.TextField}
                        margin='normal' name='description'
                        component={renderTextField}
                        multiline />
                </Grid>
                <Grid item md={12}>
                    <Box display="flex" flexDirection="row-reverse" m={1}>
                        <Button color='primary'
                            variant="contained"
                            type='submit' 
                            disabled = {invalid || submitting}>Lưu lại</Button>
                        <Button color='secondary'
                            variant="contained"
                            onClick={hideModal}>Hủy</Button>
                    </Box>
                </Grid>
            </Grid>
        </form>

    );
}

TaskForm.propTypes = {
    classes: PropTypes.object,
    modalActionCreator: PropTypes.shape({
        hideModal: PropTypes.func,
    }),
    taskActionCreator: PropTypes.shape({
        addTask: PropTypes.func,
    }),
    handleSubmit: PropTypes.func,
    invalid: PropTypes.bool,
    submitting: PropTypes.bool,
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    modalActionCreator: bindActionCreators(ModalActions, dispatch),
    taskActionCreator: bindActionCreators(TaskActions,dispatch)
})

const FORM_NAME = 'TASK_MANAGEMENT'

const withConnect = connect(mapStateToProps, mapDispatchToProps)

const withForm = reduxForm({
    form: FORM_NAME,
    validate,

})

export default compose(withStyles(styles), withConnect, withForm)(TaskForm);
