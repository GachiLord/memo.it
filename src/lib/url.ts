export function getURL(text: string){
    return new URL(text, location.origin).toString()
}

export function getText(url: string){
    const memo = url.split('/').at(-1)

    if (memo === "#" || memo === undefined) return ""

    return memo
}