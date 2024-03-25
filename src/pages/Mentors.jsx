import React from 'react'
import { mentors } from '../components/Intern-data';

function Mentors() {
  return (
    <div className='backend'>
        <div className="backend-title">
            <h3>Learnable23 Mentors</h3>
        </div>
        
        <table className="table-fill">
            <thead>
                <tr>
                    <th className="text-left">S/N</th>
                    <th className='text-left'>MENTOR AVATAR</th>
                    <th className="text-left">MENTOR NAME</th>                    
                    <th className="text-left">EMAIL</th>
                    <th className="text-left">GROUP</th>
                </tr>
            </thead>
            {
               mentors.map((item) =>
               <tbody className="table-hover">
                    <tr>
                        <td className="text-left"><div className="table_id">{item.id}</div></td>
                        <td className="text-left"><div className="avater"><img src={item.avater} alt="" className='intern-avater' /></div></td>
                        <td className="text-left">{item.name}</td>
                        <td className="text-left">{item.email}</td>
                        <td className="text-left">{item.group}</td>                        
                    </tr>
               </tbody>                
               ) 
            }
        </table>
    </div>
  )
}

export default Mentors