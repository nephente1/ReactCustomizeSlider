import * as React from 'react';
import {Slider} from '../Slider/Slider';
import {ResponsiveCarouselWrapper} from ".//RespSliderElement.styles";
import {RespSliderElement} from "./RespSliderElement";
import { observer } from 'mobx-react-lite';
import {mockedDataArray} from '../mockedDataArray';

const renderRespElementsToSlide = () => {
    return <>{ mockedDataArray.map(el => <RespSliderElement key={el.id} sliderData={el} />) }</>
}

export const ResponsiveElementSlider = observer(() => {
    const [width, setWidth] = React.useState(0);

    const measuredRef = React.useCallback(node => {
        if (node !== null) {
        setWidth(node.getBoundingClientRect().width);
        }
    }, []);

    return ( 
        <ResponsiveCarouselWrapper ref={measuredRef}>
            <Slider 
                isBigArrows={true} 
                renderBullets={true} 
                elementWidth={width + 8} 
                elementsNumber={mockedDataArray.length} 
                elementsToSlide={renderRespElementsToSlide()}
                bulletsPosition='left'
                />
        </ResponsiveCarouselWrapper>
    );
});