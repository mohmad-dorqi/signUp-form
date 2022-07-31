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
     

    },[data])

   const changeHandler = event => {
    
    if(event.target.name ==="isAccepted"){
      
        setData({...data,[event.target.name]: event.target.checked})
    }else{
        setData({...data,[event.target.name]: event.target.value})
    }
        
   }
   const [touch,setTouch]= useState({})
   const tochHandeler=(event)=>{

    setTouch({...touch,[event.target.name]:true})


   }
    return (
        <div className={styles.container}>

            <div className={styles.containerForm}>
                <div>
                    <label>Name</label>
                    <input type='text' name='name' value={data.name} onChange={changeHandler} onFocus={tochHandeler}  />
                    {errors.name && touch.name && <span>{errors.name}</span>}
                </div>
                <div>
                    <label>Email</label>
                    <input type='text' name='email' value={data.email} onChange={changeHandler} onFocus={tochHandeler} />
                    {errors.email && touch.email &&  <span>{errors.email}</span>}
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' name='password' value={data.password} onChange={changeHandler} onFocus={tochHandeler}  />
                    {errors.password && touch.password &&  <span>{errors.password}</span>}
                </div>
                <div>
                    <label>ConfirmPassword</label>
                    <input type='password' name='confirmPassword' value={data.confirmPassword} onChange={changeHandler} onFocus={tochHandeler}  />
                    {errors.confirmPassword && touch.confirmPassword &&  <span>{errors.confirmPassword}</span>}
                </div>
               
                <div>
                    <label>Accepted rule</label>
                    <input type='checkbox' name='isAccepted' value={data.isAccepted} onChange={changeHandler} onFocus={tochHandeler} />
                    {errors.isAccepted && touch.isAccepted &&  <span>{errors.isAccepted }</span>}
                </div>
             
                


            </div>




        </div>
    );
};

export default SignUp;