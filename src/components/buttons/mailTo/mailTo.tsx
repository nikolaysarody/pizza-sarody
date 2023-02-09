import React from "react";
import {Link} from "react-router-dom";

interface MailToProps {
    mailto: string;
    label: string;
}

const MailTo: React.FC<MailToProps> = ({mailto, label}) => {
    return (
        <Link to={mailto}>
            {label}
        </Link>
    );
};

export default MailTo;