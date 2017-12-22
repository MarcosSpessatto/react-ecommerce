import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
var jsdom = require('jsdom');
const { JSDOM } = jsdom;


Enzyme.configure({ adapter: new Adapter() });

global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};

process.env.NODE_ENV = 'test'
// Register babel so that it will transpile ES6 to ES5 before our tests run.
require('babel-register')()
// Disable webpack-specific features for tests since
// Mocha doesn't know what to do with them.
require.extensions['.css'] = function () {return null}
// Configure JSDOM and set global variables
// to simulate a browser environment for tests.
var exposedProperties = ['window', 'navigator', 'document']
const { document } = (new JSDOM('')).window;
global.navigator = { userAgent: 'node.js' }
global.window = document.defaultView
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property)
    global[property] = document.defaultView[property]
  }
})
global.document = document;