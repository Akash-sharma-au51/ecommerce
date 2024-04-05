import React, { useState } from 'react'


const Login = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginhandle = ()=>{
        setIsLogin(!isLogin)
    }
    
  return (
    <div>
        <div className='title'>
        <h1>{isLogin?"Login":"SignUp"} form</h1>
        </div>
        <form >
                    {!isLogin && (
                        <div className="form-control">
                            <label>Fullname</label><br />
                            <input value={fullname} onChange={(e) => setFullname(e.target.value)} type="text" required />
                        </div>
                    )}
                    <div className="form-control">
                        <label>Email</label><br />
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
                    </div>
                    <div className="form-control">
                        <label>Password</label><br />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className='btn'>
                    <button type="submit" onClick={loginhandle}>{isLogin ? "Login" : "Signup"}</button>
                    </div>
                    <div className="form-help">
                        <div className="remember-me">
                            <label htmlFor="remember-me">Remember me</label>
                            <input type="checkbox" id="remember-me" />
                        </div>
                        <a href="/aboutus">Need help?</a>
                    </div>
                </form>
      
    </div>
  )
}

export default Login
