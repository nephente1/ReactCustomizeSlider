import * as React from 'react';
import { CarouselDots, CarouselDot } from './Pagination.styles';
import { observer } from 'mobx-react-lite';

interface BulletsPropsType {
    numberOfBullets: number;
    indexOfActive: number;
    bulletsPosition: "left" | "center" | undefined;
}

const Bullets = observer(({numberOfBullets, indexOfActive, bulletsPosition}: BulletsPropsType): JSX.Element => {
    
    const bulletNumber = (bulletsLength: number): Array<JSX.Element> => {
        const out = [];

        for (let index=0; index < bulletsLength; index++) {
            const activeDot = indexOfActive === index? true : false;
            out.push(<CarouselDot key={index} indexOfActive={activeDot}/>);
        } 
        return out;
    };

        return(
            <CarouselDots bulletsPosition={bulletsPosition}>
                { bulletNumber(numberOfBullets) }
            </CarouselDots>
        );
});

export default Bullets;