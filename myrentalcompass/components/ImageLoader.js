let ImageLoader;

export default ImageLoader = ({ src, width, quality }) => {
    return `https://develop.d1f77h13nbf5uz.amplifyapp.com/${src}?w=${width}&q=${quality || 75
        }`;
};