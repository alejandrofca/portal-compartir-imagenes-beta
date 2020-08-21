const { Schema, model } = require('mongoose')
const mongooseLeanVirtuals = require('mongoose-lean-virtuals')

const CommentSchema = new Schema({
    image_id: { type: String },
    name: { type: String },
    email: { type: String },
    gravatar: { type: String },
    comment: { type: String },
    timestamp: { type: Date, default: Date.now }
}, { strict: false }, { toJSON: { virtuals: true } }, { toObject: { virtuals: true } })

CommentSchema.virtual('image')
    .set(function(image) {
        this._image = image;
    })
    .get(function() {
        return this._image;
    })
CommentSchema.plugin(mongooseLeanVirtuals);

module.exports = model('Comment', CommentSchema);