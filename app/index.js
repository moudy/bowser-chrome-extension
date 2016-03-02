require('babel-polyfill');

import {Delegate} from 'dom-delegate';

const url = (window.location != window.parent.location)
  ? document.referrer
  : document.location.href;


if (url.match(/^http(s?):\/\/bowser\./)) {
  const delegate = new Delegate(document.body);

  delegate.on('click', 'a', (e) => {
    const {target} = e;
    if (target.href && target.href.match(/^http(s?):\/\//)) {
      e.preventDefault();
      window.parent.postMessage({
        id: 'bowser-click',
        to: target.href,
        from: window.location.href,
      }, '*');
    }
  });

  window.parent.postMessage({
    id: 'bowser-installed',
    installed: true,
  }, '*');
}
