import { useState, useEffect } from 'react';

export const useQuery = (model) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState({})

    const create = (body, redirect = false) => {
      setLoading(true)

      fetch(`/${model}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(body)
      })
        .then(response => response.json())
        .then(response => {
          if (response === 'ok') {
            window.location.replace(`${redirect.url}?success=${redirect.text}`)
          } else setErrors(response.errors)
        })
        .then(() => setLoading(false))
    }

    const get = () => {
      fetch(`/${model}`)
        .then(res => res.json())
        .then(res => setData(res))
        .then(() => setLoading(false))
    }

    const update = (id, body) => {
      setLoading(true)

      fetch(`${model}/${id}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "PATCH",
        body: JSON.stringify(body)
      })
        .then(res => res.json())
        .then(() => get())
    }

    const remove = (id) => {
      setLoading(true)

      fetch(`/${model}/${id}`, { method: "DELETE" })
        .then(res => res.json())
        .then(() => get())
    }  

    useEffect(() => get(), [])

    return {
      create,
      remove,
      update,
      data,
      loading,
      errors
    }
}
