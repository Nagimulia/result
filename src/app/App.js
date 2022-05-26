import React, { useState, createContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Users from "./layouts/users";
import Login from "./layouts/login";
import Main from "./layouts/main";
import NavBar from "./components/navBar";

export const SearchContext = createContext();
function App() {
    const [searchValue, setSearchValue] = useState("");
    return (
        <div>
            <SearchContext.Provider value={{ searchValue, setSearchValue }}>
            <NavBar />
            <Switch>
                <Route path="/users/:userId?" component={<Users searchValue={searchValue}/>} />
                <Route path="/login" component={Login} />
                <Route path="/" exact component={Main} />
                <Redirect to="/" />
            </Switch>
            </SearchContext.Provider>
        </div>
    );
}

export default App;
