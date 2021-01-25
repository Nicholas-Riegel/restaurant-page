function createMenuContent(){

    let homeDiv = document.createElement('div');
    
    homeDiv.setAttribute('class', 'active');
    homeDiv.setAttribute('id', 'menuDiv');
    
    let img = document.createElement('img');
    
    img.setAttribute('src', "https://i.pinimg.com/originals/4a/77/88/4a7788dfb64faa15491a57b75835e71d.jpg");
    
    homeDiv.appendChild(img);
    
    document.querySelector('#content').appendChild(homeDiv);
}

export default createMenuContent;