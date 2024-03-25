import React from 'react'
import { Link } from "react-router-dom";
import { productDesign, frontend, backend, web3, data } from '../components/Intern-data';
import {BsGrid1X2Fill, BsYelp, BsCodeSlash, BsCloudFog2Fill, BsDatabaseFillGear} from 'react-icons/bs';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

// Start Bar Chats
const colors = ['#2962ff', '#ff6d00', '#2e7d32', '#ec0303', 'red', 'pink'];
const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
//   End Bar Chat


function Home() {
  return (
    <main className='main-container'>
        <div className="main-title">
            <BsGrid1X2Fill/>
            <h3> DASHBOARD</h3>
        </div>

        <div className="main-cards">
            <Link to = "product" style={{textDecoration: 'none', color: 'rgba(255, 255, 255, 0.95)'}}>
                <div className="dashboard_cards product_card">                    
                    <BsYelp className="track_icons"/>
                    <h3>PRODUCT DESIGN TRACK</h3>
                    <div className='card_features'>
                        <div className="track_total">{Object.getOwnPropertyNames(productDesign).length-1}</div> 
                        <span>Interns</span>                        
                    </div>
                </div>
            </Link>
            <Link to = "frontend" style={{textDecoration: 'none', color: 'rgba(255, 255, 255, 0.95)'}}>
                <div className="dashboard_cards frontend_card">                    
                    <BsCodeSlash className="track_icons"/>
                    <h3>FRONTEND TRACK</h3>
                    <div className='card_features'>
                        <div className="track_total">{Object.getOwnPropertyNames(frontend).length-1}</div> 
                        <span>Interns</span>                        
                    </div>
                </div>
            </Link>    

            <Link to = "backend" style={{textDecoration: 'none', color: 'rgba(255, 255, 255, 0.95)'}}>
                <div className="dashboard_cards backend_card">                    
                    <BsDatabaseFillGear className="track_icons"/>
                    <h3>BACKEND TRACK</h3>
                    <div className='card_features'>
                        <div className="track_total">{Object.getOwnPropertyNames(backend).length-1}</div> 
                        <span>Interns</span>                        
                    </div>
                </div>
            </Link>      

            <Link to = "web3" style={{textDecoration: 'none', color: 'rgba(255, 255, 255, 0.95)'}}>
                <div className="dashboard_cards web3_card">                    
                    <BsCloudFog2Fill className="track_icons"/>
                    <h3>WEB3 TRACK</h3>
                    <div className='card_features'>
                        <div className="track_total">{Object.getOwnPropertyNames(web3).length-1}</div> 
                        <span>Interns</span>                        
                    </div>
                </div>
            </Link>            
        </div>

        
        <div className="charts">
            <BarChart
                width={1000}
                height={350}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
            </Bar>
            </BarChart>            
        </div>


        <div className="charts-responsive">
            <BarChart
                width={500}
                height={350}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
            </Bar>
            </BarChart>            
        </div>
    </main>
  )
}

export default Home