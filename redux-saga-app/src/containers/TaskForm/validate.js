const validate = values =>{
    const error = {};
    const {title} = values;
    if(!title){
        error.title = 'nhap tieu de'
    }

    return error
}

export default validate