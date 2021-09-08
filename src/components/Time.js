import React, { useState } from 'react';


const Time = () => {

    var showdate=  new Date();
    var displaytodaydate = showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getFullYear();

let time = new Date().toLocaleTimeString();
const [ctime, setCtime]= useState(time);

const UpdateTime = ()=>{
    time = new Date().toLocaleTimeString();
    setCtime(time);

};
setInterval(UpdateTime,1000);


    return (
        <div className="datetime">
            <h3 >{displaytodaydate}</h3>
            <h3> &nbsp;{ctime} </h3>
        </div>
    );
};

export default Time;