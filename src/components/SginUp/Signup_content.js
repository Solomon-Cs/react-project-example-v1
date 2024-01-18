import React, { Component } from 'react'
import { Form ,Input, Label , FormGroup , FormFeedback, Button } from 'reactstrap';

export default class  extends Component {
  render() {
    return (
      <>
        <div className='main'>
            <div className='container'>
                <div>
                    <Form>
                        <h1>SignUp page</h1>
                        <FormGroup>
                            <Label for = "firstName"></Label>
                            <Input id='firstName' placeholder='Enter First Name' type='text'  invalid = {false}/>
                            <FormFeedback>first name can not be blank</FormFeedback>
                        </FormGroup>

                        <FormGroup>
                            <Input id='lastName' placeholder='Enter Last Name' type='text' />
                            <FormFeedback>last name can not be blank</FormFeedback>
                        </FormGroup>

                        <FormGroup>
                            <Input id='email' placeholder='Enter Email' type='email' />
                            <FormFeedback> email can not be blank</FormFeedback>
                        </FormGroup>

                        <FormGroup>
                            <Input id='password' placeholder='Enter Password' type='password' />
                            <FormFeedback> password can not be blank</FormFeedback>
                        </FormGroup>

                        <FormGroup>
                            <Input id='confirmpassword' placeholder='Confierm'  type='password'/>
                            <FormFeedback>  Password must match</FormFeedback>
                        </FormGroup>

                        <Button color='primary'> Register</Button>
                    </Form>
                </div>
            </div>
        </div>    
      </>
    )
  }
}
