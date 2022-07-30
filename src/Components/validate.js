const validate =(data)=>{
    const errors={}
    const regexEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const regexPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    if(!data.name.trim()){
      errors.name="Username required"
    }else{
            delete errors.name
    }

    if(!data.email){
        errors.email="Email required"
    }else if(!data.email.test(regexEmail)){

        errors.email="Invalid Email"
        
    }else{
        delete errors.email
    }
    if(!data.password){
       errors.password="Password required"
    }else if(!data.password.test(regexPassword)){
        errors.password="Password Should at last 8 charecter "
    }else{
      delete  errors.password
    }
    
}