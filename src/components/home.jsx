import React from "react";
import { Card } from "react-bootstrap";


function Home() {
  return (
    <Card
      style={{display:"grid", justifyItems:"center", minHeight:800 , minWidth:1200, width: "auto" , marginInline: 20, padding: 60}}
      txtcolor="black"
      header="BadBank Landing Module"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
    >
     <h1>Parga bad bank </h1>
     <br/>

     <img src="logo.png" alt="bank logo" style={{maxHeight:300 , width: 300}}/>

     <br />
     <h3>Welcome to Parga's Bad Bank, a space where different functionalities of a banking application have been developed, such as logging in, creating an account, depositing and withdrawing money.
      such as logging into the account, creating an account, depositing and withdrawing money, as well as reviewing the balance of the account and a
      and a complete summary of the data.<br /><br />

      This application was developed as a front end project based on React.
     </h3>
     <div>
      <section class="layout">
        <a class='block text' href="/">Log in <br /> or <br /> Register</a>
        <div class='block with-image'>
         <img src="atm.png" alt="Descripción de la imagen"/>
        </div>
        <a class='block text' href="/deposit">Go to the ATM <br />and deposit</a>
      </section>

      <br/><br/>
      <br/><br/>

      <center>
      <h2>You could also leave a message for feedback</h2>
      </center>
    
      <div>
      <div class="comment-box">
        <textarea id="comment-text" placeholder="Write a comment"></textarea>
        <button id="submit-comment">Send</button>
      </div>
      <div id="comment-section">
  
      </div>
      <script src="comment.js"></script>
      </div>
      <br /> <br />  <br />
      <a style={{alignSelf: "center"}} href="https://github.com/matiaspdr" target="_blank">
        More about the developer on
        <img src="Github.png" alt="Logo de GitHub"/>
    </a>
    </div>

      
     
    </Card> 
  );
}
export default Home;