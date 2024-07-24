import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './style/global/GlobalStyles';
import { theme } from './style/theme/theme';
import routeConstants from './constant/routeConstants';
import { BaseLayout } from './components';
import { Home, PageNotFound, Search, ShowDetail, Shows } from './screens';


const routes = [
  {
    path: routeConstants.HOME,  // '/',
    element: <BaseLayout />, // main layout
    childern: [
      {
        path: "/", element: <Home />
      },
      {
        path: routeConstants.SHOWS, element: <Shows />
      },
      {
        path: `${routeConstants.SHOWS}/:id`, element: <ShowDetail />
      },
      {
        path: routeConstants.SEARCH, element: <Search />
      }
    ]
  },
  {
    path: "*", element : <PageNotFound/>
  }
]

function App() {


  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyles />

          <Routes>
            {
              routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element}>
                  {
                    route.childern && route.childern.map((childRoute, childIndex) => (
                      <Route key={childIndex} path={childRoute.path} element={childRoute.element} />
                    ))
                  }
                </Route>
              ))
            }
          </Routes>

        </Router>

      </ThemeProvider>
    </>
  )
}

export default App
