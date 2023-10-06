import React from "react";
import User from "../context/user.js";
import UserContext from "../context/userContext.js";
import { Card } from "react-bootstrap";


function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <Card className="card-background"
    style={{minHeight:800 , width: "auto" , marginInline: 85 }}
    txtcolor="black"
    header="BadBank Landing Module"
    title="Welcome to the bank"
    text="You can move around using the navigation bar.">
     
     <div className="allData">
     <h1>All data</h1>
     <br/>
     <h3>following you could see all data stored on the app</h3>
      <br/>
      {JSON.stringify(User)}
      <br/>
    </div>
    </Card>
  );
}

export default AllData;
