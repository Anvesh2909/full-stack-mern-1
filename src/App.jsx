import { Route, BrowserRouter, Routes } from 'react-router-dom';
import LandingPageRoute from './client/sections/LandingPageRoute.jsx';
import LoginRoute from './client/components/LoginRoute.jsx'
import {AuthProvider} from "./context/AuthContext.jsx";
import SignupRoute from "./client/components/SignupRoute.jsx";
import ProfileRoute from "./client/sections/ProfileRoute.jsx";
import CreateEventRoute from "./client/sections/CreateEventRoute.jsx";

export default function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPageRoute />} />
                    <Route path="/login" element={<LoginRoute />} />
                    <Route path="/signup" element={<SignupRoute />} />
                    <Route path="/profile" element={<ProfileRoute />} />
                    <Route path="/create-event" element={<CreateEventRoute />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}
