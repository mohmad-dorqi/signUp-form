import React ,{useState,useEffect} from 'react';
import styles from '../css/SignUp.module.css'
import { validate } from './validate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from './toast'
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [touch,setTouch]= useState({})
    const [data, setData] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
        isAccepted:false

    });
    const [errors,setErrors]=useState({})
    useEffect(()=>{
      setErrors(validate(data,'SignUp'))
     

    },[data ,touch])

   const changeHandler = event => {
    
    if(event.target.name ==="isAccepted"){
      
        setData({...data,[event.target.name]: event.target.checked})
    }else{
        setData({...data,[event.target.name]: event.target.value})
    }
        
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
                <h1>SignUP</h1>
                <div className={styles.feldStyle}>
                    <label>Name</label>
                    <input type='text' name='name' value={data.name} onChange={changeHandler} onFocus={tochHandeler}  />
                    {errors.name && touch.name && <span>{errors.name}</span>}
                </div>
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
                <div className={styles.feldStyle}>
                    <label>ConfirmPassword</label>
                    <input type='password' name='confirmPassword' value={data.confirmPassword} onChange={changeHandler} onFocus={tochHandeler}  />
                    {errors.confirmPassword && touch.confirmPassword &&  <span>{errors.confirmPassword}</span>}
                </div>
               
                     <div className={styles.rulesStyle}>
                          <label>Accepted rule</label>
                         <input type='checkbox' name='isAccepted' value={data.isAccepted} onChange={changeHandler} onFocus={tochHandeler} />
                  
                      </div>
               <div className={styles.feldStyle} >
                     {errors.isAccepted && touch.isAccepted &&  <span>{errors.isAccepted }</span>}
               </div>
               <div  className={styles.rulesStyle}>
                    <Link to='/login'>Login </Link>
                    <button type='submit'>SignUp</button>
               </div>
             
                


            </form>
            <ToastContainer />




        </div>
    );
};

export default SignUp;