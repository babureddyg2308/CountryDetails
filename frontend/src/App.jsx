// // src/App.jsx
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import HomePage from './pages/HomePage';
// import FavoritesPage from './pages/FavoritesPage';
// import Login from './components/Login';
// import Register from './components/Register';
// import Header from './components/Header';

// const App = () => {
//   return (
//     <AuthProvider>
//       <Router>
//         <Header />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/favorites" element={<FavoritesPage />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// };

// export default App;

import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <div style={{justifyContent:"space-between", display:'flex', textAlign:'center'}}>
        <a href="" style={{textDecoration:'none' , color: 'Blue', fontSize:'20px'}}> Home</a>
        <div> 
        <a href=""><button style={{backgroundColor:'orange', color:'white', width:'100px', height:'30px', border:'none', borderRadius:'10px'}}>Login</button></a>
        <a href=""> <button style={{backgroundColor:'red', color:'white', width:'100px', height:'30px', border:'none', borderRadius:'10px'}}>Regester</button></a>
        </div>
      </div>
      <input type="text" placeholder='Enter country code' />
      <button> search</button>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
