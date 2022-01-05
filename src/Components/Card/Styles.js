import { StyleSheet, Dimensions } from 'react-native'
import Color from '../../Config/Color';

const { height, width } = Dimensions.get("window")

const Styles = StyleSheet.create({
    container: {
        width: width,
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: Color.dark_red,
        paddingVertical: 5,
    },
    containerFoto:{
        width: 100,
        height: '100%',
    },
    thumbnail:{
        width: '100%',
        height: '100%',
    },
    containerName:{
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: "rgba(0,0,0,0.8)",
        display: 'flex',
        justifyContent: 'center'
    },
    textName:{
        color: Color.gray,
        fontSize: 15,
        letterSpacing: 0.3,
        fontWeight: 'bold'
    }
});

export default Styles
