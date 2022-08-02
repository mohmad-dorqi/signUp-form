export const validate =(data,type)=>{
    const errors={}
    const regexEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const regexPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
   

    if(!data.email){
        errors.email="Email required"
    }else if(!regexEmail.test(data.email)){

        errors.email="Invalid Email"
        
    }else{
        delete errors.email
    }
    if(!data.password){
       errors.password="Password required"
    }else if(!regexPassword.test(data.password)){
        errors.password="Password Should at last 8 charecter "
    }else{
      delete  errors.password
    }
   if(type=== 'SignUp'){
    if(!data.name.trim()){
        errors.name="Username required"
      }else{
              delete errors.name
      }


    if(!data.confirmPassword){
        errors.confirmPassword="ConfirmPassword required"
    }else if (data.confirmPassword !== data.password){
        errors.confirmPassword = 'password not same'
    }else{
        delete errors.confirmPassword
    }
    if(data.isAccepted){
        delete errors.isAccepted
    }else{
        errors.isAccepted= 'Accepted the rule'
    }
   }

    return errors;
}