import { createSignal, createEffect } from 'solid-js'
import { compress, decompress } from '../lib/compression'
import { encrypt, decrypt } from '../lib/encryption'
import { getURL, getText } from '../lib/url'
import { options } from '../globals/options'
import events from '../globals/events'


export default function(){
    const [text, setText] = createSignal( decompress(getText(location.href) ?? "") )
    const processText = () => options.key !== "" ? encrypt( text(), options.key ): compress( text() )
    const onCopy = () => navigator.clipboard.writeText( getURL(processText()) )
    const onOpen = () => location.href = getURL( processText() )

    createEffect( () => {
      events.on('decrypt', () => {
        const decrypted = decrypt(text(), options.key)
        if (decrypted !== "") setText(decrypted)
      })
    } )

    return (
        <div class="card is-radiusless">
                <textarea
                  value={text()}
                  onChange={(e) => {setText(e.target.value)}}
                  class="textarea is-medium has-fixed-size is-radiusless"
                  rows={12} 
                  autofocus
                  placeholder="your notes..."
                />
                <footer class="card-footer">
                  <a href="#" class="card-footer-item" onClick={onCopy}>Copy</a>
                  <a href="#" class="card-footer-item" onClick={onOpen}>Open</a>
                </footer>
        </div>
    )
}