import { useState } from 'react';
import { Button, Column, Input, List, Row, Text,  } from '../shared/components';

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