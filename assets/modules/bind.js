import ReactDOM from "react-dom";
import React from "react";

export const bindComponent = (container, Component) => {
    const element = document.getElementById(`rct-${container}`);

    if (element) {
        const data = JSON.parse(element.dataset.props);

        delete element.dataset.props;
        ReactDOM.render(<Component {...data} />, element);
    }
};
