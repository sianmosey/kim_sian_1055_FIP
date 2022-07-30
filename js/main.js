(function() {
    console.log("hook up");
    
    var next = document.querySelector('.heroNext'),
        back = document.querySelector('.heroBack'),
        image = document.querySelector('#imgTwo'),
        overlayCon = document.querySelectorAll('.homeOverlayCon'),
        overlays = document.querySelectorAll('.homeOverlay'),
        actImg = document.querySelector(".bui img"),
        play = document.querySelector(".videoBut"),
        video = document.querySelector("video");
    
    const lightbox = document.querySelector(".lightbox"),
          closeLB = document.querySelector(".lightbox-close");
    
    var counter = 1;
    
    let imgHeight = actImg.height;
    var imgPer = imgHeight / 158 * 100,
        padPer = 50 / 158 * 100;
    
    function swapImg() {
        if (counter > 3) {
            counter = 1;
        }
        if (counter < 1) {
            counter = 3;
        }
        image.src = `images/hero${counter}.jpg`;
    }
    
    function overlayHome(nameSrc) {
        overlays.forEach(overlay => {
            if (nameSrc === overlay.dataset.homeoverlay) {
                overlay.style.opacity = "1";
                //overlay.style.bottom = "0px";
                overlay.style.height = imgPer - padPer + "%";
            }
        });
    }
    
    function overlayHomeDone(nameSrc) {
        overlays.forEach(overlay => {
            if (nameSrc === overlay.dataset.homeoverlay) {
                overlay.style.opacity = "0";
                //overlay.style.bottom = "-135px";
                //overlay.style.height = "0px";
            }
        });
    }
    
    function showlightbox() {
        console.log("show it");
        lightbox.classList.add("show-lightbox");
        video.currentTime = 0;
        video.volume = 0.1;
        video.play();
    }
    
    function hidelightbox() {
        lightbox.classList.remove("show-lightbox");
        video.pause();
        
    }
    
    next.addEventListener("click", function(e) {
        counter += 1;
        swapImg();
        
    });
    back.addEventListener("click", function(e) {
        counter -= 1;
        swapImg();
    });
    
    overlayCon.forEach(con => {
        con.addEventListener("mouseover", function(e) {
            let nameSrc = this.className.split(" ")[1];
            overlayHome(nameSrc);
            con.addEventListener("mouseleave", function(e) {
                overlayHomeDone(nameSrc);
            });
        });
    });
    
    play.addEventListener("click", showlightbox);
    closeLB.addEventListener("click", hidelightbox);
    video.addEventListener("ended", hidelightbox);
    
    //overlayCon.addEventListener("mouseover", function(e) {
        //overlayHome();
        //overlayCon.addEventListener("mouseleave", function(e) {
            //overlay.style.bottom = "-110px";
        //});
    //});
    
    
})();
