

export async function getWorks() {
    const request = await fetch("http://localhost:5678/api/works")
    const data = await request.json()

    return data
}

export async function getCategories() {
    const request = await fetch("http://localhost:5678/api/categories")
    const data = await request.json()

    return data
}





export async function login(chargeUtile) {
    const request = await fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(chargeUtile)
    });

    const data = await request.json()

    return data
}

export async function deleteWork(id) {
    const request = await fetch("http://localhost:5678/api/works/" + id, {
        method: "DELETE",
        headers: {
          
            "Authorization": "Bearer " + localStorage.getItem('token')
        },
        
    });

    const data = await request.json()

    return data
}


export async function addWork(formData) {
    const request = await fetch("http://localhost:5678/api/works", {
        method: "POST",
        body: formData,

        headers: {
          
            "Authorization": "Bearer " + localStorage.getItem('token')
        }


    });


    

    const data = await request.json()

    return data
};

