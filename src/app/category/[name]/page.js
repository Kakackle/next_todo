"use client";
import { useParams } from "next/navigation"
export default function CategoryPage(){
    const params = useParams();
    // console.log(params);
    const name = params.name;
    // console.log(router.query);
    return (
        <main>
            <h1>Category {name} page</h1>
        </main>
    )
}