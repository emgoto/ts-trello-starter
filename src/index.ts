declare const TrelloPowerUp: any;

window.Promise = TrelloPowerUp.Promise;

TrelloPowerUp.initialize({
  // Button in top right corner of board
  'board-buttons': function (t) {
    return [{
      text: 'Text',
      callback: (): void => t.modal({
        url: './settings.html',
        height: 360,
        fullscreen: false,
        title: 'Title'
      }),
      condition: 'edit'
    }];
  },
  // Badges on front of card
  'card-badges': function (t) {
    return []
  },
  // Badges on back of card
  'card-detail-badges': function (t) {
    return [];
  },
},
  {
    appKey: '',
    appName: ''
  });
