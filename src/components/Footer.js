import React from "react";
import { FaGithubSquare, FaLinkedin, FaMailBulk} from 'react-icons/fa'

function Footer() {

    return (
        <footer className="d-block d-flex justify-content-center p-2">
            <a className="p-5"  href="https://github.com/JelenaTomic" target="_blank" rel="noreferrer"><FaGithubSquare size={70}/></a>
            <a className="p-5"href="https://www.linkedin.com/in/jelena-tomic-736912231/" target="_blank" rel="noreferrer"><FaLinkedin size={70}/></a>
            <a className="p-5" href="mailto:tomic.elena09@gmail.com" target="_blank" rel="noreferrer"><FaMailBulk size={70}/></a>
        </footer>
    )

}


export default Footer;