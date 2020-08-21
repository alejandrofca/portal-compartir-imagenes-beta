const mongoose = require('mongoose')
const { Schema, model } = mongoose
const path = require('path')
const mongooseLeanVirtuals = require('mongoose-lean-virtuals')

const ImageSchema = new Schema({
    title: { type: String },
    description: { type: String },
    filename: { type: String },
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    timestamp: { type: Date, default: Date.now },
})

ImageSchema.virtual('uniqueId')
    .get(function() {
        return this.filename.replace(path.extname(this.filename), '')
    })
ImageSchema.plugin(mongooseLeanVirtuals);

module.exports = model('Image', ImageSchema);