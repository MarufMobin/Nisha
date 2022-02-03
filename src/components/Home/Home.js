import React, { useEffect, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';

const Home = () => {

     const [users, setUsers] = useState([]);
     const [result , setResult] = useState([]);

    const value = (e) =>{
        fetch(`/studentresult.json`)
        .then( res => res.json())
       .then( data => setUsers(data))   

       let singleData  = users.filter( user => user.id == e.target.value);
       setResult(singleData)
    }

    const  classChanger = value  => {
        if( value >= 90 ){
            const primaryColor = 'success';
            return primaryColor;
        }
        else if( value >= 70 ){
            const primaryColor = '';
            return primaryColor;
        }
        else if( value >= 50 ){
            const primaryColor = 'warning';
            return primaryColor;
        }
        else if( value >= 30 ){
            const primaryColor = 'danger';
            return primaryColor;
        }
        else{
            const primaryColor = 'danger';
            return primaryColor;
        }
    }


    return (
        <div className='container'>
            <div className="row">
                <div className="col-md12">
                <h1 className='text-center my-5'>Calculated the Parsentenge level Of person's mark </h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <input type="text" onChange={value} placeholder='Input of a student id' className='form-control w-25' />
                    <h4 className='mb-5 mt-3'>Subject Persentage</h4>
                   {
                       result.map( res =>
                        <div>
                            {/* <div class="progress">
                                <div className="progress-bar" role="progressbar" 
                                style={{ width:  `${res?.maths}%` }}  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{ res?.maths}</div>
                            </div> */}

                            <h2>Result's of { res?.name}</h2>
                            <div className='col-md-4'>
                           <h6>Maths </h6>  <ProgressBar variant={classChanger( res?.maths)} now={res?.maths} label={`${res?.maths}%`}  /> <br /><br />
                           <h6>Physics </h6>   <ProgressBar variant={classChanger( res?.physics)} now={res?.physics} label={`${res?.physics}%`} />  <br /><br />
                           <h6> Chemistry </h6>    <ProgressBar variant={classChanger( res?.chemistry)} now={ res?.chemistry} label={`${res?.chemistry}%`} />  <br /><br />
                           <h6>Biology </h6>   <ProgressBar variant={classChanger( res?.biology)} now={res?.biology} label={`${res?.biology}%`} />  <br /><br />
                           <h6> English </h6>   <ProgressBar variant={classChanger( res?.english)} now={res?.english} label={`${res?.english}%`} />  <br /><br />
                            </div>
                            <input type="text" value={ res?.name} /> 
                           <input type="text" value={20}/> <input type="text" value={ res?.physics} /> <input type="text"value={ res?.chemistry} /> <input type="text" value={ res?.biology}/> <input type="text" value={ res?.english}  />
                           
                           </div> )
                   }
                  
                </div>
                
            </div>
        </div>
    );
};

export default Home;