import _ from 'lodash';

function creacteDomElement() {
    let dom =document.createElement('div');
    dom.innerHTML=_.join(['baidu','.com','好'],'');
    return dom;
}

document.body.appendChild(creacteDomElement())