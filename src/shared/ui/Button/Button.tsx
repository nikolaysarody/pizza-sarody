import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import './Button.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ThemeButton.OUTLINE,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames('button', {}, [className, `button_${theme}`])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
