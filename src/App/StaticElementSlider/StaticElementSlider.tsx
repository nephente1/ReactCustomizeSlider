import * as React from 'react';
import {Slider} from '../Slider/Slider';
import {CarouselWrapper} from "./SliderElement.styles";
import {SliderElement} from "./SliderElement";
import { observer } from 'mobx-react-lite';
import {mockedDataArray} from '../mockedDataArray';

const renderElementsToSlide = () => {
    return <>{ mockedDataArray.map(el => <SliderElement key={el.id} sliderData={el} />) }</>
}

export const StaticElementSlider = observer(() => {
    return ( 
        <CarouselWrapper>
            <Slider 
                isBigArrows={true} 
                renderBullets={true} 
                elementWidth={308} 
                elementsNumber={mockedDataArray.length} 
                elementsToSlide={renderElementsToSlide()}
                bulletsPosition='left'
                />
        </CarouselWrapper>
    );
});