import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    
    },
    image: {
        flex: 1,
        width: '100%'
    },
    appName: { alignSelf: 'center', justifyContent: 'center', fontFamily: 'Consolas', fontSize: 13 , color: 'white', width : 75, textAlign: 'center'},
    appContainer: {},
    appRow1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 20
    }
})

export default styles