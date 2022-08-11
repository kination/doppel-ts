import Pretender from 'pretender';

interface IPhoto {
  [key: string]: {
    id: number,
    src: string
  }
}

const PHOTOS: IPhoto = {
  '10': {
    id: 10,
    src: 'http://media.giphy.com/media/UdqUo8xvEcvgA/giphy.gif'
  },
  '42': {
    id: 42,
    src: 'http://media0.giphy.com/media/Ko2pyD26RdYRi/giphy.gif'
  }
};

const server = new Pretender(function(){
  this.get('/photos', function(request){
    let all =  JSON.stringify(Object.keys(PHOTOS).map(function(k){
      return PHOTOS[k];
    }));
    return [200, {'Content-Type': 'application/json'}, all];
  });

  this.get('/photos/:id', function(request){
    const id: string = request!.params!.id as string
    return [200, {'Content-Type': 'application/json'}, JSON.stringify(PHOTOS[id])];
  });
});

