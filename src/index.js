import Bundle from './bundle.js';
import React from 'react';
function lazyload(model){
    let components = {};
    model.map((item) => {
        components[item['name']] = (props) => (
            <Bundle load={item[component]}>
                {(Container) => <Container {...props} />}
            </Bundle>
        );
    });
    return components;
};
export default lazyload;
