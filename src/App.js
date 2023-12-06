import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import { useEffect } from "react";
import store from "./store";
import { getUsers, loadUser } from "./actions/userAction";
import { Toaster } from "react-hot-toast";
import Login from "./components/User/Login/Login";
import { ChakraProvider } from "@chakra-ui/react";
import Profile from "./components/User/Profile/Profile";
import UpdateProfile from "./components/User/Profile/UpdateProfile";
import UpdateAboutMe from "./components/User/Profile/UpdateAboutMe";
import UpdateStack from "./components/User/Profile/UpdateStack";
import CreateProject from "./components/User/Profile/CreateProject";
import ViewProjects from "./components/User/Profile/ViewProjects";
import UpdateProject from "./components/User/Profile/UpdateProject";
import ProtectedRoute from "./components/Layout/ProtectedRoute";
import NotFound from "./components/Layout/NotFound/NotFound";

function App() {
  useEffect(() => {
    store.dispatch(getUsers());
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/console/login"
          element={
            <ChakraProvider>
              <Login />
            </ChakraProvider>
          }
        />

        <Route element={<ProtectedRoute isAdmin={true} />}>
          <Route
            path="/console/profile"
            element={
              <ChakraProvider>
                <Profile />
              </ChakraProvider>
            }
          />

          <Route
            path="/console/profile/update"
            element={
              <ChakraProvider>
                <UpdateProfile />
              </ChakraProvider>
            }
          />

          <Route
            path="/console/aboutme/update"
            element={
              <ChakraProvider>
                <UpdateAboutMe />
              </ChakraProvider>
            }
          />

          <Route
            path="/console/project/update"
            element={
              <ChakraProvider>
                <UpdateStack />
              </ChakraProvider>
            }
          />

          <Route
            path="/console/project/create"
            element={
              <ChakraProvider>
                <CreateProject />
              </ChakraProvider>
            }
          />

          <Route
            path="/console/projects"
            element={
              <ChakraProvider>
                <ViewProjects />
              </ChakraProvider>
            }
          />

          <Route
            path="/console/project/update/:uProjectId"
            element={
              <ChakraProvider>
                <UpdateProject />
              </ChakraProvider>
            }
          />
        </Route>

        <Route
          path="*"
          element={
            <ChakraProvider>
              <NotFound />
            </ChakraProvider>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
