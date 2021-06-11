function normalEndingForWord(number, variants) {
    let cases = [2, 0, 1, 1, 1, 2];
    return number + " " + variants[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}


function dateTimeToNormal(dateTime) {

    let date = new Date(Date.parse(dateTime))
    let now = new Date()

    let delta = (now - date) / 1000 / 60


    if (delta < 0) {
        return date.toLocaleString("ru", {
            year: 'numeric', month: 'long', day: 'numeric',
            hour: 'numeric', minute: 'numeric'
        })
    }

    if (delta < 1) {
        return "Меньше минуты назад"
    }

    if (delta < 60) {
        return normalEndingForWord(Math.floor(delta), ['минута', 'минуты', 'минут']) + " назад"
    }

    if (delta <= 60 * 24) {
        return normalEndingForWord(Math.floor(delta / 60), ['час', 'часа', 'часов']) + "  назад"
    }

    return normalEndingForWord(Math.floor(delta / (60 * 24)), ['день', 'дня', 'дней']) + " назад"

}

export default dateTimeToNormal