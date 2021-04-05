// 1
/*const tree = [[5], 1, [3, 4]];
const removeFirstLevel = (coll) => {
    const result = [];
    coll.forEach((elem) => {
        if (coll.length === 0) {
            return [];
        }
        if (Array.isArray(elem)) {
            result.push(elem);
        }
    });
    console.log(result.flat());
};
removeFirstLevel(tree);*/


// BEGIN
/*removeFirstLevel = (tree) => {
    const nodes = tree.filter(Array.isArray);
    console.log(nodes.flat());
};
removeFirstLevel(tree);*/
// END

// 2

isFile(mkfile('config')); // true
isDirectory(mkdir('etc')); // true

const tree = mkdir('nodejs-package', [mkfile('config'), README.md('config'), dist[''], _tests_[mkfile('half.test.js')],
    mkfile('babel.config.js'), mkdir('node_modules', [mkdir('@babel'), mkdir('cli'), mkfile('LICENSE')])
]);

const callbackFn = (node) => {
    const { name } = node;
    const newName = name.toUpperCase();
    return { ...node, name: newName };
};

map(callbackFn, tree);