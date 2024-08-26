import { HashRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
    return (
        <div className='container max-w-screen-lg mx-auto h-screen flex flex-col gap-5'>
            {/* topbar */}
            <NavBar />

            <HashRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>

                {/* <div className='min-h-[6000px]'></div> */}
            </HashRouter>
        </div>
    );
}

export default App;
