import * as Types from './../constants/ActionType'

let data = JSON.parse(localStorage.getItem('tasks'));
let initState = data ? data : []

let myReducer = (state = initState, action) => {
    //console.log(action)
    switch (action.type) {
        case Types.LIST_ALL: {
            return state;
        }

        case Types.SAVE_TASK: {
            let { task } = action
            if (typeof task.status === 'string') {
                task.status = task.status === 'true' ? true : false
            }
            let newTask = {
                id: task.id,
                name: task.name,
                status: task.status
            }
            if (task.id ==='') {
              
                newTask.id = generateID();
                state.push(newTask);
            }
            else{
                let index = findTask(task.id,state);
                state[index] = task;
            }
            localStorage.setItem('tasks', JSON.stringify(state))
            return [...state];
        }

        case Types.UPDATE_STATUS: {
            let index = findTask(action.id, state);
            
            if (index !== -1) {
                // state[index].status = !state[index].status;
                // let clone = {...state[index]}
                // clone.status = !clone.status;
                // state[index] = clone
               // console.log(state)
                state[index] = {
                    ...state[index],
                    status: !state[index].status
                }
                //console.log(state)
            }
            localStorage.setItem('tasks', JSON.stringify(state))
            return [...state];
        }

        case Types.DELETE_TASK: {
            let index = findTask(action.id, state);
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('tasks', JSON.stringify(state))
            return [...state];
        }

        
        default: {
            return state;
        }
    }
}


let findTask = (id, tasks) => {
    let kq = -1;
    tasks.forEach((ele, index) => {
        if (ele.id === id) {
            kq = index;
        }

    })
    return kq;
}


let random1 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

let generateID = () => {
    return random1() + random1() + random1() + random1();
}

export default myReducer;