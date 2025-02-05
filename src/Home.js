import React from 'react';
import { useNavigate } from 'react-router-dom';
function Home() {

    var mynavigate = useNavigate()

    const doCheck = () =>{
        var a = 100
        if(a==100){
            mynavigate('/about')
        }else{
            alert('Condition is Wrong')
        }
    }
    return (<>
    <h1>Home</h1>
    1<input type='button' value="About" onClick={()=>mynavigate('/about')} />
    2<input type='button' value="Login" onClick={doCheck}/>
    </>  );
}

export default Home;