import React from 'react';
class FetchData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {mydata:[]  };
    }
    //LifyCycle Method Call Automatically when component loaded
    componentDidMount(){
        //Fetch javascript function to fetch data from api
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(res=>{
            //console.log(res)
            this.setState({mydata:res})
        })
        .catch(err=>alert(err))
    }
    render() {
        return (
            <>
            <h1>React Component</h1>
            {this.state.mydata.map((value,index)=>{
                    return (<div>
                        <h1>{value.title}</h1>
                        <p>Price:{value.price}</p>
                        <img width={100}  src={value.image}/>
                    </div>)
            })}
            </>
        );
    }
}
export default FetchData;