import "../style/recuadro.css"

import Link from 'next/link';




const Recuadro = () =>{
    return(
    <div className="contenedor">
     <div class="containerpadre">
        
        <img class="logop" src="/assets/logo chat gpt.png" alt=""/>
        <h1 class="bienvenida">Welcome back </h1>
        <input id="loginEmail" class="email" type="email" placeholder="Email address"/>
        <button id="login" class="continue">continue </button>
        <h1  class="dont">Don't have an account? 
        <Link href="/nosesion">
        Sing up
          </Link>
      
    
        </h1>
        <img class="or" src="/assets/or chat .png" alt=""/>    
        
        <button class="redes"><img class="logotipos" src="/assets/google.png" alt=""/> Continuar con Google </button>
<button class="redes2"><img class="logotipos" src="/assets/microsoft.png" alt=""/> Continuar con Microsoft Account </button>
<button class="redes2"><img class="logotipos" src="/assets/logotipo-de-apple.png" alt=""/>Continuar con Apple </button>

    </div>
        
    </div>
          
    
    
    
    );
    
    };
    export default Recuadro;