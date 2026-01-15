var selectedIndex = 0;   
var menuItems = document.getElementsByClassName("menu-item");
var menuItemCount = menuItems.length;
var focused = menuItems[0];
document.getElementById(menuItems[selectedIndex].id).focus();
function onKeyPress(e) {
    if(event.key === 'ArrowDown') {
        if(selectedIndex >= menuItemCount - 1) {
            selectedIndex = 0;
        }
        else {
            selectedIndex++;
        }
        focused = document.getElementById(menuItems[selectedIndex].id);
        focused.focus();
    }
    if(event.key === 'ArrowUp') {
        if(selectedIndex <= 0) {
            selectedIndex = menuItemCount - 1;
        }
        else {
            selectedIndex--;
        }
        focused = document.getElementById(menuItems[selectedIndex].id);
        focused.focus();
    }
    if(event.key === 'Enter' && focused != null)
    {
        focused.click();
    }
}
function onNewGameSelected() {
    window.cefQuery({
        request: 'new-game',
        onSuccess: function(response) {},
        onFailure: function(error_code, error_message) {}
    });
}

function onQuitGameSelected() {
    window.cefQuery({
        request: 'quit-game',
        onSuccess: function(response) {},
        onFailure: function(error_code, error_message) {}
    });
}
document.addEventListener('keydown', onKeyPress);