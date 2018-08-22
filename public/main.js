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
        timeOut: null,
        tags: [
          {
            "id": "07004B7AE7D1",
            "image": "/images/start/fungicide-startscan.png"
          },
          {
            "id": "07004B99AE7B",
            "image": "/images/start/micronutrient-startscan.png"
          },
          {
            "id": "070050C0990E",
            "image": "/images/start/nematicide-startscan.png"
          },
          {
            "id": "07004B78BF8B",
            "image": "/images/start/fungicide-startscan.png"
          },
          {
            "id": "070050BFA34B",
            "image": "/images/start/micronutrient-startscan.png"
            
          },
          {
            "id": "07004BD88B1F",
            "image": "/images/start/nematicide-startscan.png"
          },
          {
            "id": "07004B99CE1B",
            "image": "/images/start/fungicide-startscan.png"
          },
          {
            "id": "07004BD84CD8",
            "image": "/images/start/micronutrient-startscan.png"
          },
          {
            "id": "07004B791326",
            "image": "/images/start/nematicide-startscan.png"
          },
          {
            "id": "070050195B15",
            "image": "/images/start/fungicide-startscan.png"
          },
          {
            "id": "07000B26C7ED",
            "image": "/images/start/micronutrient-startscan.png"
          },
          {
            "id": "0700503E1D74",
            "image": "/images/start/nematicide-startscan.png"
          },
          {
            "id": "0700503E2E47",
            "image": "/images/start/fungicide-startscan.png"
          },
          {
            "id": "C80007FE2E1F",
            "image": "/images/start/micronutrient-startscan.png"
          },
          {
            "id": "07005040889F",
            "image": "/images/start/nematicide-startscan.png"
          },
          {
            "id": "07000DFF19EC",
            "image": "/images/start/fungicide-startscan.png"
          }
        ]
      }
    },
    mounted() {
      this.carousel();
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
          let self = this;
          if (this.timeOut) {
            clearTimeout(this.timeOut);
          }
          this.timeOut = setTimeout(function () { 
            self.currentImage = null; 
            self.currentTag = null; 
          } , 20000)
        }
      }
    },
    carousel: function() {
      new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 1,
        grabCursor: true,
        keyboard: {
          enabled: true,
        },
      });
    }
  }
 });