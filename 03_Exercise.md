### Why does the alert show Jack first and then undefined?
```javascript
function identity() {
    var name = 'Jack';
    alert(name);
    return
    name
};

var who = identity();
alert(who)
```
# Answer
The first alert runs because the function is called on `who` variable; this function has an alert inside and it alerts "Jack" since the scope is valid;  
The function has an undefined value since the return is not catching `name` in the next line, the function stops in the `return` statement returning nothing; so the second alert runs on the last line `alert(who)` because the value of `who` variable is undefined.  
If we remove the breakline to return the `name` variable correctly, the second alert will show "Jack" properly.

