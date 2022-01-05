import { Api, API_KEY, HASH } from './API'

export const getCharactersMarvel = async (letter = 'a') => {
    try {
        let { data } = await Api.get(`/characters?nameStartsWith=${letter}&ts=1&apikey=${API_KEY}&hash=${HASH}`);
        return data.data.results;   
    } catch (error) {
        console.log(error);
    }
}