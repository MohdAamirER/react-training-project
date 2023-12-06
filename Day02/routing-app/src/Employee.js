import React, { Component } from 'react';

class Emps extends Component {
  constructor(props) {
    super(props);
    this.state = { empsArray: [] };
    
     

    this.state.empsArray =
      [
        { empno: 101, ename: "Scott", deptno: 10 },
        { empno: 102, ename: "Smith", deptno: 20 },
        { empno: 103, ename: "Sandy", deptno: 10 },
        { empno: 104, ename: "Sam", deptno: 30 },
        { empno: 105, ename: "Sreeman", deptno: 20 },
        { empno: 106, ename: "Sowmya", deptno: 30 }
      ];

  }
  render() {

    let filteredArray =  this.state.empsArray;

    if(this.props.deptno != undefined)
    {
      filteredArray =  this.state.empsArray.filter(item => item.deptno == this.props.deptno);
    }
  
    let resultsArray =  filteredArray.map( (item, index) => 
    {
     return ( <tr  key={index}>
        <td>{item.empno}</td>
        <td>{item.ename}</td>
        <td>{item.deptno}</td>
      </tr>);
    } );


    return (
      <div>

        <table border="2" width="400" cellSpacing="0" cellpadding="4">
          <tr>
            <th>Emp Number</th>
            <th>Emp Name</th>
            <th>Deptno</th>
          </tr>

          {resultsArray}

        </table>

      </div>
    );
  }
}


export default Emps;