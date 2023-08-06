export function getURL(text: string){
    return new URL(text, location.origin).toString()
}

export function getText(url: string){
    return url.split('/').at(-1)
}