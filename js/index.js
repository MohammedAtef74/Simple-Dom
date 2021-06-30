  var imgs = Array.from( document.querySelectorAll(".item img"));

  var lightBoxContainer = document.getElementById("lightBoxContainer");

  var lightBoxItem = document.getElementById("lightBoxItem");

  var nextBtn = document.getElementById("next");

  var backBtn = document.getElementById("back");

  var closeBtn = document.getElementById("close");

  var currentIndex = 0 ;

  for( var i=0 ; i < imgs.length ; i++)
  {
      imgs[i].addEventListener("click", function(e){

        currentIndex = imgs.indexOf(e.target);
        console.log(currentIndex)

        var imgSrc = e.target.getAttribute("src");
 
        lightBoxItem.style.backgroundImage = "url("+imgSrc+")";

        lightBoxContainer.style.display="flex";

      } )


  };

  function nextSlide()
  {
      currentIndex++;

      if(currentIndex == imgs.length)
      {
         currentIndex = 0 ;
      }

      var imgSrc = imgs[currentIndex].getAttribute("src");

      lightBoxItem.style.backgroundImage = "url("+imgSrc+")";
  }

      nextBtn.addEventListener("click",nextSlide);

   
  function backSlide()
  {
     currentIndex --;

     if(currentIndex < 0)
     {
       currentIndex = imgs.length -1;
     }

     var imgSrc = imgs[currentIndex].getAttribute("src");

     lightBoxItem.style.backgroundImage = "url("+imgSrc+")";
  }

  backBtn.addEventListener("click",backSlide);


  function closeSlide()
  {
    lightBoxContainer.style.display ="none";

  } 
  closeBtn.addEventListener("click",closeSlide);



/* function closeContiner()
  {
      lightBoxContainer.style.display = "none";
  }

  lightBoxContainer.addEventListener("click",closeContiner);

*/

  document.addEventListener("keydown",function(e)
  {
      if(e.code == "ArrowRight")
      {
        nextSlide();
      }
      else if(e.code == "ArrowLeft")
      {
        backSlide();
      }
      else if (e.code == "Escape")
      {
        closeSlide();
      }
  });