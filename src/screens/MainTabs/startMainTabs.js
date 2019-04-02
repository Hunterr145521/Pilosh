import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const startTabs = () => {
  Promise.all([
          Icon.getImageSource(Platform.OS === 'android' ? "streetview" : 'ios-map', 30, "blue"),
          Icon.getImageSource(Platform.OS === 'android' ? "share" : "ios-share", 30 , "green"),
          Icon.getImageSource(Platform.OS === 'android' ? "menu": "ios-menu", 30)
        ]).then(source => {
          Navigation.startTabBasedApp({
              tabs: [
                  {
                      screen: "awesome-places.FindPlaceScreen",
                      label: "Find Place",
                      title: "Find Place",
                      icon: source[0],
                      navigatorButtons: {
                        leftButtons: [
                          {
                            icon: source[2],
                            title: "Menu",
                            id: "SideDrawerToggle"
                          }
                        ]
                      }
                  },
                  {
                      screen: "awesome-places.SharePlaceScreen",
                      label: "Share Place",
                      title: "Share Place",
                      icon: source[1],
                      navigatorButtons: {
                        leftButtons: [
                          {
                            icon: source[2],
                            title: "Menu",
                            id: "SideDrawerToggle"
                          }
                        ]
                      }
                  }
              ],
              drawer: {
                left: {
                  screen: "awesome-places.SideDrawer"
                }
              }
          });
        });

    };
//whatis that
export default startTabs;
