
import Home from './pages/Cars';
import { Routes, Route } from 'react-router-dom';
import AddCarForm from './pages/Cars/create';


function App() {
    return <Routes>
        <Route path='/cars' element={ <Home /> } />
        <Route path='/cars/create' element={ <AddCarForm /> } />
    </Routes>
}

export default App