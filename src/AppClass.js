import React, { Component } from 'react'
import {Navbar,Nav,FormControl,Button,Accordion,Card,Col,Image} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import './App.css'

class AppClass extends Component {
 constructor(props){
       super(props)
       this.state={
          Person:{
            fullName:"Houimli Imen",
            bio:"Bio",
            imgSrc:"imageProfile.jpeg",
            profession:"Student", 
         },
          show:false,
          count:0,
        
 }
 }
 componentDidMount(){
  const interval = setInterval(() => {
    this.setState({count:this.state.count+1})
  }, 1000);
  return () => clearInterval(interval);
}
 

  showProfile=()=>{
    this.setState({show:!this.state.show})

       }


  render() {
    return (
      <div>
       
<Navbar bg="success" variant="dark">
    <Navbar.Brand href="#home">Home</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Setting</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
  <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body className="cardBody">  
{     this.state.show ?  
      <div> 
      <h2 style={{ margin: '9px 60px 3px', textShadow: '2px 2px 5px red'}}>{this.state.Person.fullName}</h2> 
      <h2 style={{ margin: '9px 60px 3px', textShadow: '2px 2px 5px red'}}>{this.state.Person.bio}</h2> 
      <h2 style={{ margin: '9px 60px 3px', textShadow: '2px 2px 5px red'}}>{this.state.Person.profession}</h2> 

      <Col xs={2} md={2}></Col>
      <Image style={{    height: '348px', width: '302px'}}  src={this.state.Person.imgSrc }roundedCircle />

   
</div>  :null}    
    
      <button style={{ margin:'9px 91px 3px', textShadow: '2px 2px 5px red'}} class="btn btn-danger" onClick={this.showProfile} >Show profile</button>
      <p style={{ margin:'9px 135px 3px', textShadow: '2px 2px 5px red'}} >{this.state.count}</p>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
     
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
      </div>
    )
  }
}
export default AppClass
