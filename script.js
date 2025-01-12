function loadingAnimation(){
    var tl = gsap.timeline()

    tl.from(".line h1", {
        y: 150,
        stagger: 0.3
    })

    tl.from("#l1-p1", {
        opacity: 0,
        onStart: function(){
            var h5timer = document.querySelector("#l1-p1 h5")
            var grow = 0
            setInterval(function(){
                if (grow<=100){
                    h5timer.innerHTML = grow++
                }
                else{
                    grow = 100
                }
            }, 20)
        }
    })

    tl.to(".line h2", {
        opacity: 1,
        animationName: "anime"
    })

    tl.to("#loader", {
        display: "none",
        delay: 3
    })

    tl.from("#page1", {
        y: 1200,
        opacity:0,
        duration: 0.6
    })
    
}
loadingAnimation()
