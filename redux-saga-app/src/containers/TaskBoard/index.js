import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActions from '../../actions/modal';
import * as taskActions from '../../actions/task';
import SearchBox from '../../components/SearchBox';
import TaskForm from '../TaskForm';
import TaskList from '../../components/TaskList';
import { STATUSES } from '../../constaints';
import styles from './styles';
const TaskBoard = (props) => {
    const { classes } = props;
    // const [open, setopen] = useState(false);
    const { taskActionsCreators } = props;
    const { fetchListTask } = taskActionsCreators;
    useEffect(() => {
        fetchListTask();
    }, [fetchListTask]);

    const renderBoard = () => {
        const { listTask } = props;
        let xhtml = null;
        xhtml = (
            <>
                <Grid container spacing={2}>

                    {STATUSES.map((status, index) => {

                        const taskFiltered = listTask.filter(task => task.productStatus === status.value);

                        return (
                            <TaskList tasks={taskFiltered} status={status} key={status.value} />
                        )
                    })}
                </Grid>
            </>
        );
        return xhtml;
    }

    // const handleClose = () => {
    //     setopen(false);
    // }

    const openForm = () => {
        const { modalActionsCreators } = props;
        const { showModal, changeModalContent, changeModalTitle } = modalActionsCreators;
        showModal();
        changeModalTitle('Add new task')
        changeModalContent(<TaskForm />)
    }

    const renderSearchBox = () => {
        let xHmtl = <></>;
        xHmtl = (
            <SearchBox handleChange={handleFilter} />
        )
        return xHmtl;
    }

    const handleFilter = (e) => {
        const { value } = e.target;
        const { taskActionsCreators } = props;
        const { filterTask } = taskActionsCreators;
        filterTask(value)
    }


    return (
        <div className={classes.taskboard}>
            <div className='container'>
                <div className='row'>
                    <Button variant='contained' color='primary' className={classes.button} onClick={openForm}>
                        <AddIcon />
                        Add new job
                    </Button>
                </div>
                <div className='row'>
                    {renderSearchBox()}
                    {renderBoard()}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        listTask: state.task.listTask
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        taskActionsCreators: bindActionCreators(taskActions, dispatch),
        modalActionsCreators: bindActionCreators(modalActions, dispatch),
    }
}

TaskBoard.propTypes = {
    classes: PropTypes.object,
    taskActionsCreators: PropTypes.shape({
        fetchListTask: PropTypes.func,
        filterTask: PropTypes.func,
    }),
    modalActionsCreators: PropTypes.shape({
        showModal: PropTypes.func,
        hideModal: PropTypes.func,
        changeModalTitle: PropTypes.func,
        changeModalContent: PropTypes.func,
    }),
    listTask: PropTypes.array,
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskBoard));