const mongoose = require('mongoose');

function getTutorialModel() {
    const schemaTutorial = mongoose.Schema({
        title: String,
        description: String,
        published: Boolean
    },
        { timestamps: true })

    schemaTutorial.method("toJson", function () {
        const { _id, __v, ...object } = this.toObject();
        object.id = _id;
        return object;
    })

    const tutorial = mongoose.model('Tutorial', schemaTutorial)
    return tutorial;
}

module.exports = getTutorialModel;
