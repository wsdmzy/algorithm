// 链式调用
function HardMan(str1){

  function innerLearn() {
    this.learn = function(str2) {
      console.log(`lenan ${str2}`)
    } 
  }

  const helper = function() {
    console.log('++')
    return new innerLearn()
  }

  function innerHardMan(str1) {
    console.log("I am " + str1)
    this.rest =  function (time) {
    (() => {
      setTimeout(function() {
        console.log(`Start learning after ${time} seconds`)
        // resolve()
      },time * 1000)
      console.log('+++')
     })()
     
    }
    
    this.restFirst = function() {

    }
    
  }
  
  
  return new innerHardMan(str1)
}



// console.log(HardMan("jack"))
// HardMan("jack").rest(1)
// console.log()
// console.log(HardMan("jack").rest(1))
HardMan("jack").rest(1)