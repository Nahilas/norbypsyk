var norbypsyk;
(function (norbypsyk) {
    var Kompetence = (function () {
        function Kompetence(navn, beskrivelse, ikon, animateNow, langBeskrivelse) {
            this.navn = navn;
            this.beskrivelse = beskrivelse;
            this.ikon = ikon;
            this.animateNow = animateNow;
            this.langBeskrivelse = langBeskrivelse;
        }
        return Kompetence;
    })();
    norbypsyk.Kompetence = Kompetence;
})(norbypsyk || (norbypsyk = {}));
