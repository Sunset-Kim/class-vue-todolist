export default () => {
    const now = new Date();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const daylist = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    const day = daylist[now.getDay()];
    const time = now.getTime();
    const hour = (now.getHours() < 10) ? '0'+now.getHours() : now.getHours();
    const min = (now.getMinutes() < 10) ? '0' + now.getMinutes() : now.getMinutes();
    
    const dateInfo = {
        month,
        date,
        day,
        time,
        hour,
        min
    };

    return dateInfo;
}