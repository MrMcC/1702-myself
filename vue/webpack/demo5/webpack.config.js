/**
 * Created by miaoce on 17/7/19.
 */
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
    entry: {
        bundle1 : './module/bob1',
        bundle2 : './module/bob2'
    },
    output: {
        filename: './js/[name].js'
    },
    plugins:[
        new CommonsChunkPlugin('commons.js')
    ]
}