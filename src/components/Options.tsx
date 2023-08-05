import Dropdown from "./Dropdown";
import Key from "./Key";

export default function(){
    return (
        <div class='container'>
            <div class='field'> <Key /> </div>
            <div class='field'> <Dropdown /> </div>
            <div class='field'> <button class="button is-primary">Decript</button> </div>
        </div>
    )
}