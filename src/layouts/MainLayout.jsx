import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div className="app-container">
      <header role="banner">
        <Navbar />
      </header>
      <main role="main">
        <Outlet/>
      </main>
      <footer role="contentinfo">
        <Footer />
      </footer>
    </div>
  )
}

export default MainLayout