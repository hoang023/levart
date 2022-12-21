import React from "react";
import { Fragment } from "react";

import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { privateRoutes, publishRoutes } from "./routes";
import { DefaultLayout } from "@/components/Layout";
import {AdminLayout} from "@/components/Layout";

import ScrollToTop from "./routes/ScrollToTop";
import AuthContextProvider from "./contexts/AuthContext.js";
import MyTripModal from "./components/General/Modal/MyTripModal";
import CreateCollectionModal from "./components/General/Modal/CreateCollectionModal";
import { roomType } from "./components/General/IconText/Data";
function App() {
  return (
    <AuthContextProvider>
      <div>
        <BrowserRouter>
          <ScrollToTop>
            <Routes>
              {publishRoutes.map((route, index) => {
                let Layout = DefaultLayout;
                const Page = route.component;

                if (route.layout) {
                  Layout = route.layout;
                } else if (route.layout === null) {
                  Layout = Fragment;
                }
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  />
                );
              })}
              {privateRoutes.map((route, index) => {
                let Layout = AdminLayout;
                const Page = route.component;

                if (route.layout) {
                  Layout = route.layout;
                }
                else if (route.layout === null) {
                  Layout = Fragment;
                }
                return (
                  <Route 
                  key={index}
                  path = {route.path}
                  element = {
                    <Layout>
                      <Page/>
                    </Layout>
                  }
                  />
                );
              })}
            </Routes>
          </ScrollToTop>
        </BrowserRouter>
        <MyTripModal />
        <CreateCollectionModal />
      </div>
    </AuthContextProvider>
  );
}

export default App;

