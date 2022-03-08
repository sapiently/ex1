class YoutubeService{
    constructor(key){
        this.key=key
        this.requestOptions = {method:'GET', redirect:'follow'}
    }
    async mostPopular(){
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&regionCode=kr&maxResults=30&key=${this.key}`, this.requestOptions)
        const result = await response.json();
        return result.items
    }
    async searchResult(searchValueText){
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&regionCode=kr&type=video&maxResults=30&q=${searchValueText}&key=${this.key}`, this.requestOptions)
        const result = await response.json()
       /*  .then(response => response.json())
        .then(result =>  */return result.items.map(item=>({...item, id:item.id.videoId}))/* ) */
        /* .then(items => setVideoItems(items))
        .catch(error => console.log('error', error)); */
    }
}

export default YoutubeService