export const getUser = id => (
    $.ajax({
        method: 'GET',
        url: `api/users/${id}`
    })
)

export const patchUser = (id, user) => (
    $.ajax({
        method: 'PATCH',
        url: `api/users/${id}`,
        data: { user }
    })
)