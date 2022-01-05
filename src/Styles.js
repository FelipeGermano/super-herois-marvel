import { StyleSheet, Dimensions } from 'react-native'
import Color from './Config/Color';

const { height, width } = Dimensions.get("window")

const Styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: Color.red
    },
    containerSearch:{
        width: width,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputSearch:{
        flex: 1,
        height: 45,
        backgroundColor: '#FFF',
        paddingHorizontal: 15
    },
    buttonSearch: {
        height: 45,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: Color.gray,
    },
    textButtonSearch:{
        fontSize: 13,
        fontWeight: 'bold',
        letterSpacing: 0.3
    },
    containerLabelSearch:{
        height: 45,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: Color.gray,
    },
    textLabelSearch:{
        fontSize: 13,
        fontWeight: 'bold',
        letterSpacing: 0.3
    }
});

export default Styles
