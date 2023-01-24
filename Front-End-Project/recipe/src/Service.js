const queryStrings = {
    app_id : process.env.REACT_APP_APP_ID,
    app_key:process.env.REACT_APP_APP_KEY
}


// https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}

export const fetchdata = async (defaultQuery)=>{
    const {app_id , app_key} = queryStrings;

    try{
        const data = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`)
        const response = await data.json();
        // console.log(response);
        return response;
    }
    catch(e)
    {
        console.log("something went wrong" , e);
        return e;
    }
}




export const fetchTabata = async (defaultQuery)=>
{
    const {app_id , app_key} = queryStrings;

    try{
        const data = await fetch(`https://api.edamam.com/api/recipes/v2/${defaultQuery}?type=public&app_id=${app_id}&app_key=${app_key}`);
        const response =  data.json();
        // console.log(response);
        return response;
    }
    catch(e)
    {
        console.log("something went wrong" , e);
        return e;
    }
}