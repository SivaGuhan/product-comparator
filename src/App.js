import './App.css';
import {BrowserRouter,Link,Routes,Route} from 'react-router-dom';
import {Home} from '../src/pages/Home'
import {Result} from '../src/pages/Result'
import {Feedback} from './pages/Feedback'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
function App() {
  return (
    <div className="App">
          <header>
            <h1>Product Comparator</h1>
          </header>
          <hr/>
          <nav>
          <BrowserRouter >
          <Link to="/Home"  style={{ textDecoration: 'none' }}>Home   </Link>
          <Link to="/Result" style={{ textDecoration: 'none' }}>Result</Link>
          <Routes>
            <Route path="/Home"  element={<Home/>}/>
            <Route path="/Result" element={<Result/>}/>
          </Routes>
          </BrowserRouter>
          </nav>
          <div className='bar'>
            <input type='text' placeholder='Enter the product'></input>
            <button className='btn'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
          </div>
          <body>
            hello
          </body>
          <footer>
            <BrowserRouter>
              <Link to="/Feedback" style={{ textDecoration: 'none'}}>Feedback</Link>
              <Routes>
                <Route path="/Feedback" element={<Feedback/>}/>
              </Routes>
            </BrowserRouter>
          </footer>
    </div>
  );
}
export default App;