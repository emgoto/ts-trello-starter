declare const axios: any;

const key = '';

export const getToken = (t): Promise<string | void> => t.get('member', 'private', 'authToken');
export const setToken = (t, token): Promise<void> => t.set('member', 'private', 'authToken', token);

export const getFoo = async (t): Promise<any> => {
    const { card: cardId } = t.getContext();
    const token = await getToken(t);

    const url = `https://api.trello.com/1/cards/${cardId}/actions?filter=updateCard:idList,createCard&key=${key}&token=${token}`;
    return axios.get(url).then(response => response.data).catch((e) => {
        if (e && e.response && e.response.status && e.response.status === 401) {
            // Token no longer valid, delete
            setToken(t, undefined);
        }
    });
  };