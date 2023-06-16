import { classNames } from '../../../shared/lib/classNames/classNames';
import './NotFoundPage.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => (
    <div className={classNames('not-found-page', {}, [className])}>
        Страница не найдена
    </div>
);
