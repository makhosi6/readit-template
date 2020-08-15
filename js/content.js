(()=>{
 let arr = [12,22,31,5,15,6,7,17,8,19];
 let el = document.querySelector('div.body-wrapper');
    console.log(window.location.pathname);
     arr.map((o)=>{
            el.innerHTML += `<div class="col-md-4 d-flex ftco-animate">
            <div class="blog-entry justify-content-end">
                <a href="blog-single.html" class="block-20" style="background-image: url('images/image_9.jpg');">
                </a>
                <div class="text p-4 float-right d-block">
                    <div class="topper d-flex align-items-center">
                        <div class="one py-2 pl-3 pr-1 align-self-stretch">
                            <span class="day">${o}</span>
                        </div>
                        <div class="two pl-0 pr-3 py-2 align-self-stretch">
                            <span class="yr">2019</span>
                            <span class="mos">October</span>
                        </div>
                    </div>
                    <h3 class="heading mb-3"><a href="#">All you want to know about industrial laws</a></h3>
                    <p>A small river named Duden flow by their place and supplies it with the necessary regelialia.</p>
                    <p><a href="#" class="btn-custom"><span class="ion-ios-arrow-round-forward mr-3"></span>Read more</a></p>
                </div>
            </div>
        </div> `
     })
 })();


//  function footer(){

//  }
//  function mainClassfied(){

//  }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 