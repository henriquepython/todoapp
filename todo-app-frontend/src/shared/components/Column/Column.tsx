import styled from 'styled-components';
import { border, borderRadius, BorderRadiusProps, BordersProps, color, ColorProps, layout, LayoutProps, space, SpaceProps } from 'styled-system';

type ColumnProps = LayoutProps & SpaceProps & ColorProps & BorderRadiusProps & BordersProps;

export const Column = styled.div<ColumnProps>`
    display: flex;
    flex-direction: column;
    ${layout}
    ${space}
    ${color}
    ${borderRadius}
    ${border}
`;