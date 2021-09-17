// ricrea slider 
// aggiungi auto slide every 3 s


const app = new Vue({
    el: '#root',
    data: {
        sliderImages: [
            {
                url: "https://cdn.pixabay.com/photo/2016/10/14/19/21/canyon-1740973_1280.jpg",
                nameImg: 'canyon',
                alt: 'canyon image' 
            },
            {
                url: "https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_1280.jpg",
                nameImg: 'mountains sunset',
                alt: 'mountains sunset image' 
            },
            {
                url: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg",
                nameImg: 'mountain landscape',
                alt: 'mountain landscape image' 
            },
            {
                url: "https://cdn.pixabay.com/photo/2016/08/09/21/54/lake-1581879_1280.jpg",
                nameImg: 'lake',
                alt: 'lake image' 
            },            
        ],

        imageIndex: 0,

        autoslide: '',

    }, 
    methods: {
        prevImage: function() {            
            if ( this.imageIndex == 0 ) {
                this.imageIndex = this.sliderImages.length - 1;
            } else {
                this.imageIndex--;
            }
        },

        nextImage: function() {
            if ( this.imageIndex == this.sliderImages.length - 1 ) {
                this.imageIndex = 0;
            } else {
                this.imageIndex++;
            }
        },

        stopAutoSlide: function() {
            clearInterval(this.autoslide);
        },

        changeimage: function(index) {
            this.imageIndex = index;
        },
    },
    mounted: function() {
        this.autoslide = setInterval( () => { 
            this.nextImage();
        }, 3000);
    }

});