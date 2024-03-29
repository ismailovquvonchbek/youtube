import React from "react";
import "./App.css";
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";

import useToken from "./Components/Hooks/useToken";

function App() {

   const [isLoggedIn] = useToken();

	if (isLoggedIn) {
		return <AuthenticatedApp />;
	} else {
		return <UnauthenticatedApp />;
	}

}

export default App;
