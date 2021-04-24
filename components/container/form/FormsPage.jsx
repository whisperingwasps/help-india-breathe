import React, { memo, useState } from 'react';

import Link from 'next/link';
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Button,
  Input,
  FormText,
} from 'reactstrap';

const FormsPage = memo(props => {
  return (
    <>
      <h2>Ask for Help</h2>
      <Row>
        
        <Col lg="6">
          <Form>
            
            <FormGroup>
              <Label for="exampleName2">Patient's Name</Label>
              <Input
                type="email"
                name="name"
                id="exampleName2"
                placeholder="Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePhone2">Attendant Name</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail2"
                placeholder="Name of the attendant from the family"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail2">Current Oxygen Level</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail2"
                placeholder="spO2 Oxygen Level"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail2">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail2"
                placeholder="Email"
              />
             
            </FormGroup>
            
            <FormGroup>
        <Label for="exampleText"> Current Address</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
    
        
            <Button color="primary" size="lg" block>
                Submit To Get Help
            </Button>
          </Form>
        </Col>
        
        <Col lg="6">
        <Form>
        <FormGroup>
               <Label for="exampleEmail2">Patient's Age</Label>
              <Input
                type="text"
                name="text"
                id="exampleEmail2"
                placeholder="Age"
              />
            </FormGroup>
        <FormGroup>
        <Label for="examplePhone2">Attendant Mobile Number</Label>
              <Input
                type="text"
                name="phone"
                id="examplePhone2"
                placeholder="Mobile Number of the Attendant"
              />
              </FormGroup>
        <FormGroup>
              <Label for="exampleEmail2">Disease/Problem</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail2"
                placeholder="Specify the disease/problem with the patient"
              />
            </FormGroup>
            
        <FormGroup>
              <Label for="exampleSelect">Location</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>Delhi</option>
                <option>Mumbai</option>
                <option>Bengaluru</option>
                <option>Chennai</option>
                <option>Others</option>
              </Input>
            </FormGroup>

        <FormGroup>
              <Label for="exampleSelect">Type of Help</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>Oxygen Cylinder</option>
                <option>Hospital Bed</option>
                <option>Medicines</option>
                <option>Others</option>
              </Input>
            </FormGroup>
            </Form>
        </Col>
      </Row>
    </>
  );
});

export default FormsPage;
