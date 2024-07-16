module.exports = async ({ github, context, core }) => {
    for (let i in arguments) {
        a = arguments[i]
        console.log(`Argument ${i}`)
        console.debug(i)
        console.log()
        console.log()
    }
}