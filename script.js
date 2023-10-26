function showFeatures() {
    var features = document.getElementById("features");
    features.style.display = "block";
    }
    
    function hideFeatures() {
    var features = document.getElementById("features");
    features.style.display = "none";
    }
    
    window.addEventListener("load", function() {
    var features = document.getElementById("features");
    features.style.display = "none";
    });
    