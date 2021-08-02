import CategoryButtons from "./CategoryButtons"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <div className="flex justify-center bg-gray-200">

    
        
        <div className="flex-grow">{children}</div>

    </div>
  )
}

export default Layout
