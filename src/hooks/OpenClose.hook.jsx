const OpenClose = (elementClass, action, animation) =>{
    const element = document.querySelector(elementClass);
    console.log(element);
    if(action === "open"){
        if(animation === "DownUp"){
            element.classList.remove("top-full");
        }else if(animation === "UpDown"){

        }else if(animation === "RightLeft"){

        }else if(animation === "LeftRight"){
            
        }
    }else{
        element.classList.add("top-full");
    }
}
export default OpenClose;