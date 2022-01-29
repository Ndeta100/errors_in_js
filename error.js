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

// Async Error handling
try {
    setTimeout(()=>{
        console.log('ooopsie')
    },1000)
} catch (error) {
    console.log(error)
}

Promise.resolve('asyncfail').then(response=>{
    throw new Error('#1 failed') // console.log(response) won't run
    console.log(response)
}).then(response=>{
    console.log(response)
}).catch(err=>{
    console.log(err)
})
