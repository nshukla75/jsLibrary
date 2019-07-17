(function(window){
    function myLibrary(){
        let myLibrary = {
            slideShow: _start,
            carouselItems: [],
            slideTime: 4000
        }

        function _start(selector){
            const container = document.querySelector(selector);
            let child =container.children;
            let _carouselItems = [];
            for(let i=0; i<child.length; i++){
                _carouselItems[i]=child[i];
            }
            myLibrary.carouselItems = _carouselItems;
            container.style.backgroundImage = `url(${_carouselItems[0].src})`;
            let next=1;
            setInterval(()=>{
                if(next>= _carouselItems.length){
                    next = 1;
                    _carouselItems.map(images=>{
                        images.classList.remove('active');
                    })
                } else {
                    _carouselItems[next].classList.add('active');
                    next++;
                }
            }, myLibrary.slideTime);
           
        }
        return myLibrary;
    }

    if(typeof window.GlobalLibraryName === 'undefined'){
        window.GlobalLibraryName = myLibrary();
    }
})(window);

export default GlobalLibraryName;
