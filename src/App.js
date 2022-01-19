import { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";
import { Switch } from "react-router-dom";
import AppBar from "./Components/AppBar";
import PrivateRoute from "./Components/Routes/PrivateRoutes";
import PublicRoute from "./Components/Routes/PublicRoutes";
import { getIsFetchingCurrent, getToken } from "./redux/auth/authSelectors";
import { getCurrentUser } from "./redux/auth/authOperations";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Login = lazy(() => import("./pages/LogIn"));
const Phonebook = lazy(() => import("./pages/Phonebook"));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);
  const token = useSelector(getToken);

  useEffect(() => {
    token && dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div className="App">
      {isFetchingCurrentUser ? (
        <Oval color="#00BFFF" height={80} width={80} />
      ) : (
        <>
          <AppBar />
          <Switch>
            <Suspense
              fallback={<Oval color="#00BFFF" height={80} width={80} />}
            >
              <PublicRoute exact path="/">
                <Home />
              </PublicRoute>
              <PublicRoute
                exact
                path="/register"
                restricted
                redirectTo="/contacts"
              >
                <SignUp />
              </PublicRoute>
              <PublicRoute
                exact
                path="/login"
                redirectTo="/contacts"
                restricted
              >
                <Login />
              </PublicRoute>
              <PrivateRoute path="/contacts" redirectTo="/login">
                <Phonebook />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </>
      )}
    </div>
  );
}

export default App;
