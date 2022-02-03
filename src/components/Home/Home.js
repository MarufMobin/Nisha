import React, { useState } from 'react';

const Home = () => {

    //  const [user, setUser] = useState({});

    const value = (e) =>{
        let inputValue =  e.target.value;
        let url = inputValue;
        fetch(`/studentresult.json`)
        .then( res => res.json())
        .then( data => console.log(data))
    }

    // console.log(setUser)
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md12">
                <h1 className='text-center my-5'>Calculated the Parsentenge level Of person's mark </h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <input type="text" onChange={value} placeholder='Input A id' className='form-control w-25' />
                    
                </div>
            </div>
        </div>
    );
};

export default Home;