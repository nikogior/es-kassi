import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import MainHeader from "./components/MainHeader";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

function App() {




  return (
      <div >
          <MainHeader />

          <main>
              <Switch>
                  <Route path="/" exact>
                    <Redirect to={'/es-kassi/notfound'} />
                  </Route>
                  <Route path="/es-kassi" exact>
                      <Redirect to={'/es-kassi/home'} />
                  </Route>
                  <Route path="/es-kassi/home" >
                      <Home/>
                  </Route>
                  <Route path="/es-kassi/projects" exact>
                      <Projects/>
                  </Route>

                  <Route path="/es-kassi/projects/:projectId">
                      <ProjectDetail/>
                  </Route>
                  <Route path="/es-kassi/notfound" exact>
                      <NotFound />
                  </Route>
              </Switch>
          </main>
      </div>
  );
}

export default App;
