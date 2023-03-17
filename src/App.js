import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import AppRoute from './router';

function App() {
  const { user } = useSelector((state) => state.user);
  console.log(user)
  return (
    <AppRoute />
  );
}

export default App;
