import { Slider } from '../../../widgets/Slider';
import { Pizza } from '../../../entities/Pizza';

const MainPage = () => {
    return (
        <main className="app__content-center">
            <Slider />
            <Pizza />
        </main>
    );
};

export default MainPage;
