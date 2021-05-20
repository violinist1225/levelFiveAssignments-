const mongoose = require('mongoose')
const { __esModule } = require('uuid/dist/v1')
const Schema = mongoose.Schema

//bounty blueprint
//Mongoose documentation on Schemas to show various properties can add to be reuired in object.

const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    living : Boolean,
    bountyAmount: Number,
    type:String,
    // _id : uuidv4(),
})

    module.exports= mongoose.model("Bounty", bountySchema)