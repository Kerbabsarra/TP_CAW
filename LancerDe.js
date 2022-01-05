
import {  useState } from 'react';
import De from './De';

const LancerDe = () => {

   const [etatDes,setEtatDes]= useState({
       
       first:0,
       second:1,
       gameCounter:0,
       score:0,
   })
 
   
   const lancer =()=>
    {
    if (etatDes.gameCounter<10){
      if (etatDes.first===etatDes.second){
        setEtatDes(
            {
            first: Math.floor(Math.random()*5),
            second :Math.floor(Math.random()*5),
            gameCounter:etatDes.gameCounter+1,
            score:etatDes.score+1,
           
  
          })
    }else {
        setEtatDes(
            {
            first: Math.floor(Math.random()*5),
            second :Math.floor(Math.random()*5),
            gameCounter:etatDes.gameCounter+1,
            score:etatDes.score-1,
           
  
          })
    }//else 
}

   }//lancer
   const reset =() => {
      
       setEtatDes({
        first: 0,
        second :1,
        score:0,
        gameCounter:0,
       })
   }



    return (  
        <div className="lancer-de">
            <div className="des">
                <De number={etatDes.first}/>
                <De number={etatDes.second}/>
            </div>

            <button className='button-lancer' onClick ={lancer}>Lancer les Des</button>
       
            <h2> Score = {etatDes.score}</h2>
            <button className='button-reset' onClick={reset}>reset</button>
            {(etatDes.first===etatDes.second) && <h1 > you win </h1> }

           
        
      
        </div>

    );
}
 
export default LancerDe;