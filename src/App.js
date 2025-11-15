// App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Добавь этот импорт
import Footer from './pages/footer/Footer';
import Header from './pages/header/Header';
import Main from './pages/main/Main';
import Teachers from './pages/teachers/Teachers';
import Do from './pages/whatWeDo/Do';
import Regist from './pages/registration/Regist';
import Sign from './pages/signIn/SignIn'
import Contacts from './pages/contacts/Contacts';
function App() {
  return (
    <AuthProvider> 
      <Router>
        <div className="App">
          <Header/>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/whyus" element={<Do/>} />
            <Route path="/teachers" element={<Teachers/>} />
            <Route path="/regist" element={<Regist/>} />
              <Route path="/signin" element={<Sign/>} />
                <Route path="/contacts" element={<Contacts/>} />
          </Routes>
          <Footer/>
        </div>
      </Router>
    </AuthProvider> 
  );
}

export default App;