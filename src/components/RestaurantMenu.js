import { useEffect, useState } from "react";
const RestaurantMenu = ()=>{

    const [resInfo,setResInfo]=useState({})



    const fetchMenu=async()=>{
        const datamenu=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6230719&lng=77.0277157&restaurantId=495618&catalog_qa=undefined&submitAction=ENTER");

        const json = await datamenu.json();
        console.log(json,"menu");
        setResInfo(json);

    };  
    useEffect(()=>{fetchMenu()

    },[]);  
    

    // const result =resInfo?.cards[0]?.card?.card?.info;
    // console.log(result?.name);

    return( 
        <div className="menu">

            {(resInfo !=undefined && Object.keys(resInfo).length>0 )&& 
            <>
            {console.log(resInfo,"resinfo")}
            {/* <h1>{resInfo?.cards?.[0]?.card?.card?.info?.name+"neosndows"}</h1>
             */}
            <h1>{resInfo?.data?.cards?.[0]?.card?.card?.info?.name}</h1>
            </>
            }
            

        </div>
    )

}

export default RestaurantMenu;
