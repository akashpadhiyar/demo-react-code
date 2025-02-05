import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
function Display() {
    const [data, setData] = React.useState([])

    React.useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get("https://akashsir.in/myapi/crud/todo-list-api.php")
            .then(res => {
                setData(res.data.todo_list)
            })
    }
    const deleteData= (id) =>{
        var myformdata = new FormData()
        myformdata.append("todo_id",id)
        axios.post("https://akashsir.in/myapi/crud/todo-delete-api.php",myformdata)
        .then(res=>{
            if(res.data.flag==='1'){
                alert(res.data.message)
                getData()
            }else{
                alert("Error")
            }
        })
    }

    return (<>
    <table border={1}>
        {data.map((value, index) => {
            var editdata = '/edit/'+value.todo_id
            return (
                    <tr>
                        <td>{value.todo_id}</td>
                        <td>{value.todo_title}</td>
                        <td>{value.todo_details}</td>
                        <td>
                            <Link to={editdata}>Edit</Link> |
                            <input type='button' value="x" onClick={()=>deleteData(value.todo_id)} /> 
                            </td>
                    </tr>
            )
        })}
        </table>
    </>);
}

export default Display;