export let checkStringLength = (string, stringLength) => {
    if(string === undefined || string === null) {
        string = "Наименование"
    }
    // console.log(Math.ceil(string.length/stringLength))
    if(string.length >= 30) {
        let res  =  (Math.ceil((string.length + 2)/stringLength)) * 25
        return res
    }
        return 26
}

export let setPadding = (string) => {
    if(string === undefined || string === null) {
        // console.log(true)
        string = "Наименование"
    }
    if(string.length >= 30) {
        return 8
    }
    return 2
}