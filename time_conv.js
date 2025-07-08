
export function time_converter(time) {
    let [hour,min] = time.split(':').map(Number);
    hour = (hour%12===0) ? 12 : (hour%12);
    let a = (hour>12) ? "PM" : "AM"; 
    let Newtime = String(hour + ":" + min + " " + a);
    return Newtime;
};

export function Date(dt) {
    let [year,month,date] = dt.split('-').map(Number);
    let monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let newDate = `${date} ${monthNames[month-1]} ${year}`;
    // console.log(newDate);
    return newDate; 
};