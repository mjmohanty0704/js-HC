(function example(){ //it is a named IIFE
    console.log("DB Connected!!!");
})() ;// basically here the function is declared and used immediately so as to not clutter with the global variables.

( (name) => {
    console.log(`DBBB Hello brother ${name}`);
})("Manoj");//here we get an error as the interpreter doesnt know when to stop executing the IIFE. So we need to put a ; at the end of IIFE.
