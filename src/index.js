import {Component} from "doz";
import PlaySVG from "./play-svg";

export default class FakeVideoPlayer extends Component{

    constructor(o) {
        super(o);

        this.propsConvertOnFly = true;

        this.props = {
            interval: 2000,
            images: [],
            title: '',
            href: 'javascript:void(0)',
            target: '',
            showFakePlay: true,
            refreshCacheCycle: 15,
            _showIndex: 0,
            _lastCacheBuster: new Date().getTime()
        }


        this._cycle = 0;

        this.propsConvert = {
            images(v) {
                if (typeof v === 'string') {
                    if (v[0] === '[') {
                        let tmpV = v.replace(/'|&apos;/g, '"');
                        tmpV = JSON.parse(tmpV);
                        v = tmpV
                    }
                }

                return v;
            }
        }
    }

    template(h) {
        
        //language=HTML
        return h`
            <style> 
                .container {
                    position: relative;
                    display: block;
                    cursor: ${this.props.showFakePlay ? 'pointer' : 'default' };
                    background: #000;
                    padding-bottom: 56.25%; 
                    height:0;
                    overflow: hidden;
                }
                
                .frames {
                    display: block;
                }
                
                .fake-play {
                    width: 20%;
                    max-width: 160px;
                    opacity: .8;
                    transition: all 300ms;
                }
                
                .fake-play svg{
                    fill: #fff
                }
                
                .backdrop {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    left: 0;
                    top: 0;
                    background: rgba(0, 0, 0, .3);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .backdrop:hover .fake-play {
                    opacity: 1;
                    width: 25%;
                    max-width: 180px;
                }
                
                .frames img {
                    width: 100%;
                    display: block;
                }
            </style>
            
            <a title="${this.props.title}" alt="${this.props.title}" href="${this.props.href}" target="${this.props.target}" class="container">
                <div d-show="${this.props.showFakePlay}" class="backdrop">
                    <${PlaySVG} class="fake-play"/>
                </div>
                <div class="frames">
                    ${this.props.images.map((url, i) => h`<img d-show="${i === this.props._showIndex}" src="${this.cacheBuster(url)}" />`)}
                </div>
            </a>
        `
    }

    onMount() {
        setInterval(() => {
            this.props._showIndex = ++this.props._showIndex % this.props.images.length
            if (this._cycle === this.props.refreshCacheCycle) {
                this._cycle = 0;
                this.updateCacheBuster();
            } else {
                this._cycle++;
            }
        }, this.props.interval)
    }

    cacheBuster(url) {
        return url + '?_cb=' + this.props._lastCacheBuster
    }

    updateCacheBuster() {
        this.props._lastCacheBuster = new Date().getTime()
    }

};
