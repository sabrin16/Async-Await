

//const test = getData()
//console.log(test)


//fetch('https://jsonplaceholder.typicode.com/posts_limit=4')
//  .then(res => res.json())
//  .then(data => {
//    console.log(data)
//  })

  const getData = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts_limit=4')
    console.log(res)
   
    const data = await res.json()
    console.log(data)


  }

  console.log()

