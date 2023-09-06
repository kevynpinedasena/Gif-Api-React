export const getGifs = async( categoria ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=igScpbktaAERlBqrUPdwKANSc1hSG0YI&q=${ categoria }&limit=9`;

    const resp = await fetch( url );
    const { data } = await resp.json();
    
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    return gifs;
}
