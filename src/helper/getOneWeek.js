const getOneWeek = () =>{
    var curr = new Date; // get current date
    var sundayOnThisWeek = curr.getDate() - curr.getDay();
    var days = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"]
    var array = []
    var dayActive = false
    for(var i = 1; i <= 7;i++){
        dayActive = false
        var currentDateIndex = sundayOnThisWeek + i
        var currentDate = new Date(curr.setDate(currentDateIndex));
        if(currentDate.getDay() == new Date().getDay()){
            dayActive = true
        }
        var newObject = {
            number : i, 
            day: days[i-1], 
            date: currentDate.getDate(), 
            active: dayActive
        }
    array.push(newObject)
    }
    return array
}

export { getOneWeek }