export default function numberWithCommas(num) {
    if(num){
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}