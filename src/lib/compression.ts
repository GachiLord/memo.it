import pako from "pako"
import { Base64 } from "js-base64"


export function compress(text: string){
    const compressed = pako.deflate(String(text))

    return Base64.fromUint8Array(compressed, true)
}

export function decompress(text: string){
    if (!text) return ""

    try{
        const buffer = Base64.toUint8Array(text)
    
        return pako.inflate(buffer, { to: 'string' })
    }
    catch{
        return text
    }
}