import React, { useEffect, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';

const Home = () => {
    
    // all states
    const [number, setNumber] = useState([]);
    const [singleData, setSingleData] = useState({});
    const [value, setValue] = useState(null);

    // get student api from local json file
    useEffect(() => {
        fetch(`/studentresult.json`)
            .then(res => res.json())
            .then(data => setSingleData(data.find(singleData => singleData?.id === value)))
    }, [value])

    //calculate the student marks
    let avg;
    if (singleData?.id) {
        const { biology, english, physics, maths, chemistry,religion } = singleData
        const sum = biology + chemistry + english + maths + physics+religion;
        avg = Math.floor( sum / 6 );
    } else {
        console.log('Enter student id')
    }

    //variant of progressbar
    const classChanger = value => {
        if (value >= 90) {
            const primaryColor = 'success';
            return primaryColor;
        }
        else if (value >= 70) {
            const primaryColor = '';
            return primaryColor;
        }
        else if (value >= 50) {
            const primaryColor = 'warning';
            return primaryColor;
        }
        else if (value >= 30) {
            const primaryColor = 'danger';
            return primaryColor;
        }
        else {
            const primaryColor = 'danger';
            return primaryColor;
        }
    }

    //UI markshit
    const serverBtn = () => {
        setNumber(singleData);
        let getInput = document.getElementById('input-field');
        getInput.value = '';
    }
    //get student id from input
    const getUserInput = (e) => {
        setValue(parseInt(e.target.value))
        setNumber([])
    }

    return (
        <div className='container mb-5'>
            <div className="row">
                <div className="col-md12">
                    <h1 className='text-center my-5'>Calculated the Parsentenge level Of person's mark </h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-sm-12 col-lg-6">
                    <input type="text" id="input-field" className='form-control' onChange={getUserInput} placeholder='Student Id' /> <br /> <br />
                    <span onClick={serverBtn} className='btn btn-secondary d-inline'>Get Data From Server</span>
                    <br /> <br />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-lx-6 col-sm-12">
                    <div>
                        {singleData?.name && <h2>Result's of {singleData?.name}</h2>}
                        {
                            number?.id && value > 0 ? <div>
                                <h6>Maths </h6>  <ProgressBar variant={classChanger(number?.maths)} now={number?.maths} label={`${number?.maths}%`} /> <br /><br />
                                <h6>Physics </h6>   <ProgressBar variant={classChanger(number?.physics)} now={number?.physics} label={`${number?.physics}%`} />  <br /><br />
                                <h6> Chemistry </h6>    <ProgressBar variant={classChanger(number?.chemistry)} now={number?.chemistry} label={`${number?.chemistry}%`} />  <br /><br />
                                <h6>Biology </h6>   <ProgressBar variant={classChanger(number?.biology)} now={number?.biology} label={`${number?.biology}%`} />  <br /><br />
                                <h6> English </h6>   <ProgressBar variant={classChanger(number?.english)} now={number?.english} label={`${number?.english}%`} />  <br /><br />
                                <h6> Relagion </h6>   <ProgressBar variant={classChanger(number?.religion)} now={number?.religion} label={`${number?.religion}%`} />  <br /><br />
                            </div> : avg && <ProgressBar variant={'success'} now={50} label={`${avg}%`} />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;