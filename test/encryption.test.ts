import { encrypt, decrypt } from '../src/lib/encryption'


test('encryption should be reversible', () => {
    let initial = "cake"
    let encrypted = encrypt(initial, "password")

    expect(initial).toBe(decrypt(encrypted, "password"))
})