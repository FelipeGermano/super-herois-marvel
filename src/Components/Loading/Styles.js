import { StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get("window")

const Styles = StyleSheet.create({
    container:{
        width: width,
        height: height,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    }
});

export default Styles
