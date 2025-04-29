
import Home from './pages/Cars';
import { Routes, Route } from 'react-router-dom';
import AddCarForm from './pages/Cars/create';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
    return <>
        <Routes>
            <Route path='/cars' element={<Home />} />
            <Route path='/cars/create' element={<AddCarForm />} />
        </Routes>
        <ToastContainer position="top-center" autoClose={3000} theme="light" />
    </>
}

export default App