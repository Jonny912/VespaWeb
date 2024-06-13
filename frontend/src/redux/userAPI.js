import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const userAPI = createApi({
    reducerPath: 'úserAPI',
    tagTypes: ['User'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8888/api/auth'}),
    endpoints: (build) => ({
        userRegister: build.mutation({
            query: (body) => ({
                url: 'register',
                method: 'POST',
                body
            }),
            invalidatesTags: [{type: 'User', id: 'LIST'}]
        }),
        userLogin: build.mutation({
            query: (body) => ({
                url: 'login',
                method: 'POST',
                body
            })
        }),
        userLogout: build.mutation({
            query: (token) => ({
                url: 'logout',
                method: 'POST',
                headers: {
                 'authorization': `Bearer ${token}`,
                 
                }
               
            })

        })
    })
})


export const{useUserRegisterMutation, useUserLoginMutation, useUserLogoutMutation} = userAPI;