import axios from 'axios'
import React,{useEffect,useState} from 'react'
import DataTable from 'react-data-table-component';

const StudentDashboard= ()=> {
  const[data,setData]=useState([]);
  const getStudentData=async()=>{
    try{
      const response=await axios.get("http://localhost:3000/api/student/view");
      setData(response.data);
      
    }
    catch(error){
      console.log(error);
    }
  };

  const columns=[
    {
      name:'Registration',
      selector: (row)=>row.register,
      sortable:true,
      
    },
    {
      name:'Student Name',
      selector: (row)=>row.sname,
      sortable:true,
    },
    {
      name:'Institute Mail',
      selector: (row)=>row.iemail,
      sortable:true,
    },
    {
      name:'Personal Email',
      selector: (row)=>row.pemail,
      
    },
    {
      name:'Mobile Number',
      selector: (row)=>row.mobile,
      
    },
  ]
  useEffect(()=>{
    getStudentData();
  },[])
  



  return (
    <>
    <DataTable 
    columns={columns} 
    data={data}
    pagination
    fixedHeader
    fixedHeaderScrollHeight='400px'
    highlightOnHover
    className='bg:[#d6ed79]'
    striped
    responsive
   
    />;
    </>
  );
};


export default StudentDashboard