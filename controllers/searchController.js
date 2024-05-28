var Product = require('../models/product');


var product = {
    GetSearch: async (req, res) =>{
        var search = req.query.search.toUpperCase();
        // var searchs = await Product.find(
        //     {
        //         "$or":[
        //             {"name":{$regex:search}},
        //         ]
        //     }
        // );
        var searchs = await Product.find({});
        searchs = searchs.filter((item)=>{
            return item.name.toUpperCase().includes(search);
        })
        res.render('search',{
            searchs: searchs,
            title: 'Kết quả'
        })
    },
    
}
module.exports = product;