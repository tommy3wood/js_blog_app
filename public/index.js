axios.get("http://localhost:3000/api/blogs").then(function(response) {
  var posts = response.data;
  console.log(posts);

  var axiosPostsElement = document.querySelector('#axios-posts');
  console.log(axiosPostsElement);
  var message = "";
  posts.forEach(function(post){
    // message += "<h2>" + post.title + "</h2>";
    // message += "<p>" + post.body + "</p>";

    message += '<div class="row row-cols-1 row-cols-md-2">';
    message += '<div class="col mb-4">';
    message += '<div class="card">';
    message += '<div class="card-body">';
    message += '<h5 class="card-title">'+ post.title +'</h5>';
    message += ' <p class="card-text">'+ post.body +'</p>';
    message += '</div>';
    message += '</div>';
    message += '</div>';
    message += '</div>';

  });
  axiosPostsElement.innerHTML = message;
});


  
    
      
      
        
       
      
    
  
