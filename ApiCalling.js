
export const getProductApi=async(url,category_id=31)=>{
    const res=await fetch(`${url}`,{
        method:'post',
        body:JSON.stringify({
            shop_id:85,
            category_id:parseInt(category_id),
            product_id:12,
            product_type:"admin_product"
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
            authorization:`Bearer ${import.meta.env.VITE_TOKEN}`
        }
    });
    const data=await res.json();
    return await data
}

export const getProductApi1=async(url,category_id,shop_id,product_id,product_type)=>{
    const res=await fetch(`${url}`,{
        method:'post',
        body:JSON.stringify({
            shop_id:shop_id,
            category_id:category_id,
            product_id:product_id,
            product_type:product_type
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
            authorization:`Bearer ${import.meta.env.VITE_TOKEN}`
        }
    });
    const data=await res.json();
    return await data
}