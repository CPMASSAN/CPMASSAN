  const express = require ('express');
  const server = express ();
  const nunjucks = require ('nunjucks');

  const videos = require ("./data");



  server.use(express.static('public'))
   
  server.set ("view engine","njk")
  nunjucks.configure("views",{
    express:server,
    autoescape:false,
    noCache:true
   
  })


server.get("/", function(req,res){
    const about = {

       avatar_url: "https://avatars.githubusercontent.com/u/117499108?v=4",
       name:"Fernando Lucas",
       role:"Programador Full-Stack",
       description:'Um dev que forma outros dev',
       link:[
        {name:"Github",url:"https://github.com/namukuzedim"},
        {name:"linkedin",url:"https://www.linkedin.com/in/fernando-lucas-de-castro-309352233/"},
        {name:"Instagram",url:"https://www.instagram.com/fernando.massan/"},
       ]
    }
    return res.render("about", {about} );
})
server.get("/videos", function(req,res){
    return res.render("videos",{items: videos});
})
  
server.get("/video",function(req,res){
  const id = req.query.id
  const video = videos.find(function(video){

    if (video.id==id) {
      return true
    }
  
  })
  
  if (!video){
    return res.send ("Video not found")
  }

  return res.render ("video",{item: video})
})


  server.listen(5000, function() {
    (console.log ("server is running"))
  })