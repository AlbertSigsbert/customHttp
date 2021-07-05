const http = new easyHttp;
// const post = {
//   title : "Custom Post",
//   body: "Custom Post Body"
// }

const updatedPost = {
  title : "Custom Post1",
  body: "Updated Post"
}
// //Get posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
//      if(err)
//      {
//         console.log(err);
//      }
//      else{
//         console.log(posts);
//      }
// });

//ADD POST
// http.post('https://jsonplaceholder.typicode.com/posts', post, function(err, createdPost) {
//   if(err)
//   {
//      console.log(err);
//   }
//   else{
//      console.log(createdPost);
//   }
// })

//UPDATE POST
// http.put('https://jsonplaceholder.typicode.com/posts/1', updatedPostpost, function(err,updated) {
//   if(err)
//   {
//      console.log(err);
//   }
//   else{
//      console.log(updated);
//   }
// })


//DELETE POST

http.delete('https://jsonplaceholder.typicode.com/posts/101', function(err,msg) {
  if(err)
  {
     console.log(err);
  }
  else{
     console.log(msg);
  }
})
