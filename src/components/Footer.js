import React from 'react'
import { FaLinkedin, FaWhatsappSquare, FaGithub, FaHtml5, FaBootstrap, FaReact, FaJs, FaSass } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer_left">
                <p className="mb-0 mt-3">Technologies</p>
                <p className="fs-4 ml-3 texts"> <FaHtml5 /> </p>
                <p className="fs-4 ml-3 texts"> <FaBootstrap /> </p>
                <p className="fs-4 ml-3 texts"> <FaReact /> </p>
                <p className="fs-4 ml-3 texts"> <FaJs /> </p>
                <p className="fs-4 ml-3 texts"> <FaSass /> </p>
                <p className="fs-4 ml-3 texts"> <FaGithub /> </p>
            </div>
            <div className="footer_right">
                <p className="mb-0 mt-3">Social media</p>
                <a href="https://wa.me/5492255526270" className="fs-4 ml-3 "><FaWhatsappSquare /></a>
                <a href="https://www.linkedin.com/in/nicolas-selicki-web-fullstack/" className="fs-4 ml-3 "><FaLinkedin /></a>
                <a href="https://github.com/nico-slk/" className="fs-4 ml-3 "><FaGithub /></a>
            </div>
        </div>
    )
}
