var count = 1


setInterval(()=>{
    document.getElementById("slide").src = `http://127.0.0.1:5173/images-1/img-${count}.webp`
    

    if(count <3 )
    {
        count= count+1
    }
    else
    {
        count=1
    }
},2000)