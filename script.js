

// function pickerHandler1(){
//     let color1 = document.getElementById('img1')
//     let color2 = document.getElementById('img2')
//     let color3 = document.getElementById('img3')
//     color1.style.opacity = 1;
//     color1.style.zIndex =999;
//     color1.style.transition = 'opacity .9s linear';

//     color2.style.opacity = 0;
//     color2.style.zIndex =-1;
//     color3.style.opacity = 0;
//     color3.style.zIndex = -1;
//     mainColorHandler('#e6f3f7');
//     buttonColorHandler('#25B0E3')
// }
function pickerHandler1(){
    let color1 = document.getElementById('img1')
    let color2 = document.getElementById('img2')
    let color3 = document.getElementById('img3')
    setTimeout(()=>{
    color1.style.opacity = 1;
    color1.style.zIndex =999;
    color1.style.transition = 'opacity .9s linear';

    }, 4000)
    color2.style.opacity = 0;
    color2.style.zIndex =-1;
    color3.style.opacity = 0;
    color3.style.zIndex = -1;
    mainColorHandler('#e6f3f7');
    buttonColorHandler('#25B0E3');
    loaderColorHandler('invert(73%) sepia(31%) saturate(6907%) hue-rotate(160deg) brightness(96%) contrast(84%)')
}

function pickerHandler2(){
    let color1 = document.getElementById('img1')
    let color2 = document.getElementById('img2')
    let color3 = document.getElementById('img3')
    color1.style.opacity = 0
    color1.style.zIndex = -1;

    setTimeout(()=>{
    color2.style.opacity = 1;
    color2.style.zIndex = 999;
    color2.style.transition = 'opacity .9s linear';
    }, 4000)
    color3.style.opacity = 0;
    color3.style.zIndex = -1;
    mainColorHandler('#f7e9e6');
    buttonColorHandler('#D95087')
    loaderColorHandler('invert(54%) sepia(85%) saturate(3474%) hue-rotate(307deg) brightness(91%) contrast(86%)')
    
}

function pickerHandler3(){
    let color1 = document.getElementById('img1')
    let color2 = document.getElementById('img2')
    let color3 = document.getElementById('img3')
    color1.style.opacity = 0
    color1.style.zIndex = -1;

    color2.style.opacity = 0
    color2.style.zIndex = -1;
    setTimeout(()=>{
        color3.style.opacity = 1;
        color3.style.zIndex = 999;
        color3.style.transition = 'opacity .9s linear';
    }, 4000)
    mainColorHandler('#f7f6e6');
    buttonColorHandler('#FED249')
    loaderColorHandler('invert(88%) sepia(93%) saturate(756%) hue-rotate(318deg) brightness(101%) contrast(103%)')
}


function mainColorHandler(color){
    const main = document.getElementById('pick-container');
    // let color1 = document.getElementById('img1')
    // let color2 = document.getElementById('img2')
    // let color3 = document.getElementById('img3')

    main.style.background = color;
}

function buttonColorHandler(color){
        const main = document.getElementById('btn');
        let color1 = document.getElementById('img1');
        let color2 = document.getElementById('img2');
        let color3 = document.getElementById('img3');
        main.style.backgroundColor = color;
}

function loaderColorHandler(color){
    const loader = document.getElementById('loader');

    loader.style.filter = color
}