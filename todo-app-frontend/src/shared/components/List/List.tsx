import { Column, IListItem, ListItem } from '..';

interface IList {
    items: IListItem[];
}
export const List = (props: IList) => {
    const { items } = props;
    return(
        <Column py='10px'>
            {items.map((item, index) => (
                <ListItem key={index} {...item} />
            ))}
        </Column>
    );
};