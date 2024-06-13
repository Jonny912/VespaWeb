const userRegister =  async (data) => {
    try {
      const resp = await fetch('http://localhost:8888/api/auth/register',
        {method: 'POST',
         headers:{
            "content-type": "application/json"
         },
         body: JSON.stringify(data)
        }
       )
       return resp
    }
    catch(error){
        console.log(error.message)
    }
}

export default userRegister;