import { ROOT_INDEX } from '../../constants/root';
import classes from './Error.css';

const Error = () => {
    const htmlWrapper = `
            <div class='${classes.error__container}'>
                <span>
                    <p class='${classes.error__alert}'>Ошибка!</p>
                    <p class='${classes.error__alert}'>Попробуйте зайти позже.</p>
                </span>
            </div>
        `;
    ROOT_INDEX.innerHTML = htmlWrapper;
};

export default Error;
