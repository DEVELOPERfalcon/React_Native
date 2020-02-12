/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MainComponent from './MainComponent';
import TopTabMainComponent from './TopTabMainComponent';
import DrawerMain from './DrawerMain';


// AppRegistry.registerComponent(appName, () => MainComponent);
AppRegistry.registerComponent(appName, () => DrawerMain);
