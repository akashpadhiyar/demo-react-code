import axios from 'axios';
import React from 'react';
class AddData extends React.Component {
    constructor(props) {
        super(props);
        this.state = { txt1:'',txt2:'' };
    }
    SaveData(){
        var myformdata = new FormData()
        myformdata.append("todo_title",this.state.txt1)
        myformdata.append("todo_details",this.state.txt2)

        axios.post("https://akashsir.in/myapi/crud/todo-add-api.php",myformdata)
        .then(res=>{
            console.log(res)
            if(res.data.flag==='1'){
                alert(res.data.message)
            }else{
                alert(res.data.message)
            }
        })
        this.setState({txt1:'',txt2:''})
    }
    render() {
        return (
            <>
            Title : <input type='text' value={this.state.txt1} onChange={(e)=>this.setState({txt1:e.target.value})}/>
            Details : <input type='text' value={this.state.txt2}  onChange={(e)=>this.setState({txt2:e.target.value})}/>
            <input type='button' value="ClickMe" onClick={this.SaveData.bind(this)}/>
            </>
        );
    }
}

export default AddData;