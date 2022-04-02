//ASYNC AWAIT 

// const getImagePromesa = () => {
//     const promesa = new Promise( (resolve, reject) => {
//         resolve('https://asdfasdfasd.com')
//     })
//     return promesa;
// }

// getImagePromesa().then(console.log)

const getImage = async () => {
    try {
        const apiKey = 'LDPNWGjMFYtyCMPDdTATiHvHu0VmZtP0';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img)
        console.log(data)
    } catch (error) {
        //manejo del error 
        console.error(error)
    }

}

getImage();


// const apiKey = 'LDPNWGjMFYtyCMPDdTATiHvHu0VmZtP0';

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

// peticion.then(resp => resp.json())
// .then( ({ data }) => {
//     // console.log(data.images.original.url)
//     const { url } = data.images.original;
//     console.log(url)
//     const img = document.createElement('img');
//     img.src = url;
//     document.body.append( img )
// })
// .catch(console.warn);