import createHomeContent from './HomeContent.js';
import createMenuContent from './MenuContent.js';
import createAboutContent from './AboutContent.js';

const setTabs = (() => {

    //setting the ul element under body and above #content

    const ul = document.createElement('ul');
    const body = document.querySelector('body');
    body.insertBefore(ul, body.firstChild);

    //set the li elements under the ul element

    for (let i=0; i<3; i++){
        let li = document.createElement('li');
        if (i===0){
            li.setAttribute('id', 'homeTab');
            li.setAttribute('class', 'active');//for default home content to load createHomeContent()
            li.textContent = 'Home';
        }
        if (i===1){
            li.setAttribute('id', 'menuTab');
            li.textContent = 'Menu';
        }
        if (i===2){
            li.setAttribute('id', 'aboutTab');
            li.textContent = 'About';
        }
        document.querySelector('ul').appendChild(li);
    }

    //adding eventListener to each tab

    const tabs = document.querySelectorAll('li')
    tabs.forEach(x=>{
        x.addEventListener('click', ()=>{
            
            tabs.forEach(x=>x.classList.remove('active'));

            const contentDiv = document.querySelector('#content');
            
            if (contentDiv.childNodes[0]){
                contentDiv.removeChild(contentDiv.childNodes[0])
            }

            x.classList.add('active');

            if (document.querySelector('#homeTab').classList.contains('active')){
                createHomeContent();
            }
            else if (document.querySelector('#menuTab').classList.contains('active')){
                createMenuContent();
            }
            else if (document.querySelector('#aboutTab').classList.contains('active')){
                createAboutContent();
            };
        })
    });
    if (document.querySelector('#homeTab').classList.contains('active')){
        createHomeContent();
    }
})();

