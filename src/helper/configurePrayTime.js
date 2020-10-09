const prayTimeNow = async (time) =>{
    var timeNow = new Date()
    var nextPrayTime = nextPray
     for (var i =0; i < time.length; i ++){
        time[i].active = false
        if(i != time.length - 1){
            var timePrayNow = new Date()
            timePrayNow.setHours(time[i].rightItem.hour)
            timePrayNow.setMinutes(time[i].rightItem.minute)
            timePrayNow.setSeconds(time[i].rightItem.second)
            
            var timePrayLetter = new Date()
            timePrayLetter.setHours(time[i+1].rightItem.hour)
            timePrayLetter.setMinutes(time[i+1].rightItem.minute)
            timePrayLetter.setSeconds(time[i].rightItem.second)

            if(timeNow == timePrayNow || timeNow == timePrayLetter){
                notifToPray.status = true
                notifToPray.shalat = time[i]
            }

            if(timeNow >= timePrayNow && timeNow <= timePrayLetter){
                nextPrayTime = time[i+1]
                time[i].active = true
                break;
            }
        }else{
            time[i].active = true
            nextPrayTime = time[0]
        }
    }
    nextPray = nextPrayTime
}

var nextPray = ''
var notifToPray = {
    status: false, 
    shalat: ''
}

const clock = async(date) => {
    var hours = date.getHours()
    var minute = date.getMinutes()
    var seconds = date.getSeconds()
    return `${hours < 10? '0'+hours:hours}:${minute< 10? '0'+minute:minute}:${seconds< 10? '0'+seconds:seconds}`
}

export {prayTimeNow, clock, nextPray, notifToPray}