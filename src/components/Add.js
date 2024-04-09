import React, {useState} from "react";
import {Button,Form} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from 'uuid';
import {Link,useNavigate} from 'react-router-dom'

const ENDPOINT = 'https://642d9b59bf8cbecdb40ab760.mockapi.io/database/employees/';

function Add() {
    
    const[name, setName] = useState('');
    const[age, setAge] = useState('');
    const[position, setPosition] = useState('');
    const[salary, setSalary] = useState('');

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuidv4();

        let uniqueId = ids.slice(0,8), a = name, b = age, c = position, d = salary;

        fetch(ENDPOINT, {
            method: 'POST',
            headers: {'content-type':'application/json'},
            // Send your data in the request body as JSON
            body: JSON.stringify({
              'id': uniqueId,
              'Name': a,
              'Age': b,
              'Position': c,
              'Salary': d,
            })
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(task => {
            // do something with the new task
            
        }).catch(error => {
            // handle error
        }) 

        //Employees.push({id: uniqueId, Name: a, Age: b, Position: c, Salary: d});
        
        history('/');
    }

    return(
        <div>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)}>

                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Age" required onChange={(e) => setAge(e.target.value)}>

                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Position" required onChange={(e) => setPosition(e.target.value)}>

                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Salary" required onChange={(e) => setSalary(e.target.value)}>

                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default Add;