import React from "react";

import './spinner.css';

interface ISpinner {
    width?: number | string
}

const Spinner: React.FC<ISpinner> = ({width = 'auto'}) => {
    return (
        <div className="loadingio-spinner-spinner-0yrf6jam8lyh" style={{width: width}}>
            <div className="ldio-yj8579yn4s">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Spinner;