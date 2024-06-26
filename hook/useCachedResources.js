import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from "expo-splash-screen";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(true);


  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          "Poppins": require("../assets/fonts/Poppins-Medium.ttf"),
          "dhurjatiRegular": require("../assets/fonts/Dhurjati-Regular.ttf"),
          "electro": require("../assets/fonts/Electrolize-Regular.ttf")
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);
 return isLoadingComplete;
 
}