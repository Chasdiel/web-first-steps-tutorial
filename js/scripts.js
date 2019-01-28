function changeTab(tabNumber) {
    hideTab('tab1');
    hideTab('tab2');
    hideTab('tab3');

    var tabClassName = 'tab' + tabNumber;

    var element = document.getElementsByClassName(tabClassName);

    element[0].style.display = 'block';
}

function hideTab(tabClassName) {
    var element = document.getElementsByClassName(tabClassName);
    element[0].style.display = 'none';
}

// hide / unhide

var hideUnhideBtn = document.getElementById('hideBtn');
var isVisible = true;
var contentPar = document.querySelector('.tab2 p');
var temp = contentPar.textContent;

hideUnhideBtn.addEventListener('click', function(){
    if (isVisible){
        contentPar.textContent = '';
        isVisible = false;
    } else {
        contentPar.textContent = temp;
        isVisible = true;
    }
});