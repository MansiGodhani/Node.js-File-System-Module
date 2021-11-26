const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

const fs = require('fs');

var filename = "";
var directory = "";
var content = "";

 // Create Directory ( Hint: fs.mkdir )
var createDirectoryWizard = () => {
    rl.question("Enter Directory Name : ",(ans) => {
        directory = ans;
        fs.mkdir(ans,function(err){
            if(err){
                console.log(err);
            }else{
                console.log("Create Directory : " + directory);
            }
            repeat();
        });
    });
};

// Remove Directory
var removeDirectoryWizard = () => {
    rl.question("Enter Directory Name Which You Want To Delete : ",(ans) => {
        directory = ans;        
        fs.rmdir(directory, (err) => {
            if(err){
                console.log(err);
            }else{
                console.log("Delete Directory : " + directory);
            }
            repeat();
        });
    });
};

 // Write File
var createFileWizard = () => {
    rl.question("Enter File Name : ", (ans) => {
        filename = ans + ".txt";
        rl.question("Enter File Content : ", (ans) => {
            content = ans;           
            fs.writeFile(filename,content, (err) => {
                if(err){
                    console.log(err);
                }else{
                    console.log("Create File...");
                }
                repeat();
            });
        });
    });
};

// Read File 
var readFileWizard = () => {
    rl.question("Enter File Name Which You Want To Read : ", (ans) => {
        filename = ans + ".txt";       
        fs.readFile(filename,'utf-8', (err,result) => {
            if(err){
                console.log(err);
            }else{
                console.log(result);
            }
            repeat();
        });
    });
};

// DElete File 
var deleteFileWizard = () => {
    rl.question("Enter File Name Which You Want To Delete : ",(ans) => {
        filename = ans + ".txt";
        fs.unlink(filename, (err) => {
            if(err){
                console.log(err);
            }else{
                console.log("Delete File : " + filename);
            }
            repeat();
        });
    });
};

// Append Data To File 
var appendFileWizard = () => {
    rl.question("Enter File name In Which You Want To More Data : ", (ans) => {
        filename = ans + ".txt";
        rl.question("Enter Content : ", (ans) => {
            content = ans;
            fs.appendFile(filename,content, (err) => {
                if(err){
                    console.log(err);
                }else{
                    console.log("Append Content In File : " + filename);
                }
                repeat();
            });
        });
    });
};

//Update File With New Data 
var updateFileWizard = () => {
    rl.question("Enter File Name Which All Data You Want To Update : ", (ans) => {
        filename = ans + ".txt";
        rl.question("Enter Content : ", (ans) => {
            content = ans;
            fs.writeFile(filename,content, (err) => {
                if(err){
                    console.log(err);
                }else{
                    console.log("Update File Data : " + filename);
                }
                repeat();
            });
        });
    });
};

// Rename File 
var updateNameFileWizard = () => {
    rl.question("Enter File Name Which Name You Want To Change : ", (ans) => {
        filename = ans + ".txt";
        rl.question("Enter New File Name : ", (ans) => {
            var newFilename = ans + ".txt";
            fs.rename(filename,newFilename, (err) =>{
                if(err){
                    console.log(err);
                }else{
                    console.log("Update File Name : " + filename);
                }
                repeat();
            });
        });
    });
};


var instruction = () => {
    console.log("\nEnter 1 for Create Directory");
    console.log("Enter 2 for Remove Directory");
    console.log("Enter 3 for Create File And Write");
    console.log("Enter 4 for Read File");
    console.log("Enter 5 for Delete File");
    console.log("Enter 6 for Append Data To File");
    console.log("Enter 7 for Update File With New Data");
    console.log("Enter 8 for Rename File");
    console.log("Enter 0 for Exit");
};

var start = () => {
    rl.question("Enter Your Choise : ", (ans) => {
        if(ans == '1'){
            createDirectoryWizard();
        }else if(ans == '2'){
            removeDirectoryWizard();
        }else if(ans == '3'){
            createFileWizard();
        }else if(ans == '4'){
            readFileWizard();
        }else if(ans == '5'){
            deleteFileWizard();
        }else if(ans == '6'){
            appendFileWizard();
        }else if(ans == '7'){
            updateFileWizard();
        }else if(ans == '8'){
            updateNameFileWizard();
        }else if(ans == '0'){
            rl.close();
        }else{
            console.log("Wrong Choice, Please try again");
            start();
        }
    });
};

var repeat = () => {
    instruction();
    start();
};

console.log("Hello, Welcome..");
repeat();