import React from 'react';
class ApiData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount() { 
        fetch("http://127.0.0.1:3000/display-api")
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
        })
     }
    render() {
        return (
            <>
            <h1>bhi</h1>
            </>
        );
    }
}

export default ApiData;