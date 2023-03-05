import { instance } from "../instance";
import { useMutation } from "@tanstack/react-query";

export const UseEditData = (url)=>{
    return useMutation((data)=>instance.patch(url, data));
};






// In another page we can use this custom hook like that :) ---------------

// const editPost = UseEditData("/posts/${id}");
// const editPost.mutate(
    // {name : "Name", lorem: "nimadr"},
    // {
    //     onSuccuss: (data) => console.log(data, "data"),
    //     onError: (error)=> console.log(error, 'error');
    // }
// );