import * as React from 'react';
import {observer} from 'mobx-react-lite';
import {AppBody} from '../../style/app.styles';
import {ResponsiveElementSlider} from './ResponsiveElementSlider/ResponsiveElementSlider';
import {StaticElementSlider} from './StaticElementSlider/StaticElementSlider';

export const App = observer(() => {
    return (
        <AppBody>
            <h1>Static element mode</h1>
            <StaticElementSlider />
            <h1>Responsive element mode</h1>
            <ResponsiveElementSlider />
        </AppBody>
    );
});