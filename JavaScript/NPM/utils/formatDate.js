import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js"; 
import relativeTime from "dayjs/plugin/relativeTime.js";


dayjs.extend(utc);
dayjs.extend(relativeTime);

const formatISODate = (isoDate) => dayjs.utc(isoDate).format("MMMM D, YYYY, h:mm:ss A [UTC]");
const relativeDate = (date) => dayjs(date).fromNow();
const longDate = (date) => dayjs(date).format("dddd, MMMM D, YYYY");
const shortDate = (date) => dayjs(date).format("MM/DD/YYYY");

//console.log(relativeDate("2023-10-04"));
//console.log(longDate("2023-01-21")); 
//console.log(shortDate("2024-02-11")); 
//console.log(formatISODate("2023-01-01T12:34:56Z"));
export { formatISODate, relativeDate, longDate, shortDate }
