import React ,{useState,useEffect} from 'react';
import styles from '../css/SignUp.module.css'
import { validate } from './validate';

const SignUp = () => {
    const [data, setData] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
        isAccepted:false

    });
    const [errors,setErrors]=useState({})
    useEffect(()=>{
      setErrors(validate(data))
      console.log(errors);

    },[data])

   const changeHandler = event => {
    
    if(event.target.name ==="isAccepted"){
      
        setData({...data,[event.target.name]: event.target.checked})
    }else{
        setData({...data,[event.target.name]: event.target.value})
    }
        console.log(data);
   }
    return (
        <div className={styles.container}>

            <div className={styles.containerForm}>
                <div>
                    <label>Name</label>
                    <input type='text' name='name' value={data.name} onChange={changeHandler} />
                </div>
                <div>
                    <label>Email</label>
                    <input type='text' name='email' value={data.email} onChange={changeHandler} />
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' name='password' value={data.password} onChange={changeHandler} />
                </div>
                <div>
                    <label>ConfirmPassword</label>
                    <input type='password' name='confirmPassword' value={data.confirmPassword} onChange={changeHandler} />
                </div>
               
                <div>
                    <label>Accepted rule</label>
                    <input type='checkbox' name='isAccepted' value={data.isAccepted} onChange={changeHandler} />
                </div>
             
                


            </div>




        </div>
    );
};

export default SignUp;