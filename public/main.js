const socket = io('http://localhost:3000/');
socket.on('tagid', function (id) {
  id = id.replace(/[^\x20-\x7E]/g, '');
  app.currentTag = id;
});

var app = new Vue({
  el: '#app',
    data() {
      return {
        currentTag: null,
        currentImage: null,
        tags: [
          {
            "id": "07004B7AE7D1",
            "image": "https://images.pexels.com/photos/977737/pexels-photo-977737.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          },
          {
            "id": "07004B99AE7B",
            "image": "https://images.pexels.com/photos/1295138/pexels-photo-1295138.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          },
          {
            "id": "070050C0990E",
            "image": "https://images.pexels.com/photos/398533/pexels-photo-398533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          },
          {
            "id": "07004B78BF8B",
            "image": "https://images.pexels.com/photos/396143/pexels-photo-396143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          },
          {
            "id": "070050BFA34B",
            "image": "https://images.pexels.com/photos/1055058/pexels-photo-1055058.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            
          },
          {
            "id": "07004BD88B1F",
            "image": "https://images.pexels.com/photos/416676/pexels-photo-416676.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          },
          {
            "id": "07004B99CE1B",
            "image": "https://images.pexels.com/photos/835615/pexels-photo-835615.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          },
          {
            "id": "07004BD84CD8",
            "image": "https://images.pexels.com/photos/687459/pexels-photo-687459.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          },
          {
            "id": "07004B791326",
            "image": "https://images.pexels.com/photos/129459/pexels-photo-129459.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          },
          {
            "id": "070050195B15",
            "image": "https://images.pexels.com/photos/574282/pexels-photo-574282.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          },
          {
            "id": "07000B26C7ED",
            "image": "https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          },
          {
            "id": "0700503E1D74",
            "image": "https://images.pexels.com/photos/34074/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          },
          {
            "id": "0700503E2E47",
            "image": "https://images.pexels.com/photos/1133504/pexels-photo-1133504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          },
          {
            "id": "C80007FE2E1F",
            "image": "https://images.pexels.com/photos/1114897/pexels-photo-1114897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          },
          {
            "id": "07005040889F",
            "image": "https://images.pexels.com/photos/91228/pexels-photo-91228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          },
          {
            "id": "07000DFF19EC",
            "image": "https://images.pexels.com/photos/1292716/pexels-photo-1292716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          }
        ]
      }
    },
    watch: {
    currentTag: function (val) {
      if (val) {
        this.changeImage();
      }
    }
  },
  methods: {
    changeImage: function() {
      for (let item of this.tags) {
        if (item.id === this.currentTag) {
          this.currentImage = item.image;
        }
      }
    }
  }
 });