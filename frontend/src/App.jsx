 import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/favorites" component={FavoritesPage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
