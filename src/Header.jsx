import { Component } from 'react'
import './App.css'
export default class Header extends Component{
    render()   { return(
        <div>
            <nav>
                <ul className="Nav">
                    <li><a className="active" href="#home">Home</a></li>
                    <li><a className="active" href="#news">News</a></li>
                    <li><a className="active" href="#about">About</a></li>
                    <li><a className="active" href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}
}