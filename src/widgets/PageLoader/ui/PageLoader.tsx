import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import styles from './PageLoader.module.scss';

export const PageLoader: FC = () => {
    return (
        <div className={classNames(styles.PageLoader)}>
            <Loader />
        </div>
    );
};
