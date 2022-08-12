import { BrowserRouter } from 'react-router-dom';
import { Header, Body } from './pages';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Body />
            </BrowserRouter>
        </div>
    );
}

export default App;
