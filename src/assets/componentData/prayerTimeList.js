import subuh from '../logo/subuh.png'
import dzuhur from '../logo/dzuhur.png'
import ashar from '../logo/ashar.png'
import maghrib from '../logo/maghrib.png'
import isya from '../logo/isya.png'
import terbit from '../logo/terbit.png'
import global from '../logo/global.png'
const prayerTimeList = [
    {
        leftItem : {
            label: 'Subuh', image: subuh 
        },
        rightItem : {
            hour: 4, minute:26, second: 0 
        },
        active: false
    },
    {
        leftItem : {
            label: 'Terbit', image: terbit 
        },
        rightItem : {
            hour: 5, minute:43, second: 0 
        },
        active: false
    },
    {
        leftItem : {
            label: 'Dzuhur', image: dzuhur 
        },
        rightItem : {
            hour: 11, minute:46, second: 0
        },
        active: false
    },
    {
        leftItem : {
            label: 'Ashar', image: ashar 
        },
        rightItem : {
            hour: 14, minute:57, second: 0 
        },
        active: false
    },
    {
        leftItem : {
            label: 'Maghrib', image: maghrib 
        },
        rightItem : {
            hour: 17, minute:49, second: 0 
        },
        active: false
    },
    {
        leftItem : {
            label: 'Isya', image: isya,
        },
        rightItem : {
            hour: 18, minute:58, second: 0
        },
        active: false
    },
]
export {prayerTimeList,global}