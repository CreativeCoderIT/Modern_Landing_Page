Shery.imageEffect("#back",{style:5,config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,
    "range":[-9999999,9999999]},"aspect":{"value":1.7684692792276855},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},
    "shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},
    "currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,
        "range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},
        "masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},
        "noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.99,"range":[0,10]},"metaball":{"value":0.12,
            "range":[0,2]},"discard_threshold":{"value":0.45,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},
            "noise_height":{"value":0.26,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},gooey:true});

            const back = document.querySelector("#back");
            const images = back.querySelectorAll("img");
            let imgIndex = 0;
            
            // Show only the first image initially
            images.forEach((img, i) => {
                img.style.display = i === 0 ? "block" : "none";
            });
            
            back.addEventListener("click", () => {
                // Hide current image
                images[imgIndex].style.display = "none";
            
                // Move to next index (loop back if needed)
                imgIndex = (imgIndex + 1) % images.length;
            
                // Show next image
                images[imgIndex].style.display = "block";
            });
            

























var elems = document.querySelectorAll(".elem");

elems.forEach(function(elem) {
    var h1s = elem.querySelectorAll("h1"); // scoped to this elem
    var index = 0;
    var animating = false;

    document.querySelector("#main").addEventListener("click", function () {
        if (!animating) {
            animating = true;

            gsap.to(h1s[index], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1,
                onComplete: function () {
                    gsap.set(h1s[index], { top: "100%" });
                    animating = false;
                }
            });

            index = (index === h1s.length - 1) ? 0 : index + 1;

            gsap.to(h1s[index], {
                top: "0%",
                ease: Expo.easeInOut,
                duration: 1
            });
        }
    });
});

