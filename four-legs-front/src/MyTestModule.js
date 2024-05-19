import React, { useState } from 'react';

function MyTestModule() {
    let [buttonText, setButtonText] = useState('Button')
    const handleAction = async () => {
        // let a = fetchFunc()
        // console.log(a)
        setButtonText(await fetchFunc())
    }
    return (<div>
        <p>
            Your test work, grats!
        </p>
        <button className='myTestButtonClass' onClick={handleAction}>
            {buttonText}
        </button>
    </div>)
};

async function fetchFunc() {
    return (await fetch("http://127.0.0.1:8080/test")).text()
}
export default MyTestModule;