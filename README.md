# simple-progress
this is a very simple progress bar to use in HTML


## Use example:

  const bar = new ProgressBar(pbar);
  
  setTimeout(()=>{
    bar.value = 2.53
  },2000)
  
## Properties
- value         ==> number max=1 min=0
- color         ==> CSS value color
- background    ==> CSS background color
