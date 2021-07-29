import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


export default () => (
    <footer className="footer">
        <div className="container">
        <div className="site">
          <Link to={`/`}>
                <StaticImage 
                    src="../images/logo.png"
                    alt="HYGGEY"
                />
            <p>毎日を心地よく過ごすための情報サイト</p>
          </Link>
        </div>
        </div>

    </footer>

)
