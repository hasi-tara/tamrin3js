const howManyChars= (sentence)=>{
    
    //splitting letters and ignoring "space" character
    let splitNotSpace= sentence.replaceAll(' ','').split('');
    
    return splitNotSpace.reduce((charNum,key)=>{

        if (charNum[key]) {
            charNum[key] += 1;
        } else {
            charNum[key]=1;
        }
        return charNum

    },{})
}
console.log('Output:',howManyChars("Hello World"));