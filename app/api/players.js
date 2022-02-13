import client from './client'

const getPlayers = (name) => client.get(`/valorant/players?name=${name}`)

export default {
    getPlayers,
}