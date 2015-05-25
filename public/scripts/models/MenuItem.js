var norbypsyk;
(function (norbypsyk) {
    var MenuItem = (function () {
        function MenuItem(navn, route, selected) {
            this.navn = navn;
            this.route = route;
            this.selected = selected;
        }
        return MenuItem;
    })();
    norbypsyk.MenuItem = MenuItem;
})(norbypsyk || (norbypsyk = {}));
