import { Column, Text } from '..';

export interface IListItem {
    label: string;
}
export const ListItem = (props: IListItem) => {
    const { label } = props;
    return(
        <Column width='100%' bg='rgba(0, 0, 0, 0.2)' p='20px' mb='10px' borderLeft='5px solid #fff' border-Radius='4px'>
            <Text>{label}</Text>
        </Column>
    );
};