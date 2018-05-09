import { AppRegistry } from 'react-native';
import App from './App';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Warning: componentWillReceiveProps is deprecated']);
AppRegistry.registerComponent('apolloMobileRn', () => App);
