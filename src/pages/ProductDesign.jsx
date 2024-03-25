import React from 'react'
import {BsYelp} from 'react-icons/bs';
import { productDesign } from '../components/Intern-data';

function ProductDesign() {
  return (
    <div className='product-design'>
        <div className="main-title">
            <BsYelp/>
            <h3>PRODUCT DESIGN TRACK (<span className="total-interns"> {Object.getOwnPropertyNames(productDesign).length-1} Interns </span>)</h3>
        </div>
        <div className="track-cards">            
            {
                productDesign.slice(0, 3).map((item) =>
                    <div className="first">
                        <div>
                            <img src={item.medal} alt="" />
                            <h3>{item.name}</h3>
                            <h1>{item.totalScore}</h1>
                        </div>                
                    </div>   
                )
            }                   
        </div>
        <table className="table-fill">
            <thead>
                <tr>
                    <th className="text-left">RANK</th>
                    <th className='text-left'>INTERN AVATAR</th>
                    <th className="text-left">INTERN NAME</th>
                    <th className="text-left">BONUS</th>
                    <th className="text-left">STRIKES</th>
                    <th className="text-left">ATTENDANCE</th>
                    <th className="text-left">APPRAISAL 1</th>
                    <th className="text-left">TASK 1(10)</th>
                    <th className="text-left">TASK 2(10)</th>
                    <th className="text-left">TASK 3(10)</th>
                    <th className="text-left">TASK 4(10)</th>
                    <th className="text-left">TASK 5(10)</th>
                    <th className="text-left">TOTAL SCORE</th>
                </tr>
            </thead>
            {
               productDesign.map((item) =>
               <tbody className="table-hover">
                    <tr>
                        <td className="text-left"><div className="table_id">{item.id}</div></td>
                        <td className="text-left"><div className="avater"><img src={item.intern} alt="" className='intern-avater' /></div></td>
                        <td className="text-left">{item.name}</td>
                        <td className="text-left">{item.bonus}</td>
                        <td className="text-left">{item.strike}</td>
                        <td className="text-left">{item.attendance}</td>
                        <td className="text-left">{item.appraisal}</td>
                        <td className="text-left">{item.task1}</td>
                        <td className="text-left">{item.task2}</td>
                        <td className="text-left">{item.task3}</td>
                        <td className="text-left">{item.task4}</td>
                        <td className="text-left">{item.task5}</td>
                        <td className="text-left">{item.totalScore}</td>
                    </tr>
               </tbody>                
               ) 
            }
        </table>
    </div>
  )
}

export default ProductDesign