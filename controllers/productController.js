var Chapter = require("../models/chapter");
var Product = require("../models/product");

var product = {
    GetLinkProductDetail: function (req, res) {
        Product.findOne({ name: req.params.product }, function (err, product) {
            Chapter.find(
                { product: req.params.product },
                function (err, chapters) {
                    // Chuyển đổi trường name sang dạng số
                    chapters.forEach(function (chapter) {
                        chapter.nameAsNumber = parseInt(chapter.name); // Chuyển đổi tên chương sang số
                    });

                    // Sắp xếp các chương theo trường nameAsNumber
                    chapters.sort(function (a, b) {
                        return a.nameAsNumber - b.nameAsNumber;
                    });

                    res.render("product_detail", {
                        title: product.name,
                        product: product,
                        chapters: chapters,
                        quantity: chapters.length,
                    });
                }
            );
        });
    },
};
module.exports = product;
