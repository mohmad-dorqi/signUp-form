import React ,{useState,useEffect} from 'react';
import styles from '../css/SignUp.module.css'
import { validate } from './validate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from './toast'
import { Link } from 'react-router-dom';

const Login = () => {
    const [touch,setTouch]= useState({})
    const [data, setData] = useState({
      
        email:'',
        password:'',
       

    });
    const [errors,setErrors]=useState({})
    useEffect(()=>{
      setErrors(validate(data,'Login'))
     

    },[data ,touch  ])

   const changeHandler = event => {
    
    setData({...data,[event.target.name]: event.target.value})
        
   }
   const tochHandeler=(event)=>{

    setTouch({...touch,[event.target.name]:true})


   }
   const submitHandler=event=>{
    event.preventDefault();
    if(!Object.keys(errors).length){
        notify('You are in Bro :)','success')
    }else{
        notify('Invalid Info Bro :(')
    }

   }
    return (
        <div className={styles.container}>

            <form onSubmit={submitHandler} className={styles.containerForm}>
                <h1>Login</h1>
               
                <div className={styles.feldStyle}>
                    <label>Email</label>
                    <input type='text' name='email' value={data.email} onChange={changeHandler} onFocus={tochHandeler} />
                    {errors.email && touch.email &&  <span>{errors.email}</span>}
                </div>
                <div  className={styles.feldStyle} >
                    <label>Password</label>
                    <input type='password' name='password' value={data.password} onChange={changeHandler} onFocus={tochHandeler}  />
                    {errors.password && touch.password &&  <span>{errors.password}</span>}
                </div>
            
               <div  className={styles.rulesStyle}>
                    <Link to='/src/Components/SignUp.js'>SignUP </Link>
                    <button type='submit'>Login</button>
               </div>
             
                


            </form>
            <ToastContainer />




        </div>
    );
};

export default Login;