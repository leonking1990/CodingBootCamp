import React, { Fragment} from 'react';
import Employee from './Employee';
import { Button, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link,useNavigate} from 'react-router-dom'

const ENDPOINT = 'https://642d9b59bf8cbecdb40ab760.mockapi.io/database/employees/';

export default class Home2 extends React.Component{

    constructor(props){
        super(props);
        this.deleteEmployee = this.deleteThisEmployee.bind(this);
        this.UpdateEmployee = this.updateThisEmployee.bind(this);
        
        
    }
    

    render(){
        const employees = this.state
        ? this.state.employees.map((employee,index) =>
        <Employee
        key = {index}
        data = {employee}
        deleteEmployee = {this.deleteEmployee} />)
        : null;
        return (
            <Fragment>
            <div style={{margin:"10rem"}}>
                <Table striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                Position
                            </th>
                            <th>
                                salary
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees}
                    </tbody>
                </Table>
                <br>

                </br>
                <Link className='d-grid gap-2' to={"/create"}>
                    <Button size='lg'>Create</Button>
                </Link>
            </div>
        </Fragment>
    )};

    componentDidMount() {
        fetch(ENDPOINT)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    employees: data
                });
            });
    }
    deleteThisEmployee(e, employee, ){
        console.log(this.state.employees)
        const index = this.state.employees.indexOf(employee);
        console.log(this.state.employees)
        this.state.employees.splice(index,1)
        DeleteEmployee(employee)
            .then(() => {
                this.setState(state => {
                    for(let em of state.employees){
                        if(em.id === employee.id){
                            let em = employee;
                            break;
                        } 
                    }
                    return state;
                });
            });
            e.preventDefault();
    }
    updateThisEmployee(e, employee,){
        const index = this.state.employees.indexOf(employee);
        this.state.employees.splice(index, 1, employee)
        UpdateEmployee(employee)
    }
    
}

function DeleteEmployee(employee) {
    return fetch(`${ENDPOINT}/${employee.id}`,{
        method: 'DELETE',
    }).then(res =>{
        if (res.ok){
            return res.json();
        }
    })
    
}
function UpdateEmployee(employee) {
    return fetch(`${ENDPOINT}/${employee.id}`,{
        method: 'PUT',
        headers: {'content-type':'application/json'},
            // Send your data in the request body as JSON
            body: JSON.stringify({employee})
    })
    
}
