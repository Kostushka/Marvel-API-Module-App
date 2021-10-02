import { ROOT_MODAL } from '../../constants/root';
import closeImgBlack from './img/close-black.svg';
import classes from './Notification.css';

const Notification = () => {
    const htmlWrapper = `
            <div class='${classes.notification__container}'>
                <span>Нет контента</span>
                <button 
                    class='btn bg-contain ${classes.notification__close}'
                    onclick="modal.innerHTML = ''"
                    style='background-image: url(${closeImgBlack})'
                    >
                </button>
            </div>
        `;
    ROOT_MODAL.innerHTML = htmlWrapper;
};

export default Notification;
