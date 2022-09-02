const date = new Date(); 
//const today = new Date();

const year = document.getElementById("year");
const month = document.getElementById("month"); 
const day = document.getElementById("day"); 

const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");


/*const showDate = setInterval( 
    function date(){ 
        var today = new Date(); 
        var yr = today.getFullYear(); 
        var mt = today.getMonth()+1; // getMonth()만 하면 한 달 늦게 출력됨 
        var dy = today.getDate();

    year.textContent = yr;
    month.textContent = mt;
    day.textContent = dy;
    }
) */



const clock = setInterval( 
    function time(){ 
        var date_now = new Date(); 
        var hr = date_now.getHours(); 
        var minuate = date_now.getMinutes(); 
        var seconds = date_now.getSeconds(); 

        if(hr<10){
            hr = "0" + hr; 

        } 
        if(min < 10){ 
            min = "0" + min; 
        }
        if(sec<10){ 
            sec = "0"+ sec; 
        }


        hour.textContent = hr; 
        min.textContent = minuate; 
        sec.textContent = seconds; 

    }
)
