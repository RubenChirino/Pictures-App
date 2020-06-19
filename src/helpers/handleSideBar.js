
 
export default function HandleSideBar(){  

    const body = document.getElementById('body-id');
    
    if(body.className.indexOf('body-expanded') !== -1){
        
        const menu = document.querySelector('#sidemenu');

        menu.classList.toggle("menu-expanded");
        menu.classList.toggle("menu-collapsed");

        document.querySelector('body').classList.toggle('body-expanded');
    } 
  
}