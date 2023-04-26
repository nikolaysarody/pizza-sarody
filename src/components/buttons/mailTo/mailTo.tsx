import React from 'react';
import { Link } from 'react-router-dom';

interface MailToProps {
    mailto: string;
    label: string;
}

function MailTo({ mailto, label }: MailToProps): JSX.Element {
    return <Link to={mailto}>{label}</Link>;
}

export default MailTo;
