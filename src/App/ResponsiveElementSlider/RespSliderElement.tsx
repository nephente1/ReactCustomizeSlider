import * as React from "react";
import {observer} from 'mobx-react-lite';
import {RespElementWrapper, Title} from './RespSliderElement.styles';

interface SliderElementPropsType {
    sliderData: any;
}

export const RespSliderElement = observer(({sliderData}: SliderElementPropsType) => {
    
    return(
        <RespElementWrapper>
            <Title>{sliderData.name}</Title>
        </RespElementWrapper>
    );
});