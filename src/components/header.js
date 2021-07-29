import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default () => (
    <header className="header">
        <div className="container">
            <div className="site">
                <Link to={`/`}>
                    <StaticImage 
                        src="../images/logo.png"
                        alt="HYGGEY"
                    />
                </Link>
            </div>
            <nav className="nav">
                <ul>
                <li>
                    <Link to={`/`}>TOP</Link>
                </li>
                <li>
                    <Link to={`/about/`}>ABOUT</Link>
                </li>
                </ul>
            </nav>
        </div>
    </header>
)
