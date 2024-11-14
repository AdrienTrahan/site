import type { LoadEvent } from "@sveltejs/kit";
import { API_URL } from "./consts";

export async function getLatestUpdateTime(fetch: LoadEvent["fetch"]){
    return fetch(API_URL)
        .then(response => response.json())
        .then(response => response.filter((commit: any) => !commit?.commit?.message?.toUpperCase().includes("CV")))
        .then(data => {
            if (data.length > 0) return new Date(data[0].commit.committer.date);
        })
        .catch(_ => {
            console.error('Error fetching commit data');
        });
}