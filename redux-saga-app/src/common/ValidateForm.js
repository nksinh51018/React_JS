export const required = value => {
    let error = 'Vui long nhap tieu de';
    if (value !== null && typeof value !== 'undefined' && value.trim() !== '') {
        return null
    }
    return error;
}

export const minLength5 = value =>{
    let error = 'Vui long nhap lon hon 5 ki tu';
    if (value.length >=5) {
        return null
    }
    return error;
}