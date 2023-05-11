import React from 'react'
import { Text, View, Button, Image } from 'react-native'
import styles from './styles'

const Product = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Producto</Text>
            <Image/>
            <Text style={styles.description}>Descripción</Text>
            <Button title='Comprar' style={styles.button} />
        </View>
    )
}

export default Product