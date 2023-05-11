import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, Category, Product, Products } from "../../screens";

const Stack = createNativeStackNavigator()

const MainNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Categories">
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="Product" component={Product} />
            <Stack.Screen name="Products" component={Products} />
        </Stack.Navigator>
    )
}

export default MainNavigator