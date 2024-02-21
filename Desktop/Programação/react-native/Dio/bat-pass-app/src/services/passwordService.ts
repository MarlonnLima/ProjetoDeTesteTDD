export default function generatePassword() {
    let password: string = ""
    let characters: string = "Aa@$ABcdEfghijklMNOPQRSTuv4567890123 !@#$%¨&*(_{}^?:><"
    let passwordLength = 8

    for(let index = 0; index < passwordLength; index++) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )
    }

    return password
}