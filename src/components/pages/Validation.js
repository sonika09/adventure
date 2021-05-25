

const Validation = (values) => {
    let errors={};
    if(!values.username){
        errors.username='name is required'
    }
    if(!values.email){
        errors.email="email is required"
    }
    if(!values.password){
        errors.password="password is required"
    }else if(values.password.length<5){
        errors.password="length must be 8 characters"
    }
    return errors;
}

export default Validation
