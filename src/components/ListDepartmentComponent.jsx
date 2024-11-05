import React, { useEffect, useState } from 'react'
import { deleteDepartment, getAllDepartments } from '../services/DepartmentService'
import { Link, useNavigate } from 'react-router-dom';

const ListDepartmentComponent = () => {
    
    const [departments, setDepartment]= useState([]);

    const navigator = useNavigate();
    
    useEffect(()=>{
        listOfDepartments();
   },[])

   function listOfDepartments(){
    getAllDepartments().then((response)=>{
        console.log(response.data);
        setDepartment(response.data)
    }).catch(error=>{
        console.error(error);
    })
   }
   function updateDepartment(id) {
        navigator(`/editDepartment/${id}`)
    
   }

   function removeDepartment(id){
        console.log(id);
        deleteDepartment(id).then((response)=>{
            console.log(response.data);
            listOfDepartments();
        }).catch((error)=>{
            console.error(error);
        });
        
   }

   

    return (
        <>
        <div className='container'style={{marginTop:30}}>
        <h2 className='text-center'>List of Employees</h2>
        <Link className='btn btn-primary' to='/addDepartment'>Add Department</Link>
        <table className='table table-striped table-bordered'>
        <thead>
            <tr>
            <th> Department Id</th>
            <th> Department Name </th>
            <th> Department Description Name </th>
            <th> Action</th>
            </tr>
        </thead>
        <tbody>
            {departments.map(department=>
                <tr key={department.id}>
                    <td>{department.id}</td>
                    <td>{department.departmentName}</td>
                    <td>{department.departmentDescription}</td>
                    <button className='btn btn-info' onClick={()=>updateDepartment(department.id)}> Update </button>
                    <button className = 'btn btn-danger' onClick={()=>removeDepartment(department.id)}>Delete</button>
                        
                </tr>
            )}
        </tbody>
        </table>
        </div>
        </>
  )
}

export default ListDepartmentComponent