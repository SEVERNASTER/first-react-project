
import Home from './pages/Cars';
import { Routes, Route } from 'react-router-dom';
import AddCarForm from './pages/Cars/create';

import './App.css'


function App() {
    
    return <div className='app-container'>
        <Routes>
            <Route path='/cars' element={<Home />} />
            <Route path='/cars/create' element={<AddCarForm />} />
        </Routes>
    </div>
}

export default App