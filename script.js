let szinek = ['orange', 'magenta', 'red', 'green', 'yellow'];
function egySzinDoboz(szin) {
    $('.kontener').append('<div class="doboz"></div>');
    $('.kontener div:last-of-type').css('background-color', szinek[szin]);
}

szinek.forEach(egySzinDoboz)

function calculateBoxArea(width, height) {
    let area = width * height;
    return area;
}




console.log(calculateBoxArea(3, 4));

let calculateBoxArea = (width, height) => {
    let area = width * height;
    return area;
}

c