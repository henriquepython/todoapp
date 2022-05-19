import styled from 'styled-components';
import { 
    border,
    borderRadius,
    BorderRadiusProps,
    BordersProps,
    color,
    ColorProps,
    flexbox,
    FlexboxProps,
    layout,
    LayoutProps,
    space,
    SpaceProps
} from 'styled-system';

type ColumnProps = LayoutProps & SpaceProps & ColorProps & BorderRadiusProps & BordersProps & FlexboxProps;

export const Column = styled.div<ColumnProps>`
    display: flex;
    flex-direction: column;
    ${flexbox}
    ${layout}
    ${space}
    ${color}
    ${borderRadius}
    ${border}
`;