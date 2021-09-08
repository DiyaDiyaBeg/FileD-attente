import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {  FaUserTie } from "react-icons/fa";
import { IconContext } from 'react-icons';
import { GrWheelchair } from "react-icons/gr";
import {HiUserGroup} from "react-icons/hi";
import {MdAirlineSeatReclineNormal, MdAccessible} from "react-icons/md";







export default function Tables() {

  return (
    <IconContext.Provider value={{color:"white", size:"3em"}}>
      <Table  style={{width:"34%", marginLeft:"66%", backgroundColor:"#0057A3" }}>
        <TableHead  style={{height:"5%"}}>
          <TableRow  >
            <TableCell style={{color:"white", fontFamily:"Tahoma", marginTop:"-3%" }} >تذكرة <br/>TICKET</TableCell>
            <TableCell style={{color:"white",fontFamily:"Tahoma"}}>الشباك<br/> GUICHET</TableCell>
    
          </TableRow>
        </TableHead>
        <TableBody >
         
            <TableRow  > 
              <TableCell  >147 <br></br>
               
               <MdAirlineSeatReclineNormal ></MdAirlineSeatReclineNormal> 128
              </TableCell>
              <TableCell >2<br></br>
              <HiUserGroup></HiUserGroup>
              
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell >
               2 <br></br>
               <MdAirlineSeatReclineNormal></MdAirlineSeatReclineNormal>  2
              </TableCell>
              <TableCell >5 <br></br>
              <FaUserTie></FaUserTie>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell >
               20<br></br>
               <MdAirlineSeatReclineNormal></MdAirlineSeatReclineNormal>  0
              </TableCell>
              <TableCell >8 <br></br>
              <MdAccessible></MdAccessible>
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
      </IconContext.Provider>
   
  );
}
