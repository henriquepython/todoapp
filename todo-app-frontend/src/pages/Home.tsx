import { Button, Column, Input, List, Row, Text,  } from '../shared/components';

export const Home = () => {
    return (
        <Column width='600px' margin='0 auto'>
            <Text my='10px' fontSize='bodyLarge' fontWeight='bold' pl='10px'>Task</Text>
            <Row width='100%'>
                <Input flex={1} placeholder='Enter a task name here'/>
                <Button>Ok</Button>
            </Row>
            <List items={[
                { label: 'Task 1'},
                { label: 'Task 2'},
                { label: 'Task 3'},
            ]} />
        </Column>
    );
};