import { Button, Column, Input, Row, Text,  } from '../shared/components';

export const Home = () => {
    return (
        <Column width='600px' margin='0 auto'>
            <Text fontWeight='bold'>Hello world, app work</Text>
            <Row width='100%'>
                <Input placeholder='Enter a task name here'/>
                <Button>Ok</Button>
            </Row>
        </Column>
    );
};