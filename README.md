# TP_CAW

NOM ET PRENOM Du BINOME 
HERIDA AMANI , KERBAB SARRA G2 TD , G3 TP 

CONCERNANT LE DEVOIR DE CAW 
***************************
we build our app using functional components
because of its simplicity and the the absence 
of the key word this
*********************************
//De Component 

qui contient un array des images des faces de De,
le component De recoit comme props 
un nombre "number" 
qui represente un indice d'un element de la liste des images 

********************
//LancerDes Component 
 

//states
nous avons des states: 
first: l'indice du premier de
second: l'indice du dexieme de
gameCounter: pour compter le nombre de lancement de des faits 
score: qui prend la valeur 0 initialement, increment de 1 lorsque les deux des ont les memes faces
   

//lancer  ()
la methode lancer () qui est  declenché par l'evenement clicker sur le boutton lancer des 
qui affecte des valeurs aleatoires entiers entre 0 et 5 
aux first and second 
et increment gameCounter par 1 
et increment ou decremente la valeur de score tout depend 
les valeurs de first et second 


//reset ()
la methode affecte les valeurs intials aux states
qui est declanché par l'evemenet click sur le boutton reset 


//return 
la fonction lancerDes retourne 
deux instance de la composantes "De"
passons comme props les valeurs aleaoitoires generes

un boutton Lancer Des 
un boutton Reset 
un h1 "you win " dans le cas ou les des ont les memes faces 

****************
//css 
toutes les regles css utilises dans cette application 
sont dans le fichier index.css
qui importé dans le fichier index.js 

import './index.css';
