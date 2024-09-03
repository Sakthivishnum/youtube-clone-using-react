import React from 'react';
import ReactDOM from 'react-dom';
import YouTubeLayout from './youtube';
import './youtube.css';
export default function Youtube(){
    return (<div className="youtube">
        <YouTubeLayout/>
    </div>);
}
ReactDOM.render(<Youtube/>, document.getElementById("root"));