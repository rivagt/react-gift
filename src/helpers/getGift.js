export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=sZj3gDhchQ0H66EafpHnpwr9rkdPBhpC`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gift = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    // console.log(data);
    // setImages(gift);
    return gift;
}