const helpers = {}

helpers.randomNumber = () => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_1234567890'
    let randomNumber_ = '';
    for (let i = 0; i < 10; i++) {
        randomNumber_ += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return randomNumber_
}

module.exports = helpers;