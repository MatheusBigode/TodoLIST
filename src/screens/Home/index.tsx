import { styles } from './styles';
import { Text, TextInput, View, TouchableOpacity, FlatList, Image, Keyboard} from 'react-native';
import  Task  from '../../components/Task';
import React,{ useState } from 'react'; 
import IconAdd from 'react-native-vector-icons/EvilIcons';
import { v4 as uuid } from "uuid";


interface Tasks {
    id: string;
    isMarked: boolean;
    desc: string;
  }

export function Home(){

    const [tasks, setTasks] = useState<Tasks[]>([]);
    const [taskDesc, setTaskName] = useState('');
    const [tasksDone, setTasksDone] = useState(0);


    function handleTaskAdd(): void {
        if (taskDesc !== "") {
          const desc = {
            id: uuid(),
            isMarked: false,
            desc: taskDesc,
          };
          setTasks((prevState) => [...prevState, desc]);
          setTaskName("");
          Keyboard.dismiss();
        }
      }

    function handleTaskRemove(id: string): void {
        const noDelete = tasks.filter((desc) => desc.id !== id);
        setTasks(noDelete);
        setTasksDone(noDelete.length);

    }
    
    function handleTaskDone(id: string): void {
        let tasksDone = 0;
        const toggledTask = tasks.map((desc) => {
          if (desc.id === id) {
            desc = {
              ...desc,
              isMarked: !desc.isMarked,
            };
          }
          if (desc.isMarked) tasksDone = tasksDone + 1;
          return desc;
        });
        setTasks(toggledTask);
        setTasksDone(tasksDone);
      }


    return(     
        <View style={styles.container}>
            
                <Image source={require('../../../assets/logo.png' )} style={styles.logo}/>

                <View style={styles.form}>

                    <TextInput
                    style={styles.input}
                    placeholder='Adicione uma nova tarefa'
                    placeholderTextColor="#707070"
                    onChangeText={setTaskName}
                    value={taskDesc}
                    >
                    </TextInput>
                    <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
                        <IconAdd name="plus" size={30} color="white" />
                    </TouchableOpacity>

                </View>
                <View style={styles.tasksStatus}>
                <View style={styles.statusBox}>
                <Text style={styles.statusTitleCreated}>
                    Criadas
                </Text>
                <View style={styles.countBox}>
                    <Text style={styles.count}>{tasks.length}</Text>
                </View>
                </View>
                <View style={styles.statusBox}>
                <Text style={styles.statusTitleDone}>
                    Concluídas
                </Text>
                <View style={styles.countBox}>
                    <Text style={styles.count}>{tasksDone}</Text>
                </View>
                </View>
                </View>

            <View style={styles.horizontalLine}> 
            </View> 

            <FlatList
            data={tasks}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <Task 
                key={item.id}
                id={item.id as string}
                isMarked={item.isMarked}
                desc={item.desc}
                onRemove={() => handleTaskRemove(item.id)}
                onMark={() => handleTaskDone(item.id)}
                />
            )}
            showsVerticalScrollIndicator= {false}
            ListEmptyComponent={() => (
                <>
                <Text style={styles.emptyListUpper}>
                    Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={styles.emptyListLower}>
                    Crie tarefas e organize seus itens a fazer
                </Text>
                </>  
            )}
        />

        </View>
    );
}