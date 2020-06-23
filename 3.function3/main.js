function alphabetSort(message){
    let temp ="";
    if(message.length==1)
        return message;
    else if(message.length<1){
        return null;
    }
    else {
        let right = alphabetSort(message.slice(message.length/2,message.length));
        let left = alphabetSort(message.slice(0,message.length/2));
        let i =0;
        let j=0;
        if((typeof right != null)  && (typeof left!=null)){
            while(i<left.length&&j<right.length){
                if(left.charAt(i).toLowerCase()<right.charAt(j).toLowerCase()){
                    temp +=left.charAt(i);
                    i++;

                }else {
                    temp +=right.charAt(j);
                    j++;

                }
            }
            while (typeof left!=null && i<left.length){
                temp +=left.charAt(i);
                i++;

            }
            while (typeof right != null && j<right.length){
                temp +=right.charAt(j);
                j++;

            }
        }
        return temp;

    }
    console.log(temp);
}
alphabetSort("hello");