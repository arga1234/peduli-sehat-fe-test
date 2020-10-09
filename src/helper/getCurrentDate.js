const dateNow = () =>{
    var monthString = ["January","February", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
    var date = new Date()
    var month =  date.getMonth()
    var year = date.getFullYear()
    return `${monthString[month]} ${year}`
}

export {dateNow}