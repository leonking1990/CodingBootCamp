import Employees from "./Employees";

const ENDPOINT = 'https://642d9b59bf8cbecdb40ab760.mockapi.io/employees/employees/';
function Post() {
    
    Employees.map((item) => {
  
        fetch(ENDPOINT, {
        method: 'Post',
        header: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: item.id,
          Name: item.Name,
          Age: item.Age,
          Position: item.Position,
          Salary: item.Salary,
        })
      });
      
      })

}
