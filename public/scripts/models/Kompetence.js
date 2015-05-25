var norbypsyk;
(function (norbypsyk) {
    var Kompetence = (function () {
        function Kompetence(navn, beskrivelse, ikon, animateNow) {
            this.navn = navn;
            this.beskrivelse = beskrivelse;
            this.ikon = ikon;
            this.animateNow = animateNow;
        }
        return Kompetence;
    })();
    norbypsyk.Kompetence = Kompetence;
})(norbypsyk || (norbypsyk = {}));
