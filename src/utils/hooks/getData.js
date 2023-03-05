import React from 'react'
import { instance } from "../instance";
import { useQuery } from "@tanstack/react-query";


export const UseGetData = (keys, url, options) => {
    return useQuery(
        keys,
        ()=> instance.get(url).then((res)=> res?.data),
        {...options}
    );
};






// In another page we can use this custom hook like that :) ------------


// const {data: posts, isLoading, isError} = UseGetData(["posts"], '/posts');
// console.log(posts, 1111111);
