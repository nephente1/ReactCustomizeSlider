import * as React from 'react';
import styled from '@emotion/styled';

interface PropsType {
    className?: string;
}

const SvgElement = styled('svg')<PropsType>`
    height: auto;
`;

const ChevronRightIcon = ({ className }: PropsType) => (
    <SvgElement fill='#5d5d5d' className={ className } xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
        <path
            fill="#fill"
            fillRule="evenodd"
            d="M7.632 23.999a.632.632 0 01-.447-1.078L18.106 12 7.185 1.078a.632.632 0 01.893-.893l11.369 11.369a.632.632 0 010 .893L8.077 23.816a.63.63 0 01-.446.184v-.001z"
        />
    </SvgElement>
);


export interface ArrowType {
    onClick?: () => void,
    isBigArrow? : boolean,
    isOnStart?: boolean,
    isOnEnd?: boolean
}

export const ChevronRight = styled(ChevronRightIcon)`
    width: 24px;
    padding: 16px;
    box-sizing: content-box;
`;

export const ChevronLeft = styled(ChevronRight)`
    transform: rotate(180deg);
`;

export const ChevronRightSmall = styled(ChevronRightIcon)`
    width: 16px;
    padding: 8px;
    box-sizing: content-box;
`;

export const ChevronLeftSmall = styled(ChevronRightSmall)`
    transform: rotate(180deg);
`;

export const ArrowsWrapper = styled('div')`
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 0;
    bottom: 0;
`;

export const ArrowWrapper = styled('div')<ArrowType>`
    display: none;
    @media screen and (min-width: 620px) {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        cursor: ${(props): string => ((props.isOnStart ?? false) || (props.isOnEnd ?? false))? 'none' : 'pointer'};
        pointer-events: ${(props): string => ((props.isOnStart ?? false) || (props.isOnEnd ?? false)) ? 'none' : 'all'};
        opacity: ${(props): string => ((props.isOnStart ?? false) || (props.isOnEnd ?? false)) ? '0.2' : '1'};
    }
`;

interface BulletsPositionPropsType {
    bulletsPosition: 'left' | 'center' | undefined,
}

export const bulletsPositionType = ( bulletsPosition?: 'left' | 'center' | undefined ): string => {
    if (bulletsPosition !== undefined) {
        if (bulletsPosition === 'left') {
            return `
                left: 18px;
                margin: 0;
                text-align: left;
            `;
        }
        if (bulletsPosition === 'center') {
            return `
                left: 0;
                right: 0;
                text-align: center; 
            `;
        }
    }
    return `
        left: 18px;
        margin: 0;
        text-align: left;`
    ;
};



export const CarouselDots = styled('div')<BulletsPositionPropsType>`
    position: absolute;
    bottom: 15px;
    ${({ bulletsPosition }): string => bulletsPositionType(bulletsPosition)};
    @media screen and (min-width: 1024px) {
        display: none;
    }
`;

interface CarouselDotPropsType {
    indexOfActive: boolean;
};

export const CarouselDot = styled('div')<CarouselDotPropsType>`
    display: inline-block;
    background-color: ${props => props.indexOfActive ? '#fff' : 'rgba(255, 255, 255, 0.5)' };
    padding: 0;
    width: 8px;
    height: 8px;
    margin-right: 4px;
    border-radius: 50%;
    &:last-child {
        margin-right: 0;
    }
 `;
