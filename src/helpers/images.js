const { Image } = require('../models')

module.exports = {

    async popular() {
        const images = await Image.find()
            .limit(9)
            .lean({ virtuals: true })
            .sort({ likes: -1 })
        return images
    }

}