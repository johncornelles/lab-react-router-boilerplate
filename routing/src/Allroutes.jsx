import Contacts from './components/Contact';
import About from './components/About';
import Squad52 from './components/Squad52';
import { Route, Routes} from 'react-router-dom';

const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Squad52/>} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="/about" element={<About/>} />   
    </Routes>
  );
}

export default Allroutes;