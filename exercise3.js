{
    // 1. What is a potential pitfall with using typeof bar === "object" to determine if bar is an object? How can this pitfall be avoided?
  
    // console.log(typeof bar === 'object')
    // console.log((bar !== null) && (typeof bar === 'object'))
    var bar = [1, 2, 3];
    // var bar = [1, 2, 3]
  
    // const  bar = () =>{
    //     return null
    // }
  
    // console.log(typeof bar === 'object') // return false
    // console.log(typeof bar === 'function') // return true
    // console.log(typeof null) // object
  
    // console.log((bar !== null) && (typeof bar === 'object') || (typeof bar === 'function'))
    // console.log(
    //   bar !== null &&
    //     typeof bar === "object" &&
    //     toString.call(bar) === "[object Array]"
    // );
  
    // console.log((bar !== null) && (bar.constructor === 'Object'))
    // console.log(Array.isArray(bar))
  }
  
  {
    var str = {
      name: "rudra",
      profession: "programmer",
    };
  
    // console.log(Object.getOwnPropertyNames(str));
    // var str = "hi";
    // console.log(Object.getOwnPropertyNames(str));
    // console.log(Object.values(str));
  
    // let strPrimitive = "hello";
    // console.log(strPrimitive.toUpperCase());
  }
  
  {
    var str = {
      name: "rudra",
      profession: "programmer",
    };
  
    // console.log(toString.call(str));
  }