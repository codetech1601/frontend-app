const BASE_URL = import.meta.env.VITE_API_URL;

export async function getHello2(){
    const response = await fetch(`${BASE_URL}/test`);

    if(!response.ok){
throw new Error("Backend error");
    }
    return response.text();
}