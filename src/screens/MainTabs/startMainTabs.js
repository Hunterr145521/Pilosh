import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';


const startTabs = () => {
  Promise.all([
          Icon.getImageSource("streetview", 30, "blue"),
          Icon.getImageSource("share", 30 , "green"),
          Icon.getImageSource("assignment", 30)
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
