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
        throw new Error('Oopsie')
    } catch (error) {
        console.log('we have made an oopsie', error.stack)
    }finally{
        console.log('Still good')
        return 'returning fail'
    }

    console.log('!!!!!!!!!!!!!!!!!!)')  //This part will never get run
}
fail()

try {
    something() //this function does not exist
} catch (error) {
    throw new Error(error)
} 
