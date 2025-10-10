import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home.tsx";
import Tasks from './Pages/Tasks.tsx';

function App() {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/tasks" element={<Tasks/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}


export default App;