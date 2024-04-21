const users = [
    { username: 'mlewis' },
    { username: 'akagen' },
    { username: 'msmith' }
];

function findUserByUsername(arrayOfObjects, string) {
    return arrayOfObjects.find(function (val) {
        return val['username'] === string
    })
}

function removeUser(arrayOfObjects, string) {
    let indexRemove = arrayOfObjects.findIndex(function (val) {
        return val['username'] === string
    })
    let newObject = arrayOfObjects.slice(indexRemove, 1)
    return newObject[0]

}