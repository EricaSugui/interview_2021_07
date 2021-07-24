### How to apply a click event to all paragraphs except for the last?  
  
# Answer
I can apply a .not() selector with :last to filter the last paragraph.  

```javascript
$('p').not(':last').on('click', functionHere);
```