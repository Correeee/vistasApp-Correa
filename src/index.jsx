import { useFonts } from 'expo-font';
import Navigation from './navigation';
import { ActivityIndicator, View } from 'react-native';
import styles from './styles';

export default function App() {

    const [loaded] = useFonts({
        "Roboto-Black": require('../assets/fonts/Roboto-Black.ttf'),
        "Roboto-Bold": require('../assets/fonts/Roboto-Bold.ttf'),
        "Roboto-Light": require('../assets/fonts/Roboto-Light.ttf'),
        "Roboto-Medium": require('../assets/fonts/Roboto-Medium.ttf'),
        "Roboto-Regular": require('../assets/fonts/Roboto-Regular.ttf'),
        "Roboto-Thin": require('../assets/fonts/Roboto-Thin.ttf'),
    })

    if (!loaded) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size='large' color='#000'/>
            </View>
        )
    }

    return <Navigation />;
}

