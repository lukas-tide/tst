module.exports = async ({ github, context, core }) => {
    for (let i in arguments) {
        a = arguments[i]
        console.debug(a, i)
    }
}