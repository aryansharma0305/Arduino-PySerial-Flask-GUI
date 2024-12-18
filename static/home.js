
let led1indicator=document.getElementById('led1indicator');
let led2indicator=document.getElementById('led2indicator');
let led3indicator=document.getElementById('led3indicator');
let led4indicator=document.getElementById('led4indicator');
let spinner=document.getElementById('spinner')
let content=document.getElementById('content')
let statusobj={'led1':0,'led2':0,'led3':0,'led4':0};
let bt1=document.getElementById('btn1');
let bt2=document.getElementById('btn2');
let bt3=document.getElementById('btn3');
let bt4=document.getElementById('btn4');


function changestatus(){

    if (statusobj['led1']==1)
        {
            led1indicator.classList.remove('bg-danger');
            led1indicator.classList.add("bg-success");
            bt1.innerHTML="Stop";
        }    
         if (statusobj['led2']==1)
        {
            led2indicator.classList.remove('bg-danger');
            led2indicator.classList.add("bg-success");
            bt2.innerHTML="Stop";
        }
        if (statusobj['led3']==1)
            {
                led3indicator.classList.remove('bg-danger');
                led3indicator.classList.add("bg-success");
                bt3.innerHTML="Stop";
            }  
         if (statusobj['led4']==1)
        {
            led4indicator.classList.remove('bg-danger');
            led4indicator.classList.add("bg-success");
            bt4.innerHTML="Stop";
        }    
        
        

        if (statusobj['led1']==0)
            {
                led1indicator.classList.remove('bg-success');
                led1indicator.classList.add("bg-danger");
                bt1.innerHTML="Start";
            } 
        if (statusobj['led2']==0)
            {
                led2indicator.classList.remove('bg-success');
                led2indicator.classList.add("bg-danger");
                bt2.innerHTML="Start";
            }     
        if (statusobj['led3']==0)
            {
                led3indicator.classList.remove('bg-success');
                led3indicator.classList.add("bg-danger");
                bt3.innerHTML="Start";
            } 
        if (statusobj['led4']==0)
            {
                led4indicator.classList.remove('bg-success');
                led4indicator.classList.add("bg-danger");
                bt4.innerHTML="Start";
            } 
    
}

async function onload(){
    let promise =await fetch('/api/arduino/INFO');
    if (promise.status==200)
    {
        spinner.style.display='none';
        content.style.display='block';
        let pro= await promise.json();
        statusobj['led1']=pro['led1'];
        statusobj['led2']=pro['led2'];
        statusobj['led3']=pro['led3'];
        statusobj['led4']=pro['led4'];
        changestatus();
    }   

}


async function btn1()
{
    if (statusobj['led1']==0){
        let promise =await fetch('/api/arduino/LED1ON');
        if (promise.status==200){
            let pro= await promise.json();
        statusobj['led1']=pro['led1'];
        statusobj['led2']=pro['led2'];
        statusobj['led3']=pro['led3'];
        statusobj['led4']=pro['led4'];
        changestatus();

        }
    }
    else if (statusobj['led1']==1){
        let promise =await fetch('/api/arduino/LED1OFF');
        if (promise.status==200){
            let pro= await promise.json();
        statusobj['led1']=pro['led1'];
        statusobj['led2']=pro['led2'];
        statusobj['led3']=pro['led3'];
        statusobj['led4']=pro['led4'];
        changestatus();

        }
    }

}


async function btn2()
{
    if (statusobj['led2']==0){
        let promise =await fetch('/api/arduino/LED2ON');
        if (promise.status==200){
            let pro= await promise.json();
        statusobj['led1']=pro['led1'];
        statusobj['led2']=pro['led2'];
        statusobj['led3']=pro['led3'];
        statusobj['led4']=pro['led4'];
        changestatus();

        }
    }
    else if (statusobj['led2']==1){
        let promise =await fetch('/api/arduino/LED2OFF');
        if (promise.status==200){
            let pro= await promise.json();
        statusobj['led1']=pro['led1'];
        statusobj['led2']=pro['led2'];
        statusobj['led3']=pro['led3'];
        statusobj['led4']=pro['led4'];
        changestatus();

        }
    }

}


async function btn3()
{
    if (statusobj['led3']==0){
        let promise =await fetch('/api/arduino/LED3ON');
        if (promise.status==200){
            let pro= await promise.json();
        statusobj['led1']=pro['led1'];
        statusobj['led2']=pro['led2'];
        statusobj['led3']=pro['led3'];
        statusobj['led4']=pro['led4'];
        changestatus();

        }
    }
    else if(statusobj['led3']==1){
        let promise =await fetch('/api/arduino/LED3OFF');
        if (promise.status==200){
            let pro= await promise.json();
        statusobj['led1']=pro['led1'];
        statusobj['led2']=pro['led2'];
        statusobj['led3']=pro['led3'];
        statusobj['led4']=pro['led4'];
        changestatus();

        }
    }

}


async function btn4()
{
    if (statusobj['led4']==0){
        let promise =await fetch('/api/arduino/LED4ON');
        if (promise.status==200){
            let pro= await promise.json();
        statusobj['led1']=pro['led1'];
        statusobj['led2']=pro['led2'];
        statusobj['led3']=pro['led3'];
        statusobj['led4']=pro['led4'];
        changestatus();

        }
    }
    else if(statusobj['led4']==1){
        let promise =await fetch('/api/arduino/LED4OFF');
        if (promise.status==200){
            let pro= await promise.json();
        statusobj['led1']=pro['led1'];
        statusobj['led2']=pro['led2'];
        statusobj['led3']=pro['led3'];
        statusobj['led4']=pro['led4'];
        changestatus();

        }
    }

}




















