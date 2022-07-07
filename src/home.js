import { Card } from './context.js'
import bank from './bank.png';

function Home(){
  return (
    <Card
      scale="100rem"
      txtcolor="black"
      header="BadBank Home Page"
      title="Welcome to the bank"
      text="You can move around using the navigation bar. Creating an account with us gets you a $100 sign up bonus!"
      body={(<img src={bank} className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}

export default Home