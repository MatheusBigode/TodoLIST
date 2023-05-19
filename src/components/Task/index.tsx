import {View, Text,TouchableOpacity} from 'react-native';
import {styles} from './styles';
import IconTrash from 'react-native-vector-icons/EvilIcons';
import Icon from "react-native-vector-icons/Ionicons";




type Props = {
    id: Number;
    isMarked: boolean;
    desc: string; 
    onRemove: () => void;
    onMark: () => void;
}

export default function Task ({id,isMarked, desc, onRemove, onMark} : Props) {
   
    return(
        <View style={styles.container}> 
            <TouchableOpacity
            onPress={() => onMark()}
            style={isMarked ? styles.checked : styles.unchecked}
            >
           {isMarked && <Icon name="checkmark-outline" color={"white"} />}
            </TouchableOpacity>
            
        
            <Text style={isMarked ? styles.done : styles.desc}>{desc}</Text>


            <TouchableOpacity style={styles.button} onPress={() => onRemove}>
                <IconTrash name="trash" size={30} color="#757575" />
            </TouchableOpacity>
        </View>
    )
}