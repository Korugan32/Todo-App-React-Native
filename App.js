import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation';
import useCachedResources from './hook/useCachedResources';
import { TodosProvider } from './components/TodosContext';



export default function App() {
  const isLoadingComplete = useCachedResources();
  if(!isLoadingComplete){
    return(
      <></>
    )
  }else{
  return (
    <TodosProvider>
    <Navigation/>
    </TodosProvider>
  );}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
