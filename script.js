profileVideo = document.getElementById("profileVideo")
profileVideo.addEventListener("mouseenter", () => {profileVideo.pause(); profileVideo.removeAttribute('autoplay'); console.log("Pause Attempt")})
profileVideo.addEventListener("mouseleave", () => {profileVideo.play()})