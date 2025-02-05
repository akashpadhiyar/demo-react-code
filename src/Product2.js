import axios from 'axios';
import React from 'react';

class Product2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {mydata:[]  };
    }
    componentDidMount(){
        // fetch("https://fakestoreapi.com/products")
        // .then(res=>res.json())
        // .then(res=>{
        //     //console.log(res)
        //     this.setState({mydata:res})
        // })
        // .catch(err=>console.error(err))
        axios.get("https://fakestoreapi.com/products")
        .then(res=>{
            console.log(res.data)
            if(res.status==200){
                this.setState({mydata:res.data})
            }else{
                alert("Issue in Api call")
            }
        })  
        .catch(err=>alert(err))
    }
    render() {
        return (
            <>
            <h1>Product</h1>
            {this.state.mydata.map((value,i)=>{
                return (<div key={i}>
                <h1>{value.title}</h1>
                <p>{value.price}</p>
                <img src={value.image} width={100}/>
                </div>)
            })}
            </>
        );
    }
}

export default Product2;