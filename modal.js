class Modal {
    constructor(text = 'the text was not transmitted'){
        this.text = text;
        this.init()
    }

    init(){
        this.addMarkUp();
        this.wraper = document.querySelector('.wraper')
        this.close = document.querySelector('.close')
        this.handleClose()
    }

    addMarkUp() {
        document.body.insertAdjacentHTML('beforeend', `
        <div class="wraper open">
        
        <div class="modal">
                <span class="close">x</span>
                <div class="info"><p>${this.text}</p></div>

                <div class="regist">
                    <input type="text" class="input">
                    <input type="text" class="input">
                </div>

                <div class="submit">
                    <button class="btn">registr</button>
                    <button class="btn">submit</button>
                </div>
        
        </div>
        
    </div>
        `)
        
    }

    handleClose(){
        this.removeModal = this.removeModal.bind(this);
        this.handleClick = this.handleClick.bind(this);
        
       

        this.close.addEventListener('click', this.removeModal)
        window.addEventListener('click', this.handleClick)
        window.addEventListener('keyup', this.handleClick)
        
        
        

    }

    handleClick(e){
        if(e.key === 'Escape' || e.target === this.wraper){
            this.removeModal();
        }
    }

    removeModal(e){
        this.detochEvent()
                
        this.wraper.remove()
    }

    detochEvent(){
        window.removeEventListener('click', this.handleClick)
        window.removeEventListener('keyup', this.handleClick)
    }

}