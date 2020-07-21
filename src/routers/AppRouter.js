import React, { useReducer } from 'react';
import filtersReducer, { defaultFiltersReducerState } from '../reducers/filtersReducer';
import FiltersContext from '../context/FiltersContext';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from '../components/HomePage';
import SearchPage from '../components/SearchPage';
import AboutPage from '../components/AboutPage';
import Header from '../components/Header';
import DesktopPage from '../components/DesktopPage';
import NotFound from '../components/NotFound';

function AppRouter() {
  const [filters, dispatch] = useReducer(filtersReducer, defaultFiltersReducerState);

  return (
    <div className="AppRouter">
      <FiltersContext.Provider value={{filters, dispatch}}>
        <Router>
        <Header />
          <Switch>
            <Route path='/' component={HomePage} exact={true} />
            <Route path='/search' component={SearchPage} exact={true} />
            <Route path='/about' component={AboutPage} exact={true} />
            <Route path='/desktop' component={DesktopPage} exact={true} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </FiltersContext.Provider>
    </div>
  );
}

export default AppRouter;
