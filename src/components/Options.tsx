import { setOptions } from "../globals/options"
import events from "../globals/events"

export default function(){
    const onDecrypt = () => {
        events.emit('decrypt')
    }

    return (
        <div class='container'>
            <div class='field'>
                <input 
                    class="input" 
                    type="password"
                    placeholder="encryption key (optional)"
                    onchange={ (e) => setOptions({ key: e.target.value }) }
                />
            </div>
            <div class='field'>
                <button class="button is-primary" onClick={onDecrypt}>Decript</button>
            </div>
        </div>
    )
}