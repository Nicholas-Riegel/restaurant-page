function createAboutContent(){
    
    const homeDiv = document.createElement('div');
    homeDiv.setAttribute('class', 'active');
    homeDiv.setAttribute('id', 'aboutDiv');
    
    const h1 = document.createElement('h1');
    h1.textContent = "Reservations";
        
    const p = document.createElement('p');
    p.textContent = "(555) 555-5555";
    
    homeDiv.appendChild(h1);
    homeDiv.appendChild(p);

    document.querySelector('#content').appendChild(homeDiv);
}

export default createAboutContent;