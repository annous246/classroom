import React, { useEffect, useState,useRef } from 'react'
import styles from "./LoginPage.module.css"
import logo from './assets/logo.png'



function LoginPage() {
    const [password,setPassword]=useState<string>('')
    const [email,setEmail]=useState<string>('')
    const deadItem=useRef<HTMLParagraphElement|null>(null)
    const deadItem2=useRef<HTMLParagraphElement|null>(null)


function handlePassword(e:any){
        setPassword(e.target.value)
    
}


function handleEmail(e:any){
        setEmail(e.target.value)
    
}





    useEffect(()=>{
      if(!password.length){
          if(deadItem.current){
        
            deadItem.current.style.removeProperty('transform');
        
        }
      }
        else{
            if(deadItem.current){
            deadItem.current.style.setProperty('transform', 'translate(-100%, -379%)', 'important');
        
            }
        }

    },[password])

    useEffect(()=>{
       if(!email.length){
        
        if(deadItem2.current){
      
            deadItem2.current.style.removeProperty('transform');
        
        }
       }
       else{
        
        if(deadItem2.current){
            deadItem2.current.style.setProperty('transform', 'translate(-150%, -379%)', 'important');
        
            }
       }
    },[email])
  return (
    <div id={styles.container}>
        <div id={styles.loginContainer}>
            <nav id={styles.mainNav}>
                <img id={styles.logo} src={logo}/>
                <button id={styles.register} className={styles.authBtn}>Register</button>
                
            </nav>
            <main id={styles.loginMain}>
                <section id={styles.loginSection}>
                    <div id={styles.loginLinks}>
                        <h5>Login to your account</h5>
                        <div id={styles.links}>
                            <p>Login with </p>
                            <ul>
                                <li id={styles.google}><a></a></li>
                                <li id={styles.facebook}><a></a></li>
                                <li id={styles.linkedin}><a></a></li>
                            </ul>
                        </div>
                    </div>
                    <form id={styles.loginForm}>
                        <div id={styles.loginLinks}></div>
                        <div className={styles.inputSpan}>
                        <input  onChange={handleEmail} value={email} id={styles.emailInput} type="email" />
                        <p  ref={deadItem2} id={styles.deadItem}>Your Email</p>
                        </div>
                        <div className={styles.inputSpan}>
                        <input  onChange={handlePassword} value={password} id={styles.passwordInput} type="password" />
                        <p ref={deadItem} id={styles.deadItem2}>Your Passwrod</p>
                        </div>
                        <div id={styles.loginControls}>
                            <a href='#'>Forgot Password ?</a>
                            <button className={styles.authBtn} id={styles.loginBtn}>Login</button>
                        </div>

                    </form>
                </section>
                <section id={styles.imageSection}></section>
            </main>
            <nav id={styles.lastNav}>
                <ul>
                    <li><p>@Copyright ElearningIndustries</p></li>
                    <li><a href='#'>Terms and Conditions</a></li>
                    <li><a href='#'>Privacy Policy</a></li>
                    <li><a href='#'>Help</a></li>
                </ul>
                
            </nav>

        </div>

    </div>
  )
}

export default LoginPage;