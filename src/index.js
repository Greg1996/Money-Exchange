// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let obj = {};
    if(currency>=10000){
        obj ={error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    else {
        let arr_1 = [50,25,10,5,1];
        let arr_2 = ['H', 'Q', 'D', 'N', 'P'];
        for(let i=0; i<arr_1.length; i++ ){
            let x = currency/arr_1[i];
            if(x>=1){
                let y = Math.floor(x);
                currency = currency-(y*arr_1[i]);
                obj[arr_2[i]]= y;
            }
        }
    }
    return obj;
}
