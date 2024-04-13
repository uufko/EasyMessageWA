import { SafeAreaView } from "react-native"
import React from "react"
import { MainPage } from "./src/components/pages/mainPage";
import { Provider } from "react-redux";
import { Store } from "./src/redux/store";

const App = () => {
  return (
    <Provider store={Store}>
      <SafeAreaView style={{ flex: 1 }}>
        <MainPage />
      </SafeAreaView>
    </Provider>

  )
}

export default App;