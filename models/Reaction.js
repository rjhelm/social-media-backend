const { Schema, model, Types } = require('mongoose');

const ReactionSchema = new Schema(
    {
      // set custom id to avoid confusion with parent comment _id
      reactionId: {
        type: Types.ObjectId,
        default:  new Types.ObjectId()
      },
      reactionBody: {
        type: String,
        required: true,
        trim: true,
        maxlength: 280,
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format("MM DD, YYYY [at] hh:mm a"),
      },
    },
    {
      toJSON: {
        getters: true,
      },
    }
  );

  module.exports = Reaction;