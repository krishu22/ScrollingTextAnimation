function marqueAnimation(){
        window.addEventListener("wheel",function(dets){
                if (dets.deltaY > 0){
                        gsap.to(".marque",{
                                transform: "translateX(-200%)",
                                repeat:-1,
                                duration:4,
                                ease:"none"
                        })
                        gsap.to("img",{
                                transform:"rotate(0deg)", // from originally defined position
                                duration:1,
                        })
                }
                else{
                        gsap.to(".marque",{
                                transform: "translateX(0%)",
                                repeat:-1,
                                duration:4,
                                ease:"none"
                        })
                        gsap.to("img",{
                                transform:"rotate(180deg)", // from originally defined position
                                duration:1,
                        })
                }
        })
}

marqueAnimation();
