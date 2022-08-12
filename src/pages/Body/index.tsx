import { Navigate, Route, Routes } from 'react-router-dom';
import Child from '../../components/Child';
import Photos from '../../components/Photos';
import Users from '../../components/Users';
function Body() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/users" />} />
            <Route path="/users" element={<Users />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/users/:id" element={<Child />} />
        </Routes>
    );
}

export default Body;
