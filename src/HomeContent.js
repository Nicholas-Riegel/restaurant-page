function createHomeContent(){
    
    let homeDiv = document.createElement('div');
    
    homeDiv.setAttribute('class', 'active');
    homeDiv.setAttribute('id', 'homeDiv');
    
    let h1 = document.createElement('h1');
    
    h1.textContent = "The World's Best Restaurant";
    
    let img = document.createElement('img');
    
    img.setAttribute('src', "https://en.nicetourisme.com/resources/ref/entries/51873/gallery/restaurant-la-pescheria_152221.jpg");
    
    let p = document.createElement('p');
    
    p.textContent = "Congratulations! You've just found the best restaurant in the world.";
    
    homeDiv.appendChild(h1);
    homeDiv.appendChild(img);
    homeDiv.appendChild(p);

    document.querySelector('#content').appendChild(homeDiv);
}

export default createHomeContent;