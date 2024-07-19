import React from "react"
import Logo from '../assets/logo.jfif'
import img from '../assets/house.jfif'
// import Post from './Createpost' 
import {Link }from "react-router-dom"
function Navigation() {
    return (
        <>
            <div className="container">
                <div className="nav">
                    <span>ERMS</span>
                    <div className="img">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="links">
                        <Link to="/">Home</Link>
                        <Link to="/Add">AddCandidate</Link>
                        <Link to="/View">ViewCandidate</Link>
                        <Link to="/Post">CreateNewPost</Link>
                    </div>

                </div>
            </div>
            <div className="body">
                <div className="part1">
                    <img src={img} alt="" />
                </div>
                <div className="part2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non aperiam, itaque commodi unde vitae at dolorem repellendus provident officia recusandae quibusdam praesentium quisquam soluta? Accusantium ut voluptas eveniet nemo animi!
                    <div className="h">
                        <h2>Employment Recruitment Management System(ERMS)</h2>
                        <h3>Cafe Camilia</h3>
                    </div>
                </div>
            </div>
            <footer>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, distinctio ipsa. Placeat atque est iste ipsa beatae perferendis. Dolores ipsa voluptatibus eveniet ducimus, totam nisi id ullam molestias obcaecati beatae?</p>
            </footer>
        </>
    )
}
export default Navigation


