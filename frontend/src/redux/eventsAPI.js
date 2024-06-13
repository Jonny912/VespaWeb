import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const eventsApi = createApi({
    reducerPath: "eventsApi",
    tagTypes: ["Events"],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8888/api/events'}),
    endpoints: (build) => ({
      getEvents: build.query({
        query: (token) => ({
            url: '/',
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`,
                
               },
        }),
        providesTags: (result, error, _id) => [{ type: 'Events', _id }],
      }),
      getTotalEvents: build.query({
        query: () => ({
          url: '/total',
          method: 'GET',
          headers: {
            'Content-Type': 'aplication/JSON'
          }
        })
      }),
        addEvent: build.mutation({
          query: ({body, token}) => ({
            url: '/',
            method: 'POST',
            headers: {
                'authorization': `Bearer ${token}`,
               },
            body
          }),
          invalidatesTags:[{type:'Events', _id:'LIST'}],
        }),
        deleteEvent: build.mutation({
          query: ({id, token}) => ({
            url: `/${id}`,
            method: 'DELETE',
            headers: {
              'authorization': `Bearer ${token}`,
             },
          }),
          invalidatesTags:[{type:'Events', _id:'LIST'}],
        })
    })

})


export const {useAddEventMutation, useGetEventsQuery, useDeleteEventMutation, useGetTotalEventsQuery} = eventsApi;

