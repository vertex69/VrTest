import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <ul className="nav">
                <Link to="/">
                    <li>home</li>
                </Link>
                <Link to="explore" >
                    <li>explore</li>
                </Link>
                <Link to="/highlightedgems">
                    <li>highlighted gems</li>                
                </Link>    
                    
            </ul>
            <div className="logo">
                <img src="https://res.cloudinary.com/iboom/image/upload/v1613803972/pacific/pacific_island_ymbqvd_x6wodg.png" alt=""/>
            </div>
            <ul className="nav">
                <Link to="/artsncrafts" >
                    <li>arts and crafts</li>
                </Link>
                <Link to="/digitalingenuity">
                    <li>traditional ingenuity</li>
                </Link>
            </ul>
        </nav>
    )
}
export default NavBar
