declare const TrelloPowerUp: any;
const t = TrelloPowerUp.iframe();
declare const Trello: any;

import { setToken } from './trello-util';

function onAuthenticate() {
  t.popup({
    type: 'confirm',
    title: 'Title',
    mouseEvent: event,
    message: 'message',
    confirmText: 'Authorize',
    onConfirm: () => {
      Trello.authorize({
        type: "popup",
        name: "name",
        expiration: "never",
        success: () => {
          setToken(t, Trello.token());
        },
        error: () => { },
      });
    },
  });
};

t.render(async function () {
  t.sizeTo(document.getElementById('wrapper'));
});
