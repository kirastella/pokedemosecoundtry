constlocalstModule = (function (){​​​​​​​​
 
constcreate = function(name, data){​​​​​​​​
 
if(typeof(data) == "object"){​​​​​​​​
console.log("Hey, du skriver et object!")
data = JSON.stringify(data);
        }​​​​​​​​
 
localStorage.setItem(name, data)
    }​​​​​​​​
 
constread = function(name){​​​​​​​​
letreadValue = localStorage.getItem(name);
 
if(readValue && readValue.charAt(0) === "{​​​​​​​​" && readValue.endsWith("}​​​​​​​​")){​​​​​​​​
readValue = JSON.parse(readValue)
        }​​​​​​​​
 
if(readValue && !isNaN(readValue)){​​​​​​​​
readValue = Number(readValue)
        }​​​​​​​​ 
 
returnreadValue;
    }​​​​​​​​
 
constremove = function(name){​​​​​​​​
localStorage.removeItem(name);
    }​​​​​​​​
 
return {​​​​​​​​
create, 
read, 
remove
    }​​​​​​​​
 
}​​​​​​​​)()