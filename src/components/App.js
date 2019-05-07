import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Users } from '../db/users.json';

async function Index() {
    return <h2>Everyone</h2>;
}

function Male() {
    return <h2>Male</h2>;
}

function Female() {
    return <h2>Female</h2>;
}

function Over30() {
    return <h2>Over 30</h2>;
}

function Under30() {
    return <h2>Under 30</h2>;
}

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Everyone</Link>
                        </li>
                        <li>
                            <Link to="/male/">Male</Link>
                        </li>
                        <li>
                            <Link to="/female/">Female</Link>
                        </li>
                        <li>
                            <Link to="/over30/">Over 30</Link>
                        </li>
                        <li>
                            <Link to="/under30">Under 30</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/" exact component={Index} />
                <Route path="/male/" component={Male} />
                <Route path="/female/" component={Female} />
                <Route path="/over30/" component={Over30} />
                <Route path="/under30/" component={Under30} />
            </div>
        </Router>
    );
}

export default App;