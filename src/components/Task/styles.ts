import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#262626',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checked: {
        width: 24,
        height: 24,
        marginHorizontal: 12,
        marginVertical: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#595abd',
        borderRadius: 999,
    },
    unchecked: {
        width: 24,
        height: 24,
        marginHorizontal: 12,
        marginVertical: 20,
        justifyContent: "center",
        alignItems: "center",
        borderColor: '#1f709f',
        borderWidth: 2,
        borderRadius: 999,
    },
    done: {
        flex: 1,
        fontSize: 16,
        color: '#FFF',
        marginLeft: 16,
        textDecorationLine: "line-through",
    },
    empty: {
        width: '10%',
        backgroundColor: '#262626',
        color: '#262626',
    },
    filled: {
        width: '10%',
        backgroundColor: '#262626',
        color: '#262626',
    },
    desc: {
        flex: 1,
        fontSize: 16,
        color: '#FFF',
        marginLeft: 16,
    },
    buttonText:{
        color: '#FFF',
        fontSize: 24,
    },
    button:{
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor:'#262626',
        alignItems: 'center',
        justifyContent: 'center',
    },

})