const CryptoJS = require('crypto-js')

const secretKey = '12345';

const encrypt = ( text ) => {
    const cipherText = CryptoJS.AES.encrypt(text, secretKey).toString()
    return cipherText
}
const decrypt = ( cipherText ) => {
    const bytes = CryptoJS.AES.decrypt(cipherText, secretKey )
    const text = bytes.toString(CryptoJS.enc.Utf8)
    return text
}

module.exports = {
    encrypt,
    decrypt
}