import { URL_COMICS } from '../../constants/api';
import { getDataApi } from '../../utils/getDataApi';
import './App.css';

const App = async () => {
    const data = await getDataApi(URL_COMICS);
    console.log(data);
};
export default App;
