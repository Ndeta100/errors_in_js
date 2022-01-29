function a(){
    const b= new Error('oopsie')
    return b
}
a()
a().message
a().name
a().stack
// throw Error('something failed')
function fail(){
    try {
        console.log('this works')
    } catch (error) {
        console.log('we have made an oopsie', error)
    }
}

fail()