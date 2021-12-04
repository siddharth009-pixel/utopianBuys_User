export const getParams = (query) => {
    if (query) {
        const queryString = query.split("?")[1]
        if (queryString.length > 0) {
            let params = queryString.split("&")
            let paramsObj = {}
            params.forEach((param) => {
                const keyValue = param.split("=")
                paramsObj[keyValue[0]] = keyValue[1]
            })
            return paramsObj
        }
    }
    return {}
}

// export const localImageToLocalTunnelImage = (localLink) => {
//     if (localLink) {
//         const myArray = text.split("http://localhost:2000/public")[1];
//         letLocalTunnelLink='localtunnel link'+myArray;
//     }
// }


export default getParams