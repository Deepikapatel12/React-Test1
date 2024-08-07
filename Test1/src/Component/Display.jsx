import axios from "axios";
import { useState, useEffect } from "react";
import  Table  from "react-bootstrap/Table";

const Display=()=>{
    const [mydata, setMydata]= useState([]);
    const loadData=()=>{
        let api="http://localhost:3000/student";
        axios.get(api).then((res)=>{
            console.log(res.data);
            setMydata(res.data)
        })
    }
    useEffect(()=>{
        loadData();
    }, [])
    const ans=mydata.map((key)=>{
return(
    <>
        <tr> 
            <td>{key.empid}</td>
            <td>{key.name}</td>
            <td>{key.destination}</td>
            <td>{key.department}</td>
            <td>{key.salary}</td>
        </tr>
    </>
)
    })
    return(
        <>
<h1> Display Data</h1>
<Table striped bordered hover>
    <thead>
    <tr>
        <th>empid</th>
        <th>Name</th>
        <th>Destination</th>
        <th>Department</th>
        <th>Salary</th>
        </tr>
    </thead>
    <tbody>
        {ans}
    </tbody>
</Table>
        </>
    )
}
export default Display;