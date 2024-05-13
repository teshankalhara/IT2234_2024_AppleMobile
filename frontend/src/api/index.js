const backendDomin = "http://localhost:8080"

const SummaryApi ={
    signUP : {
        url : `${backendDomin}/api/signup`,
        method : "post"
    },
    signIN:{
        url : `${backendDomin}/api/signin`,
        method : "post"
    },
    current_user:{
        url:`${backendDomin}/api/user-details`,
        method:"get"
    }
}

export default SummaryApi 