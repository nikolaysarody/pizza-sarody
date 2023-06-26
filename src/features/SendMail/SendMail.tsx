import { memo } from 'react';
import { Link } from 'react-router-dom';

interface MailToProps {
    mailto: string;
    label: string;
}

const SendMail = memo(({ mailto, label }: MailToProps) => {
    return <Link to={mailto}>{label}</Link>;
});

export default SendMail;
