import { Route, BrowserRouter, Routes } from 'react-router-dom';
import LandingPageRoute from './client/sections/LandingPageRoute.jsx';
import LoginRoute from './client/components/LoginRoute.jsx'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPageRoute />} />
                <Route path="/login" element={<LoginRoute />} />
            </Routes>
        </BrowserRouter>
    );
}
