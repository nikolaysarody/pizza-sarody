import React from 'react';
import { createPortal } from 'react-dom';
import exitButton from '../../../icons/exit.svg';
import './sliderModal.scss';

interface SliderModalProps {
    title: string;
    description: string;
    img: string;
    text?: string;
    onClose: () => void;
}

function SliderModal({ title, description, img, text, onClose }: SliderModalProps): JSX.Element | null {
    const modalPortal = document.getElementById('modal');

    return modalPortal
        ? createPortal(
              <div
                  role="button"
                  className="slider-modal"
                  onClick={(e) => {
                      if (e.target === e.currentTarget) {
                          onClose();
                      }
                  }}
              >
                  <div className="slider-modal__wrapper">
                      <div className="slider-modal__top">
                          <img className="slider-modal__top-img" src={img} alt={title} />
                          <div className="slider-modal__top-img-filter" />
                          <button type="button" className="slider-modal__top-exit-btn" onClick={onClose}>
                              <img src={exitButton} alt="exit" />
                          </button>
                          <span className="slider-modal__top-title">{title}</span>
                          <span className="slider-modal__top-description">{description}</span>
                      </div>
                      <div className="slider-modal__down">
                          <span className="slider-modal__down-text">{text}</span>
                      </div>
                  </div>
              </div>,
              modalPortal
          )
        : null;
}

export default SliderModal;
