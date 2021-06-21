import {define, defineWebComponent} from 'doz'
import cmp from './src'

// expose component to global scope
function register() {
    if (typeof window !== 'undefined') {
        define('doz-fake-video-player', cmp);
        // Keep in mind to add a prefix like this: 'dwc-' to the name of the component you are going to define, 
        // this to prevent Doz from processing possible Web Components that have the same name as the Doz Components.
        defineWebComponent('dwc-doz-fake-video-player', cmp, [
            'interval',
            'images',
            'title',
            'href',
            'target',
            'show-fake-play',
            'refresh-cache-cycle',
            'stop-download',
        ]);
    }
}

register();

export default cmp

if (module.hot) {
    module.hot.dispose(function () {
        register();
    })
}
