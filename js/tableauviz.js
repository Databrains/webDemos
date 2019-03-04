function initViz() {
    var containerDiv = document.getElementById("vizContainer"),

        url = "https://dbi-app01.databrains.com/views/SMARTLandingpage/LandingPage?:embed=y&:linktarget=_parent#1",
        options = {
            hideTabs: true,
            hideToolbar: true,
            onFirstInteractive: function () {
                console.log("Run this code when the viz has finished loading.");
            }
        };

    // Create a viz object and embed it in the container div.
    var viz = new tableau.Viz(containerDiv, url, options);
}
