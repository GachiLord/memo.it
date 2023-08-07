import AES from 'crypto-js/aes'
import utf8 from 'crypto-js/enc-utf8'


export function encrypt(text: string, password: string){
    const encrypted = AES.encrypt(text, password).toString()
    let escaped = ""

    for (const c of encrypted){
        if (c === "+") escaped += "-"
        else if (c === "/") escaped += "_"
        else escaped += c
    }

    return escaped
}

export function decrypt(text: string, password: string){
    let unescaped = ""

    for (const c of text){
        if (c === "-") unescaped += "+"
        else if (c === "_") unescaped += "/"
        else unescaped += c
    } 

    return AES.decrypt(unescaped, password).toString(utf8)
}