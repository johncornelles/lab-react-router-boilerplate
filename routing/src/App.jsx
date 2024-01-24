import Navbar from './components/Navbar';
import Allroutes from './Allroutes';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
      
        <Navbar />
        <Allroutes />
      
    </BrowserRouter>
    </>
  );
}

export default App;