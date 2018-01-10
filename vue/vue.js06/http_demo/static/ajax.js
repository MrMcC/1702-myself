/**
 * Created by miaoce on 17/7/17.
 */
//写法1在index.html页面直接引入ajax
//写法2 利用exports 传个对象

exports.ajax = function (url,succ) {
    var ajax = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Msxml2.XMLHTTP')
    ajax.open('GET',url,true)
    ajax.onload = function (data) {
        succ(data)
    }
    ajax.send(null)
}
// export default {
//     ajax: function (url,succ) {
//         var ajax = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Msxml2.XMLHTTP')
//         ajax.open('GET',url,true)
//         ajax.onload = function (data) {
//             succ(data)
//         }
//         ajax.send(null)
//     }
// }

