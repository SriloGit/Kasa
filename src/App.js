import './styles/App.css';
import Footer from './components/footer'
import Header from './components/header'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Logement from './pages/logement'
import Error from './pages/error'
import About from './pages/about'

function App() {
  return (
		<Router>
			<Header />
      		<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/logement/:id" element={<Logement />} />
				<Route path="/about" element={<About />} />
				<Route path="/*" element={<Error />} />
			</Routes>
		</Router>
	)
}

export default App;
