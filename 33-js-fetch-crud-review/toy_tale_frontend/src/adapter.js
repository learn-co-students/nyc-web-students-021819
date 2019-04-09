const adapter = (rootURL) => {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  const getAll = () => {
    return fetch(rootURL).then(r => r.json())
  }

  const getOne = (id) => {
    return fetch(`${rootURL}/${id}`).then(r => r.json())
  }

  const create = (body) => {
    return fetch(rootURL, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    })
    .then(r => r.json())
  }

  const update = (id, body) => {
    return fetch(`${rootURL}/${id}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify(body)
    })
    .then(r => r.json())
  }

  const destroy = (id) => {
    return fetch(`${rootURL}/${id}`, { method: 'DELETE' })
    .then(r => r.json())
  }

  return {
    getAll,
    getOne,
    create,
    update,
    destroy
  }
}
