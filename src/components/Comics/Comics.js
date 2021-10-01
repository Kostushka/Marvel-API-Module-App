import { ROOT_INDEX } from '../../constants/root';
import {
    API_URL,
    IMAGE_NOT_AVAILABLE,
    STANDARD_XLARGE,
    URL_CHARACTERS,
    URL_COMICS,
} from '../../constants/api';
import Error from '../Error';
import { getDataApi } from '../../utils/getDataApi';
import classes from './Comics.css';

class Comics {
    renderComics(data) {
        let htmlContent = '';

        data.forEach(({ id, title, thumbnail: { path, extension } }) => {
            if (path.lastIndexOf(IMAGE_NOT_AVAILABLE) === -1) {
                const uri =
                    API_URL + URL_COMICS + '/' + id + '/' + URL_CHARACTERS;

                const imgSrc = path + '/' + STANDARD_XLARGE + '.' + extension;
                htmlContent += `
                    <li class='comics__item ${classes.comics__item}' data-uri='${uri}'>
                        <span class='${classes.comics__name}'>${title}</span>
                        <img class='img-contain ${classes.comics__img}' src='${imgSrc}' />
                    </li>
                `;
            }
        });

        let htmlWrapper = `
            <ul class='${classes.comics__container}'>
                ${htmlContent}
            </ul>
        `;

        ROOT_INDEX.innerHTML = htmlWrapper;
    }

    async render() {
        const data = await getDataApi(URL_COMICS);
        data ? this.renderComics(data) : Error();
    }

    eventListener() {
        document.querySelectorAll('.comics__item').forEach((el) => {
            const uri = el.getAttribute('data-uri');
            el.addEventListener('click', () => {
                console.log(uri);
            });
        });
    }
}

export default new Comics();
