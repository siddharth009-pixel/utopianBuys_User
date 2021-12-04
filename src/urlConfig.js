export const api='https://utopianbuys.loca.lt/api'
// export const api='http://localhost:2000/api'
// export const api='https://utopianbuys.herokuapp.com/api/'
const photoAPI='https://utopianbuys.loca.lt/public'
export const generatePublicUrl=(filename)=>{
    // return `http://localhost:2000/public/${filename}`
    return `${filename}`
}


export const localImageToLocalTunnelImage = (localLink) => {
    if (localLink) {
        const myArray = localLink.split("http://localhost:2000/public")[1];
        const LocalTunnelLink=photoAPI+myArray;
        return LocalTunnelLink   
    }
}