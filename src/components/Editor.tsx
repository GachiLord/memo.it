import { createSignal } from 'solid-js'
import { compress, decompress } from '../lib/compression'
import { getURL, getText } from '../lib/url'


export default function(){
    const [text, setText] = createSignal(decompress(getText(location.href) ?? ""))
    const onCopy = () => navigator.clipboard.writeText( getURL(compress(text())) )
    const onOpen = () => location.href = getURL( compress(text()) )

    return (
        <div class="card">
            <div class="card-content">
                <div class="content">
                  <textarea
                    value={text()}
                    onChange={(e) => {setText(e.target.value)}}
                    class="textarea is-medium has-fixed-size"
                    rows={12} 
                    autofocus
                    placeholder="your notes..."
                  />
                </div>
                <footer class="card-footer">
                  <a href="#" class="card-footer-item" onClick={onCopy}>Copy</a>
                  <a href="#" class="card-footer-item" onClick={onOpen}>Open</a>
                </footer>
            </div>
        </div>
    )
}