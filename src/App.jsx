import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/homepage';
import SignUp from './pages/signup';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}>
      </Route>
      <Route path='/signup' element = {<SignUp />}>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
/*
            <Link> Home</Link>
            <Link> Predictor</Link>
            <Link> Fixtures</Link>
            <Link> News</Link>
            <Link> Leagues</Link>
            <Link> Profile</Link>
            <Link> Settings</Link>
            <Outlet></Outlet>

          </div>
        </div>
    </>
  )
}

export default App*/
