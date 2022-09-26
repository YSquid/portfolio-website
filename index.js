/*document.getElementById('mybutton').onclick = function() {
    const h5 = document.getElementById('h5')
    h5.style.color = 'red';
}*/

/*document.getElementById('details-button-1').onclick = function() {
    const details = document.querySelector('#cheat-sheet-details')
    details.style.display = 'block'
}*/

/*document.getElementById('cs-detail-toggle').onclick = function() {
    document.getElementById('cheat-sheet-details').style.display = 'block'
}
*/

const toggle = document.getElementById('cs-detail-toggle')
const csDetail = document.getElementById('cheat-sheet-details')

function toggleDisplay(obj) {
    csDetail.style.display = 'block'
}

toggle.onclick = toggleDisplay


