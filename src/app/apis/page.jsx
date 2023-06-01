
'use client'
async function getPost(){
   // const rest=await fetch("https://my-json-server.typicode.com/typicode/demo/posts",{next:{tags:["sections"],revalidate:3600},})
    const rest1=await fetch("http://202.88.244.195/ktapi/app/preethi.php")

    const re= rest1.json() 
    console.log(re)
    //return re;
}
export default async function page() {
    //const rest=await fetch("https://my-json-server.typicode.com/typicode/demo/posts")

    //const re=await rest.json() 
    //console.log(re)
    const post1=await getPost()
    
//   return (
//     post1.map(po=>(po.title))
//   )
}




