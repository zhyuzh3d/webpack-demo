import _ from 'lodash';
import hello from './utils/hello';
function component() {
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    hello()
    return element;
}
document.body.appendChild(component());