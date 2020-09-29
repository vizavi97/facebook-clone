import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ColorModeProvider, CSSReset, ThemeProvider} from "@chakra-ui/core";
import {defaultTheme as theme} from "./config/theme/theme"
import {applyMiddleware, compose, createStore} from "redux";
import { Provider } from 'react-redux';
import {rootReducer} from "./redux/reducers/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension/index";
import thunk from "redux-thunk";


const store = createStore(rootReducer,compose(
  applyMiddleware(thunk),
  composeWithDevTools()
))

const app = (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset/>
        <Provider store={store}>
           <App />
       </Provider>
      </ColorModeProvider>
    </ThemeProvider>
)

ReactDOM.render(
    app,document.getElementById('root'));
serviceWorker.unregister();
