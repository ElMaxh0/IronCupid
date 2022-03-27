async function getApiData(){
    async function dataComponent () {
        const apiUrl = '';
        var api = await fetch(apiUrl).then((response) => response.json())
        console.log(api)
        return(api)
    }
    return dataComponent()
}
export{
    getApiData
}