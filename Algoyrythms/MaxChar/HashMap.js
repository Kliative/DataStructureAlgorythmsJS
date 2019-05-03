const string = "Hello There";
const chars = {};


for (const char of string) {
    // Option 1
    if(!chars[char]){
        chars[char] = 1;
    } else {
        chars[char]++;
    }

    // Option 2
    // chars[char] = chars[char] + 1 || 1;
}

chars;