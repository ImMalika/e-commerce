import { instance } from "../instance";
import { useMutation } from "@tanstack/react-query";

export const UseDeleteData = (url)=>{
    return useMutation(()=> instance.delete(url));
};



// In another page we can use this custom hook like that :) ----------------

// const del = UseDeleteData('/posts/4);
// <button onClick={()=>del.mutate()}>delete</button>