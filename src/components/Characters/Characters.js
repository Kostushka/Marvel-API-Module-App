import { STANDARD_XLARGE } from '../../constants/api';
import { ROOT_MODAL } from '../../constants/root';
import { getDataApi } from '../../utils/getDataApi';
import closeImgWhite from './img/close-white.svg';
import Notification from '../Notification';

import classes from './Characters.css';

class Characters {
    renderContent(data) {
        let htmlContent = '';
        data.forEach(({ name, thumbnail: { path, extension } }) => {
            const imgSrc = path + '/' + STANDARD_XLARGE + '.' + extension;
            htmlContent += `
                <li class='${classes.characters__item}'>
                    <img class='img-cover ${classes.characters__img}' src='${imgSrc}' />
                    <span class='${classes.characters__name}'>${name}</span>
                </li>
            `;
        });
        const htmlWrapper = `
            <div class='${classes.wrapper}'>
                <ul class='${classes.characters__container}'>
                    ${htmlContent}
                </ul>
                <button 
                    class='btn bg-contain ${classes.characters__close}'
                    onclick="modal.innerHTML = ''"
                    style='background-image: url(${closeImgWhite})'
                    >
                </button>

            </div>
        `;
        ROOT_MODAL.innerHTML = htmlWrapper;
    }
    async render(uri) {
        const data = await getDataApi(uri);
        data.length ? this.renderContent(data) : Notification();
    }
}

export default new Characters();
