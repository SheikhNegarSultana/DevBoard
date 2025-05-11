function date(){
    const date = new Date();
    const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];

    const days = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

    const calenderDate1 = `${days[date.getDay()]} , `

    const calenderDate2 = `${months[date.getMonth()]} ${date.getDate()}  ${date.getFullYear()} `
    

    setInnerText('date1' , calenderDate1 );
    setInnerText('date2' , calenderDate2 );

}
date();