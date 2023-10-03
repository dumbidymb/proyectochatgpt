
import Link from 'next/link';


const Recuadrodos = () =>{
    return(
    <div>
        <div class="containerpadre">
        
        <img class="logop" src="/assets/logo chat gpt.png" alt=""/>
        <h1 class="bienvenida">Create your account</h1>
        <h4>Note that phone verification may be required for signup. Your number will only be used to verify your identity for security purposes.</h4>
        <input id="email" class="email" type="email" placeholder="Email address" inputmode="email"/>
        <button id="signup" class="continue">Continue</button>
        <h1  class="dont">You have an account?<Link href="/sesion">
        Log in
          </Link> 
      
    
        </h1>
        <img class="or" src="/assets/or chat .png" alt=""/>    
        <button class="redes"><img class="logotipos" src="/assets/google.png" alt=""/> Continuar con Google</button>
<button class="redes2"><img class="logotipos" src="/assets/microsoft.png" alt=""/> Continuar con Microsoft Account</button>
<button class="redes3"><img class="logotipos" src="/assets/logotipo-de-apple.png" alt=""/>Continuar con Apple</button>

    </div>
        
    </div>
          
    
    
    
    );
    
    };
export default Recuadrodos