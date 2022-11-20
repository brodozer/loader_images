export default function loaderImages(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img)
        const msg = `Could not load image at ${url}`
        img.onerror = () => reject(new Error(msg));
        img.src = url;  
    })
}    