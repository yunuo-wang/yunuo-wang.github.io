function registerMobileMenuClick () {
    const toggleBtn = $('#nav_mobile_toggle_button');
    const navItems = $('#navbar-content');

    if (toggleBtn.hasClass('collapsed')) { // to show menu items
        navItems.addClass('show');
        toggleBtn.removeClass('collapsed');
    } else {
        navItems.removeClass('show');
        toggleBtn.addClass('collapsed');
    }

}

$(document).ready(function() {

    $('#nav_mobile_toggle_button').click(registerMobileMenuClick);

});