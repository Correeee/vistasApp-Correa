import React from 'react'
import { View, Text, Button } from "react-native";
import styles from './styles'

const Products = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de productos</Text>
            <Button
                title="Ir a Producto" onPress={() => navigation.navigate("Product")}/>
        </View>
    )
}

export default Products