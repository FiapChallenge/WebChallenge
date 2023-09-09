import './App.css';
import { Outlet } from 'react-router-dom';
import Nav from './Components/Nav';
import Footer from './Components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
