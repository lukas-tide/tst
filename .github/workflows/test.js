module.exports = async (input) => {
    for (let i in input) {
        a = input[i]
        console.log(`Argument ${i}`)
        console.debug(a)
        console.log()
        console.log()
    }
}