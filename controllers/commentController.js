var Comment = require("../models/comment");
var Chapter = require("../models/chapter");
var admin = require("../config/admin");
var isUser = admin.isUser;
var session = require("express-session");
var comment = {
    postComments: async (req, res) => {
        const { product, name } = req.params;
        const findChapter = await Chapter.findOne({
            product: product,
            name: name,
        });

        const newComment = {
            comment: req.body.message,
            date_time: new Date(),
            user_name: req.session.username,
        };

        findChapter.comments.push(newComment);
        await findChapter.save();
        // res.status(201).json({
        //     message: "Đã thêm bình luận thành công",
        //     redirectUrl: `/comment/${product}/chapter/${name}`,
        // });
        res.redirect(`/chapters/${product}/chapter/${name}`);
    },
};
module.exports = comment;
