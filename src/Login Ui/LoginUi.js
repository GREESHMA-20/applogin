import './LoginUi.css';

function LoginUi() {
  return (
    <div className="main">
     <div className="sub-main">
       

         <div>
           <h1>Login Page</h1>
           <div>
             
             <input type="text" placeholder="user name / e-mail" className="name"/>
           </div>
           <div className="second-input">
            
             <input type="password" placeholder="password" className="name"/>
           </div>
          <div className="login-button">
            <button><a href="#"> Login </a></button>
          </div>
           
            <p className="link">
              <a href="#">Forgot password ?</a> Or <a href="#">Sign Up</a>
            </p>
           
 
         </div>
       
       

     </div>
    </div>
  );
}

export default LoginUi;
