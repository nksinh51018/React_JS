import * as Types from './../constants/ActionType'
export const listAll = () => {
    return {
        type: Types.LIST_ALL,
    }
}

export const saveTask = (task) => {
    return {
        type: Types.SAVE_TASK,
        task,
    }
}

export const toggleForm = () => {
    return {
        type: Types.TOGGLE_FORM
    }
}

export const openForm = () => {
    return {
        type: Types.OPEN_FORM
    }
}

export const closeForm = () => {
    return {
        type: Types.CLOSE_FORM
    }
}

export const updateStatus = (id) => {
    return {
        type: Types.UPDATE_STATUS,
        id,
    }
}

export const deleteTask = (id) => {
    return {
        type: Types.DELETE_TASK,
        id,
    }
}


export const editTask = (task) => {
    return {
        type: Types.EDIT_TASK,
        task,
    }
}

export const filterTasks = (filter) => {
    return {
        type: Types.FILTER_TABLE,
        filter,
    }
}

export const searchTask = (keyword) => {
    return {
        type: Types.SEARCH,
        keyword,
    }
}

export const sortTask = (sort) => {
    return {
        type: Types.SORT,
        sort,
    }
}