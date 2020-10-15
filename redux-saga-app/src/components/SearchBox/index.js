import React from 'react';
import { withStyles, TextField } from '@material-ui/core';
import styles from './styles';
import PropTypes from 'prop-types'
const SearchBox = (props) => {
    const { handleChange } = props;

    return (
        <TextField id="standard-basic"
            label="Search"
            margin='dense'
            onChange={handleChange}
        />
    );
}

SearchBox.propTypes = {
    classes: PropTypes.object,
    handleChange: PropTypes.func
}

export default withStyles(styles)(SearchBox);