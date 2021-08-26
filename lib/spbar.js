class ProgressBar{
    constructor(element){
      this.pbar = {
        value:0,
        color:'#F39C12',
        background:'#f0f0f0',
        elements:null
      }
      this.body = {
        bar : element,
        progress : document.createElement('div')
      }
      // bar styles
      this.body.bar.style.width = '100%';
      this.body.bar.style.height = '20px';
      this.body.bar.style.backgroundColor = '#f0f0f0';
      this.body.bar.style.borderRadius = '15px';
      this.body.bar.style.boxSizing = 'border-box';
      this.body.bar.style.padding = '5px';
      this.body.bar.style.overflow = 'hidden';
      // progress style
      this.body.progress.style.height = '10px';
      this.body.progress.style.backgroundColor = '#F39C12';
      this.body.progress.style.width = '0%';
      this.body.progress.style.borderRadius = '10px';
      this.body.progress.style.transition = '0.5s';
      this.body.bar.appendChild(this.body.progress);
      this.pbar.elements = this.body;
      const px = new Proxy(this.pbar,{
        get : function(obj, prop){
          if(prop == 'value'){
            return obj.value;
          }
          else if(prop == 'color'){
            return obj.color;
          }
          else if(prop == 'background'){
            return obj.background;
          }
        },
        set : function(obj, prop, value){
          if(prop == 'value'){
            if(value < 0 || value > 1){
              console.error('the value is outside the limits');
              return;
            }
            obj.value = value;
            obj.elements.progress.style.width = (obj.value*100)+'%';
          }
          else if(prop == 'color'){
            obj.color = value;
            obj.elements.progress.style.backgroundColor = obj.color;
          }
          else if(prop == 'background'){
            obj.background = value;
            obj.elements.bar.style.backgroundColor = obj.background;
          }
        }
      });
      return px;
    }
  }