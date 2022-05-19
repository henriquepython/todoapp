import { useState } from 'react';
import { Button, Column, Icon, Input, List, Logo, Row, Text,  } from '../shared/components';

export const Home = () => {
    const [taskName, setTaskName] = useState('');
    const [tasks, setTasks] = useState<{label: string}[]>([]);

    const handleOKButton = () => {
        if (!taskName) return;

        setTasks(previous => {
            const copy = [...previous];
            copy.push({ label: taskName });
            return copy;
        });
        setTaskName('');

    };

    return (
        <Column width='600px' margin='0 auto'>
            <Column width='100%' py='25px' alignItems='center'>
                <Logo />
            </Column>

            <Column width='100%' padding='20px' minHeight='300px' bg='rgba(255, 255, 255, 0.2)' borderRadius='4px' alignItems='center'>
                <Text fontFamily='secondary' fontSize='bodyExtraLarge'>Ready</Text>
                <Text fontFamily='secondary' fontWeight='bold' fontSize='displayExtraLarge' py='30px'>25:00</Text>

                <Button variant='primary'>
                    <Text color='primary' fontFamily='secondary' fontSize='bodyExtraLarge'>Start</Text>
                </Button>
                <Row p='20px'>
                    <Button variant='primary' p='10px 20px' mx='5px'>
                        <Icon variant='play'/>
                    </Button>
                    <Button variant='primary' p='10px 20px' mx='5px'>
                        <Icon variant='pause'/>
                    </Button>
                    <Button variant='primary' p='10px 20px' mx='5px'>
                        <Icon variant='stop'/>
                    </Button>
                    <Button variant='primary' p='10px 20px' mx='5px'>
                        <Icon variant='restart'/>
                    </Button>
                    <Button variant='primary' p='10px 20px' mx='5px'>
                        <Icon variant='done'/>
                    </Button>
                </Row>
            </Column>

            <Text my='10px' fontSize='bodyLarge' fontWeight='bold' pl='10px'>Task</Text>
            <Row width='100%'>
                <Input 
                    flex={1} 
                    placeholder='Enter a task name here...' 
                    onChange={e => setTaskName(e.target.value)}
                    value={taskName}
                />
                <Button onClick={handleOKButton}>Ok</Button>
            </Row>
            <List items={tasks} />
        </Column>
    );
};