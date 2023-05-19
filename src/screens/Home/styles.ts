import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#1a1a1a',
      padding: 24,
    },

    logo:{
        marginTop: '15%',
        height: '6%',
        width: '40%',
        alignSelf: 'center',
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36, 
        marginBottom: 42,
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#262626',
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        marginRight: 12,
    },
    button:{
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor:'#1f709f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24,
    },
    tasksStatus: {
        width: 327,
        height: 19,
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center",
        marginTop: 32,
        marginBottom: 20,
      },
    
      statusBox: {
        flexDirection: "row",
        alignItems: "center",
      },
    
      statusTitleCreated: {
        fontWeight: "bold",
        alignItems: "center",
        color: '#1f709f',
      },
      statusTitleDone: {
        fontWeight: "bold",
        alignItems: "center",
        color: '#595abd',
      },
    
      countBox: {
        justifyContent: "center",
        alignItems: "center",
        height: 19,
        width: 25,
        marginLeft: 8,
        backgroundColor: '#1a1a1a',
        borderRadius: 999,
      },
    
      count: {
        fontSize: 12,
        fontWeight: "bold",
        color: '#1a1a1a',
      },
    
    horizontalLine:{
        borderWidth: 0.5,
        borderColor:'#262626',
        margin:10,
        
    },
    emptyListUpper:{
        color: '#747474',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    emptyListLower:{
        color: '#747474',
        fontSize: 14,
        textAlign: 'center',
    },
})