import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {
    ApolloClient, //用于发送graphQL请求
    InMemoryCache, //同一个请求的数据会被缓存
    ApolloProvider
} from "@apollo/client";

import App from './App';
import { UserProvider } from './contexts/user.context';
import { CategoriesProvider } from './contexts/categories.context';
import {Provider} from "react-redux";
import store from "./utils/redux/store/store";

import './index.scss';

const rootElement = document.getElementById('root');
const client=new ApolloClient({
    uri:'https://crwn-clothing.com/',
    cache:new InMemoryCache()
})
store.subscribe(()=>{
    render(
        <React.StrictMode>
            <Provider store={store}>
                {/*<ApolloProvider client={client}>*/}
                    <BrowserRouter>
                        <UserProvider>
                            <CategoriesProvider>
                                <App/>
                            </CategoriesProvider>
                        </UserProvider>
                    </BrowserRouter>
                {/*</ApolloProvider>*/}
            </Provider>
        </React.StrictMode>,
        rootElement
    );
})

