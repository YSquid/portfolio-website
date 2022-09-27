
/** CSS Cheat Sheet Detail Toggle */
const csToggle = document.getElementById('cs-detail-toggle')
const csDetail = document.getElementById('cs-details')

function toggleCsDisplay() {
    if (csDetail.style.display === 'none') {
        csDetail.style.display = 'block'
    } else {
        csDetail.style.display = 'none'
    }
}
csToggle.addEventListener('click', toggleCsDisplay);


/** Tea Cozy Detail Toggle **/
const tcToggle = document.getElementById('tc-detail-toggle')
const tcDetail = document.getElementById('tc-details')

function toggleTcDisplay() {
    if (tcDetail.style.display === 'none') {
        tcDetail.style.display = 'block'
    } else {
        tcDetail.style.display = 'none'
    }
}

tcToggle.addEventListener('click', toggleTcDisplay);


/** Credit Card Checker Detail Toggle **/

const ccToggle = document.getElementById('cc-detail-toggle')
const ccDetail = document.getElementById('cc-details')


function toggleCcDisplay() {
    if (ccDetail.style.display === 'none') {
        ccDetail.style.display = 'block'
    } else {
        ccDetail.style.display = 'none'
    }
}


ccToggle.addEventListener('click', toggleCcDisplay)

