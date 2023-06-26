import { Loader } from '../../../shared/ui/Loader/Loader';
import { classNames } from '../../../shared/lib/classNames/classNames';
import './PageLoader.scss';

export const PageLoader = () => {
    return (
        <div className={classNames('page-loader')}>
            <Loader />
        </div>
    );
};
