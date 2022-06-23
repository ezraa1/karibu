var pages = {
    'getstarted':`This is the sign up page`,
    'login': `This is the login page`,
    'about': `This is the about page section`,
    'services': `This is the page section of services provided by the web app`
}
function getPageContent(page){
    var contentToReturn;
    switch(page){
        case 'getstarted':
            contentToReturn = pages.getstarted;
            break;
            case 'login':
            contentToReturn = pages.login;
            break;
            case 'about':
            contentToReturn = pages.about;
            break;
            case 'services':
            contentToReturn = pages.services;
            break;
    }
    document.getElementById('content').innerHTML= contentToReturn;
}