import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { Swiper, Main } from './Slider.styles';
import Bullets  from "../pagination/Bullets";
import {ArrowLeft, ArrowRight} from "../pagination/Arrows";
import {ArrowsWrapper} from "../pagination/Pagination.styles";
import { makeAutoObservable } from 'mobx';


export class SliderState {
    private wheelTimeout?: number | null = null;
    private transitionTimeout?: number | null = null;
    private lastTouch?: number = 0;

    currentIndex: number = 0;
    movement: number = 0;
    transitionDuration: number | string | undefined = '0s';

    constructor(readonly props: SliderPropsType) {
        makeAutoObservable(this);
    }

    handleTouchStart = (e: React.TouchEvent): void => {
        this.lastTouch = e.nativeEvent.touches[0].clientX;
    }
    
    handleTouchMove = (e: React.TouchEvent): void => {
        const delta = this.lastTouch! - e.nativeEvent.touches[0].clientX;
        this.lastTouch = e.nativeEvent.touches[0].clientX;

        this.handleMovement(delta);
    }
    
    handleTouchEnd = (): void => {
        this.handleMovementEnd();
        this.lastTouch = 0;
    }
    
    handleWheel = (e: React.WheelEvent<HTMLDivElement>): void => {
        if (this.wheelTimeout !== null) {
            clearTimeout(this.wheelTimeout);
        }

        this.handleMovement(e.deltaX);
        this.wheelTimeout = setTimeout(() => this.handleMovementEnd(), 100);
    }
    
    handleMovement = (delta: number): void => {
        if(this.transitionTimeout !== null){
          clearTimeout(this.transitionTimeout);
        }

        const maxLength = this.props.elementsNumber - 1;
        let nextMovement = this.movement + delta;

        if (nextMovement < 0) {
            nextMovement = 0;
        }

        if (nextMovement > maxLength * this.props.elementWidth) {
            nextMovement = maxLength * this.props.elementWidth;
        }

        this.movement = nextMovement;
        this.transitionDuration = "0s";
    }

    handleMovementEnd = (): void => {
        const endPosition = this.movement / this.props.elementWidth;
        const endPartial = endPosition % 1;
        const endingIndex = endPosition - endPartial;
        const deltaInteger = endingIndex - this.currentIndex;

        let nextIndex = endingIndex;

        if (deltaInteger >= 0) {
            if (endPartial >= 0.1) {
                nextIndex += 1;
            }
        } else if (deltaInteger < 0) {
            nextIndex = this.currentIndex - Math.abs(deltaInteger);
            if (endPartial > 0.9) {
                nextIndex += 1;
            }
        }

        this.transitionTo(nextIndex, Math.min(0.5, 1 - Math.abs(endPartial)));
    }
    
    transitionTo = (index: number, duration: number): void => {

        this.currentIndex = index;
        this.movement = index * this.props.elementWidth;
        this.transitionDuration = `${duration}s`;

        this.transitionTimeout = setTimeout(() => {
            this.transitionDuration = "0s";
        }, duration * 100);
    }

    transitionToLeft = (): void => {
        this.transitionTo(this.currentIndex - 1, 0.5);
    }

    transitionToRight = (): void => {
        this.transitionTo(this.currentIndex + 1, 0.5);
    }
}

export interface SliderPropsType {
    elementWidth: number;
    elementsNumber: number;
    elementsToSlide: JSX.Element;
    isBigArrows: boolean;
    renderBullets: boolean;
    bulletsPosition: 'left' | 'center' | undefined;
}

const renderBullets = (props: SliderPropsType, state: SliderState): React.ReactNode => {
    if (props.renderBullets) {
        return ( 
            <Bullets
                indexOfActive={state.currentIndex}
                numberOfBullets={props.elementsNumber}
                bulletsPosition={props.bulletsPosition}
            />
        );
    }
};

export const Slider = observer((propsIn: SliderPropsType) => {
    // const props = useAsObservableSource(propsIn);
    // const [ state ] = React.useState(() => new SliderState(props));
    const { ...state } = React.useMemo(() => new SliderState(propsIn), [propsIn]);

    console.log('state', state)


    const Buttons = (props: SliderPropsType, state: SliderState): React.ReactNode => {
        const maxLength = props.elementsNumber - 1;
        const maxMovement = maxLength * props.elementWidth;
        const isOnStart = state.movement === 0;
        const isOnEnd = state.movement >= maxMovement;
    
        return (
            <ArrowsWrapper>
                <ArrowLeft isOnStart={isOnStart} isBigArrow={props.isBigArrows} onClick={state.transitionToLeft} />
                <ArrowRight isOnEnd={isOnEnd} isBigArrow={props.isBigArrows} onClick={state.transitionToRight} />
            </ArrowsWrapper>
        );
    };

    return (
        <Main
            onTouchStart={state.handleTouchStart}
            onTouchMove={state.handleTouchMove}
            onTouchEnd={state.handleTouchEnd}
            onWheel={state.handleWheel}
            >
            <Swiper translateMovement={state.movement * -1} transitionDur={state.transitionDuration}>
                {propsIn.elementsToSlide}
            </Swiper>

            { renderBullets(propsIn, state)} 
            { Buttons(propsIn, state) }

        </Main>
    );
});