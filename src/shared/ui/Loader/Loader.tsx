import { FC } from 'react';
import './Loader.scss';
import { classNames } from '../../lib/classNames/classNames';

interface LoaderProps {
    className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => {
    return (
        <div className={classNames('lds-spinner', {}, [className])}>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};
