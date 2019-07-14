function $(selector){
    const self = {
        element: document.querySelector(selector),
        html: ()=> self.element,
        attr: (name, value)=> {
            if (!value) return self.element.getAttribute(name);
            self.element.setAttribute(name, value);
        },
        on: (type, callback)=>{
            self.element['on' + type] = callback;
            // document.addEventListener(event, callback);
        },
        hide: ()=>{
            self.element.style.display = 'none';
        }
    }
    return self;
};