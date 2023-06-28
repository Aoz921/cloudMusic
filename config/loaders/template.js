module.exports = function (a){
    console.log(a);
    return `export default '${a.replace(/\n/g,'')}'`;
}