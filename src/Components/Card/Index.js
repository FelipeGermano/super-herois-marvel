import React from 'react'
import { Text, View, Image } from 'react-native'

import Styles from './Styles'

const Card = (item) => {
    return (
        <View style={Styles.container}>
            <View style={Styles.containerFoto}>
                <Image source={{uri: `${item.thumbnail.path}/portrait_incredible.${item.thumbnail.extension}`}} style={Styles.thumbnail} resizeMethod='resize' resizeMode='stretch' />
            </View>
            <View style={Styles.containerName}>
                <Text style={Styles.textName}>{item.name}</Text>
            </View>
        </View>
    )
}

export default Card