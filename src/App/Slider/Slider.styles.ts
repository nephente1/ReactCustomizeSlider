import styled from '@emotion/styled';
  
export const Main = styled('div')`
    overflow: hidden;
    width: 100%;
    height: 100%;
`;
interface SwiperPropsType {
    translateMovement: number;
    transitionDur: number | string | undefined;
}

export const Swiper = styled('div')<SwiperPropsType>`
    display: flex;
    transition-property: transform;
    transform: ${props => `translateX(${props.translateMovement}px)` };
    transition-duration: ${props => props.transitionDur};
    transition-timing-function: ease;
    width: 100%;
    flex-flow: row nowrap;
`;