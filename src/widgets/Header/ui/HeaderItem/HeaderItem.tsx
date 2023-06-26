import { Link } from 'react-router-dom';
import './HeaderItem.scss';

interface HeaderItemProps {
    title: string;
    to: string;
}

export const HeaderItem = ({ title, to }: HeaderItemProps) => {
    return (
        <div className="header-item">
            <Link to={to}>{title}</Link>
        </div>
    );
};
