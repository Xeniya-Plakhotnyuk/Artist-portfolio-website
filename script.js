gsap.to (".text",{
    y:-15,
    repeat: 100,
    duration: 2, 
    ease: "bounce.out",
       
    
    
    } )

    gsap.to (".logo", {delay:.3, repeat:-1, duration:2, rotation:360, repeatDelay: 1})

    gsap.from("li",  { duration: 1, x: '-100vw', ease: 'power2.in', opacity: 0 })
 
    gsap.from(".dot",  { duration: 1, x: '-100vw', ease: 'power2.in', opacity: 0 })


    gsap.to (".check", {delay:.3, repeat:-1, duration:2, repeatDelay: 1, x:350,  ease:"steps(5)" })

        