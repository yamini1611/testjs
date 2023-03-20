interface api {
    pink: string,
    red: string,
    purple: string,
    deeppurple: string,
    indigo: string,
    blue: string,
    lightblue: string,
    cyan: string,
    teal: string,
    green: string,
    lightgreen: string,
    lime: string,
    yellow: string,
    amber: string,
    orange: string,
    deeporange: string,
    brown: string,
    grey: string,
    black: string,
    white: string
}

function getproperties(): Promise<api[]> {
    return fetch('one.json')
        .then(res => res.json())
        .then(res => {
            return res as api[]
        })


}
getproperties()
    .then(api => {
        console.log(api.map(p => (p.amber + "\n" + p.black + "\n" + p.blue + "\n" + p.brown + "\n" + p.cyan + "\n" + p.deeporange + "\n" + p.deeppurple + "\n" + p.green + "\n" + p.grey + "\n" + p.indigo + "\n" + p.lightblue + "\n" + p.lightgreen + "\n" + p.lime + "\n" + p.orange + "\n" + p.pink + "\n" + p.purple + "\n" + p.red + "\n" + p.teal + "\n" + p.white + "\n" + p.yellow)).toString());
    });

function getFAPI() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(responce => responce.json())
        .then(json => console.log(json));
}
getFAPI();