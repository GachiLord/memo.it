import { compress, decompress } from '../src/lib/compression'


test('compression should be reversible', () => {
    let initial = "cake"
    let compressed = compress(initial)

    expect(initial).toBe(decompress(compressed))
})

