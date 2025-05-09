import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
    return (
        <HashRouter>
            <div className="container mx-auto h-screen max-w-screen-lg">
                {/* topbar */}
                {/* <NavBar /> */}

                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/career" element={<Career />} /> */}
                </Routes>

                {/* <div className='min-h-[6000px]'></div> */}
            </div>
        </HashRouter>
    );
}

export default App;
