function calc() {
    let A = document.getElementById("agejs").value;
    let W = document.getElementById("weights").value;
    let H = document.getElementById("heights").value;
    let S
    let R
    
    if (document.getElementById("male").checked) {
        S =  Math.round((9.99*W)+(6.25*H)-(4.92*A)+5)
        
    } else if (document.getElementById("female").checked) {
        S =  Math.round((9.99*W)+(6.25*H)-(4.92*A)-161)
    }

    // Activity 0 (BMR)
    if (document.getElementById("1").selected) {
        R = S
    }

    // Activity 1
    if (document.getElementById("2").selected) {
        R = S*1.2
    }

    // Activity 2
    if (document.getElementById("3").selected) {
        R = S*1.35
    }

    // Activity 3
    if (document.getElementById("4").selected) {
        R = S*1.55
    }
    
    // Activity 4
    if (document.getElementById("5").selected) {
        R = S*1.75
    }

    // Activity 5
    if (document.getElementById("6").selected) {
        R = S*1.95
    }
    
    document.getElementById("result").innerHTML = R.toFixed(0)
    
    }