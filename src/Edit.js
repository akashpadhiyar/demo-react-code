import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
function Edit() {
const {id} =  useParams()
const mynavigate = useNavigate()
const [title,setTitle] = React.useState("")
const [details,setDetails] = React.useState("")

React.useEffect(()=>{
 axios.get(`https://akashsir.in/myapi/crud/todo-detail-api.php?todo_id=${id}`) 
 .then(res=>{
    setTitle(res.data.todo_title)
    setDetails(res.data.todo_details)
 })
},[])

const UpdateData = () =>{
    var myformdata = new FormData()
    myformdata.append("todo_id",id)
    myformdata.append("todo_title",title)
    myformdata.append("todo_details",details)
    axios.post("https://akashsir.in/myapi/crud/todo-update-api.php",myformdata)
    .then(res=>{
        console.log(res)
        mynavigate('/display')
    })
}
    return ( <>
    <h1>Edit</h1>
    {id}
    Title:<input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} />
    Details:<input type='text' value={details} onChange={(e)=>setDetails(e.target.value)} />
    <input type='button' onClick={()=>UpdateData()}/>
    </> ); 
}

export default Edit;