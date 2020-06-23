function palindrome(message){
    for(let i=0;i<message.length;i++){
        if(i>=message.length/2){
            return true;
        }else if (message.charAt(i)!==message.charAt(message.length-1-i)){
            return false;
        }
    }
}
palindrome('abcba');
palindrome('hello');