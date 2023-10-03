
import "../style/inicio.css"
import Link from 'next/link';



const Inicio = () => {


 
  return (
   
     <div className="container">
      <div className="forma1">
        <h1>ChatGPT</h1>
        <u></u>
        <h1 id="frase" className="frase">
        eres los que quieres ser
        </h1>
        <div className="cambios">
          <button id="agregar-frase">
            Agregar Frase
          </button>
          <button id="frase-nueva" >
            Frase Nueva
          </button>
          <button id="reiniciar" >
            Reiniciar
          </button>
        </div>
        <Link href="/Api">
        <button className="clima">Consultar clima</button>
          </Link>
         
    
      </div>
      <div className="forma2">
        <div className="movement">
          <h1>Get started</h1>
          <div className="union">
          <Link href="/sesion">
          <button>Log in</button>
          </Link>
      
          <Link href="/nosesion">
          <button>Sing up</button>
          </Link>
            
            
          </div>
        </div>
        <img src="./assets/chat gpt.png" alt="" />
        
      </div>
    </div>
  
   
  );
};

export default Inicio;
