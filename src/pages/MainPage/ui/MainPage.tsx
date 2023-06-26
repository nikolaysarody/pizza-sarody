import { Slider } from '../../../widgets/Slider';
import { Pizza } from '../../../entities/Pizza';

const MainPage = () => {
    return (
        <div className="app__content-center">
            <Slider />
            <Pizza />
        </div>
    );
};

export default MainPage;
