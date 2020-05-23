import * as React from 'react';
import { observer } from 'mobx-react-lite';
import {ChevronRight, ChevronLeft, ChevronRightSmall , ChevronLeftSmall, ArrowWrapper, ArrowType } from './Pagination.styles';

export const ArrowLeft = observer(({ isBigArrow, onClick, isOnStart}: ArrowType) => {
    return(
        <ArrowWrapper isOnStart={isOnStart} onClick={onClick}>
            {isBigArrow ? <ChevronLeft /> : <ChevronLeftSmall /> }
        </ArrowWrapper>
    );
});

export const ArrowRight = observer(({ isBigArrow, onClick, isOnEnd }: ArrowType) => {
    return(
        <ArrowWrapper isOnEnd={isOnEnd} onClick={onClick}>
            {isBigArrow ? <ChevronRight /> : <ChevronRightSmall /> }
        </ArrowWrapper>
    );
});

