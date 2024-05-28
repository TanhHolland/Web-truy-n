var mongoose = require("mongoose");
var URLSlug = require("mongoose-slug-generator");
var mongooseDelete = require("mongoose-delete");

// CommentSchema
const commentSchema = new mongoose.Schema({
    // The text of the comment.
    comment: String,
    // The date and time when the comment was created.
    date_time: { type: Date, default: Date.now },
    // The ID of the user who created the comment.
    user_id: mongoose.Schema.Types.ObjectId,
    user_name: String,
});

// ChapterSchema
var ChapterSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        description: {
            type: String,
            require: true,
        },
        image: {
            type: String,
        },
        content: [
            {
                type: Object,
            },
        ],
        product: {
            type: String,
            require: true,
        },
        slug: {
            type: String,
            slug: "name",
            unique: true,
        },
        comments: [
            commentSchema
        ],
    },
    {
        timestamps: true,
    }
);

mongoose.plugin(URLSlug);
ChapterSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: "all",
});

var Chapter = (module.exports = mongoose.model("Chapter", ChapterSchema));
