function countWords(message) {
    let num = 0;
    let flag = true;
    message = message.toLowerCase();
    for (let i = 0; i < message.length; i++) {
        if (flag && message.charAt(i) >= 'a' && message.charAt(i) <= 'z') {
            num++;
            flag = false;
        }else if(!flag && message.charAt(i)==' '){
            flag = true;
        }
    }
    console.log(num)
}
countWords('Good morning, I love JavaScript.');