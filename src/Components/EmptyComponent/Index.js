import React, { useState, useEffect } from 'react'
import { Text, View, FlatList } from 'react-native'

import Styles from './Styles'

const EmptyComponent = () => {
    return (
        <View style={Styles.container}>
            <Text style={Styles.text}>Nada encontrado!</Text>
        </View>
    )
}

export default EmptyComponent