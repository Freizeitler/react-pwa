import React from "react";

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <h1>Hello World!</h1>
        );
    }
}

/*const Home = () => {
    "use strict";
    return (
        <h1>Hello World!</h1>
    );
};*/

// TODO: Find export thast works for both: fractal and react-pwa. The first export just works for pwa, the second for fractal. Should be related to the imports or requires they use in the tools.
export default Home;
//module.exports = Home;