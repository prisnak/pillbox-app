//./services/BookService.js

export const _updatePet = (updatedId, name, type, token) => {
	return fetch(`http://localhost:3001/pets/update/${updatedId}`, {
	    method: 'POST',
	    headers: {
	      'Accept': 'application/json',
	      'Content-Type': 'application/json'
	    },
	    body: JSON.stringify({name, type, token})
	  }).then(res => res.json())
}

export const _loadLogin = () => {
	return fetch("http://localhost:3001/login", {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
				}
			}).then(res=>res.json())
}

export const _deletePet = (id, token) => {
    return fetch(`http://localhost:3001/pets/${id}`, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
	    body: JSON.stringify({token})
      }).then(res => res.json())
}

export const _createReminder = (name, type, token) => {
	return fetch("http://localhost:3001/pets", {
	    method: 'POST',
	    headers: {
	      'Accept': 'application/json',
	      'Content-Type': 'application/json'
	    },
	    body: JSON.stringify({name, type, token})
	  }).then(res => res.json())
}