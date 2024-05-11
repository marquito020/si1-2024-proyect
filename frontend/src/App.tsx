import { BrowserRouter, Route, Routes } from 'react-router-dom';
/* import { Toaster } from 'react-hot-toast'; */
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import { Provider } from 'react-redux';
import { SWRConfig } from 'swr';
import { store } from "./redux/store";
import { PrivateRoutes, PublicRoutes } from "./constants/routes";
import Authenticate from './guards/Authenticate';
import Private from './pages/private/Private';


function App() {
  /* const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []); */

  return (
    <>
      {/* <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      /> */}
      <SWRConfig value={{ suspense: true, revalidateOnFocus: false }}>
        {/* <Suspense fallback={<Loading />}> */}
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path={PublicRoutes.LOGIN} element={<SignIn />} />
              <Route path="/auth/signup" element={<SignUp />} />
              <Route element={<Authenticate />}>
                <Route
                  path={`${PrivateRoutes.PRIVATE}/*`}
                  element={<Private />}
                />
              </Route>
              <Route path="*" element={<>PAGE NOT FOUNT</>} />
              {/* <Route element={<DefaultLayout />}>
                <Route index element={<ECommerce />} />
                {routes.map((routes, index) => {
                  const { path, component: Component } = routes;
                  return (
                    <Route
                      key={index}
                      path={path}
                      element={
                        <Suspense fallback={<Loader />}>
                          <Component />
                        </Suspense>
                      }
                    />
                  );
                })}
              </Route> */}
            </Routes>
          </BrowserRouter>
        </Provider>
        {/* </Suspense> */}
      </SWRConfig>
    </>
  );
}

export default App;

/* loading ? (
  <Loader />
) :  */
