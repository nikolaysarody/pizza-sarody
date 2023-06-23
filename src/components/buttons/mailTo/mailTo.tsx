import { Link } from 'react-router-dom';

interface MailToProps {
    mailto: string;
    label: string;
}

const MailTo = ({ mailto, label }: MailToProps) => {
    return <Link to={mailto}>{label}</Link>;
};

export default MailTo;
