import Bundle from './bundle.js';
import React from 'react';
function isArray(object){
    return object && typeof object==='object' &&
      Array == object.constructor;
}
function lazyload(model){
    let components = {};
    if(isArray(model)){
        model.map((item) => {
            components[item['name']] = (props) => (
                <Bundle load={item[component]}>
                    {(Container) => <Container {...props} />}
                </Bundle>
            );
        });
    } else {
        components = (props) => (
            <Bundle load={model}>
                {(Container) => <Container {...props} />}
            </Bundle>
        );
    }
    return components;
};
export default lazyload;
