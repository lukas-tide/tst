module.exports = async ({ github, context, core }) => {
    for (let i in arguments) {
        a = arguments[i]
        console.log(`Argument ${i}`)
        console.debug(a)
        console.log()
        console.log()
    }
}