class Bubble{
        constructor(){

            this.bubbles = document.querySelectorAll(".wrapper div");
            console.log(this.bubbles);
            this.wrapper = document.querySelector(".wrapper")
            this.startButton = document.querySelector(".button h1");
            this.stopButton = document.querySelector(".button h2");
            this.returnBubbles = document.querySelector(".button h3");
            this.imgs = document.querySelectorAll(".bubble img");
            this.stop;
            
            this.startButton.addEventListener("click", ()=>{
                this.move();
            })
            this.stopButton.addEventListener("click",()=>{
                clearTimeout(this.stop);
            })
            this.returnBubbles.addEventListener("click", ()=>{
                for(const img of this.imgs){
                    img.classList.remove("gone");
                }
            })

            this.wrapper.addEventListener("click", (e)=>{
                console.log(e.target);
                if(e.target !== this.startButton && e.target !== this.stopButton && e.target !== this.returnBubbles && e.target !== this.wrapper){
                    e.target.classList.add("gone");
                }
            })

        }

         getRandomIntInclusive(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1) + min);
        }
            
            move() {
                
                for(let i = 0; i<10; i++){
                    
                    let stepTop = this.getRandomIntInclusive(-100, 1000);
                    let stepRight = this.getRandomIntInclusive(-200, 1000);
                    console.log(stepTop);
                    console.log(stepRight);
                    this.bubbles[i].style.top = stepTop + "px";
                    this.bubbles[i].style.right = stepRight + "px";

                }
                this.stop = setTimeout(this.move.bind(this), 3500);
        }
        
    }
    let bubbleBubble = new Bubble;