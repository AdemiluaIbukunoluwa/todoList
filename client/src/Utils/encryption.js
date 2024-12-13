import * as CryptoJS from 'crypto-js'

const secretKey = '12345';

export const encrypt = ( text ) => {
    const cipherText = CryptoJS.AES.encrypt(text, secretKey).toString()
    return cipherText
}

export const decrypt = ( cipherText ) => {
    const bytes = CryptoJS.AES.decrypt(cipherText, secretKey )
    const text = bytes.toString(CryptoJS.enc.Utf8)
    return text
}