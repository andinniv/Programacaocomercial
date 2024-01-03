import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { initializeApp } from '@react-native-firebase/app';

// Inicializar o Firebase
initializeApp();

// Registrar o componente principal do seu aplicativo
AppRegistry.registerComponent(appName, () => App);
