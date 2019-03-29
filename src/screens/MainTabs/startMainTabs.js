import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

const startTabs = () => {
  Promise.all([
          Icon.getImageSource("streetview", 30, "blue"),
          Icon.getImageSource("share", 30 , "green")
        ]).then(source => {
          Navigation.startTabBasedApp({
              tabs: [
                  {
                      screen: "awesome-places.FindPlaceScreen",
                      label: "Find Place",
                      title: "Find Place",
                      icon: source[0]
                  },
                  {
                      screen: "awesome-places.SharePlaceScreen",
                      label: "Share Place",
                      title: "Share Place",
                      icon: source[1]
                  }
              ]
          });
        });

    };
//whatis that
export default startTabs;
