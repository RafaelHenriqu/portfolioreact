import { BiDollar } from "react-icons/bi";
import './App.css';
import Configs from './Components/Configs';
import Css from './Imagens/Css.png';
import Gmail from './Imagens/Gmail.png';
import HTML from './Imagens/Html.png';
import js from './Imagens/Js.png';
import Node from './Imagens/Node.png';
import React from './Imagens/React.png';
import Scss from './Imagens/Sass.png';

let Hora = new Date().getHours()

function App() {
  
  return (
 <>
    <Configs Hora={Hora} ></Configs>
    <p className='EsterEgg'>EsterEgg</p>
    
   <section id='Sobre-Min'>
    <div id='Perfil'></div>
    <h2>Sobre-Mim</h2>
   <p>Seja bem-vindo(a)! Meu nome é Rafael, tenho {new Date().getFullYear() - 2005} anos e gostaria de poder ajudá-lo(a)
    com seus projetos. Utilizando minhas habilidades e conhecimentos,
     posso oferecer soluções eficientes e criativas.
    Estou à disposição para discutir suas necessidades e contribuir para o sucesso de seus projetos.
    </p>
    <h2>Habilidades</h2>
    <div id='Habilidades'>
      
    <img src={HTML} title='HTML'></img>
    <img src={js} title='JavaScript'></img>
    <img src={React} title='React'></img>
    <img src={Css} title='Css'></img>
    <img src={Scss} title='Scss'></img>
    <img src={Node} title='Node.js'></img>
    
    </div>

    <h2>Projetos</h2>
    <a target="_blank"  href='https://rafaelhenriqu.github.io/Money-Conveter/'  ><p className="Project" title="Money-Conveter"><BiDollar/></p></a>
    <h2  >Contate-me</h2>
    <div id='Contate-me'>
    <a href="mailto:girafaeoficial@gmail.com?subject=Desenvolvedor Web&body=Olá Gostaria de le contratar"><img src={Gmail}></img></a>
    </div>
   </section>
 
 </>


  );
}

export default App;
