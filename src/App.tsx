import { BrowserRouter as Router, Outlet, Route, Routes } from "react-router-dom";
import { AuthProvider, RequireAuth } from "./contexts/auth";
import { SubjectProvider } from "./contexts/subject";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import { Subject } from "./pages/report/Subject";
import { Scan } from "./pages/Scan";
import { Search } from "./pages/Search";
import { TemplateAppHome } from "./Templates/AppHome";
import { Welcome } from "./pages/Welcome";

function App() {
  return (
    <AuthProvider>
      <SubjectProvider>
        <Router>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route
              path="/welcome"
              element={
                <RequireAuth>
                  <Welcome />
                </RequireAuth>
              }
            />
            <Route
              path="/"
              element={
                <RequireAuth>
                  <TemplateAppHome />
                </RequireAuth>
              }
            >
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
            </Route>
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Outlet />
                </RequireAuth>
              }
            >
              <Route path="/scan" element={<Scan />} />
              <Route
                path="/report/subject/:id"
                element={<Subject />}
              />
            </Route>
          </Routes>
        </Router>
      </SubjectProvider>
    </AuthProvider>
  );
}

export default App;
