# doz-fake-video-player
This component shows a sequences of images with a play button 

## Install
```
npm install doz-fake-video-player
```

Live <a href="https://fabioricali.github.io/doz-fake-video-player/dist/index.html">here</a>

### Example
```javascript
import Doz from 'doz'
import DozFakePlayer from 'doz-fake-video-player'

new Doz({
    root: '#app',
    template(h) {
        return h`
            <${DozFakePlayer}
                images="[
                    'https://radionorba.it/videothumb/0001.jpg',
                    'https://radionorba.it/videothumb/0002.jpg',
                    'https://radionorba.it/videothumb/0003.jpg',
                    'https://radionorba.it/videothumb/0004.jpg',
                    'https://radionorba.it/videothumb/0005.jpg'
                ]"
            />
        `
    }
});
```

## Props
| Name | Default | Description |
| images | '' | array of frames |

#### CDN unpkg
```html
<script src="https://unpkg.com/doz-fake-video-player/dist/bundle.min.js"></script>
```

## Changelog
You can view the changelog <a target="_blank" href="https://github.com/fabioricali/doz-fake-video-player/blob/master/CHANGELOG.md">here</a>

## License
doz-fake-video-player is open-sourced software licensed under the <a target="_blank" href="http://opensource.org/licenses/MIT">MIT license</a>
