function getproperties() {
    return fetch('one.json')
        .then(function (res) { return res.json(); })
        .then(function (res) {
        return res;
    });
}
getproperties()
    .then(function (api) {
    console.log(api.map(function (p) { return (p.amber + "\n" + p.black + "\n" + p.blue + "\n" + p.brown + "\n" + p.cyan + "\n" + p.deeporange + "\n" + p.deeppurple + "\n" + p.green + "\n" + p.grey + "\n" + p.indigo + "\n" + p.lightblue + "\n" + p.lightgreen + "\n" + p.lime + "\n" + p.orange + "\n" + p.pink + "\n" + p.purple + "\n" + p.red + "\n" + p.teal + "\n" + p.white + "\n" + p.yellow); }).toString());
});
function getFAPI() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(function (responce) { return responce.json(); })
        .then(function (json) { return console.log(json); });
}
getFAPI();
