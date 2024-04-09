import React, { Fragment} from 'react';
import { Button, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link,useNavigate} from 'react-router-dom'

const ENDPOINT = 'https://642d9b59bf8cbecdb40ab760.mockapi.io/database/employees/';

export default class Employee extends React.Component{

    
    constructor(props){
        super(props);
        this.state ={
            newName:'',
            employee: this.props.data,
        };
    }
    updateEmployee(employee) {
        employee.Name = this.state.newName
        return fetch(`${ENDPOINT}/${employee.id}`,{
            method: 'PUT',
            headers: {'content-type':'application/json'},
                // Send your data in the request body as JSON
                body: JSON.stringify(employee)
        }).then(() =>
            this.setState( {
                employee: employee
        
        }))
    }
    
    render(){
        
        
        return(
            <tr key={this.state.employee.id}>
                <td>
                    {this.state.employee.Name}
                </td>
                <td>
                    {this.state.employee.Age}
                </td>
                <td>
                    {this.state.employee.Position}
                </td>
                <td>
                    ${this.state.employee.Salary}
                </td>
                <td>
                    <input onChange={(e) => this.state.newName = e.target.value} placeholder='Enter new name'></input>
                    &nbsp;
                    <Button onClick={() => this.updateEmployee(this.state.employee)} >Edit</Button>
                    &nbsp;
                    <Button onClick={e => this.props.deleteEmployee(e, this.state.employee)}>DELETE</Button>
                </td>
            </tr>
        );
    }
    
}