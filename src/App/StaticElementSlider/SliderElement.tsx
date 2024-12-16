import * as React from "react";
import {observer} from 'mobx-react-lite';
import {ElementWrapper, Title} from './SliderElement.styles';

interface SliderElementPropsType {
    sliderData: any;
}

export const SliderElement = observer(({sliderData}: SliderElementPropsType) => {
    
    return(
        <ElementWrapper>
            <Title>{sliderData.name}</Title>
        </ElementWrapper>
    );
});