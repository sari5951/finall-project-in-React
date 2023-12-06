import { useState } from 'react'
import { Outlet, Link } from "react-router-dom";

import './App.css';
import { Title } from './components/pages/Header.component';
// import { Menue } from './components/pages/menue.component';


function App() {
 
  return (
    <>
      <Title/>
       
      <nav>
       <ul>
          <li>
            <Link to={''}>עמוד הבית</Link>            
          </li>
          <li>
            <Link to={'/AboutPage'}>אודות</Link>
          </li>
          <li>
            <Link to={'/Login'}>צור קשר</Link>
          </li>
          <li>
            <Link to={'./Order'}>להזמנות</Link>
          </li>
          </ul>
       </nav>
       <div>
          {/* לכאן יכנס התוכן של הניווט */}
          <Outlet />
        </div>
    </>
  )
}

export default App
