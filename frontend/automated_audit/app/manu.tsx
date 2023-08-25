'use client'

let test : any = () =>{
    alert("Hello");
}

export default function Menu() {
    return (
        <div onClick={test} className="absolute w-[2.5em] h-[2.5em] bg-white rounded-full top-5 left-5 shadow-menu"></div>
    );
}