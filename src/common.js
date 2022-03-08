export function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?1\d))/g, ',');
}

export function publishDate(publishDateValue){
    const publishDate = new Date (publishDateValue)
    const currentDate = new Date();
    const second = (currentDate.getTime() - publishDate.getTime()) / 1000
    let result
    if(second < 60){result=`${second}초 전`}
    else if(second<3600){result=`${Math.floor(second/60)}분 전`}
    else if(second<86400){result=`${Math.floor(second/3600)}시간 전`}
    return result;
}
