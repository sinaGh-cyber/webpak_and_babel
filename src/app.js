const saySina = () => {
    console.log('sina');
}

class App {
    getName(){
        console.log('hello');
    }
}
class AppB {
    getName(){
        console.log('hello B');
    }
}
saySina();
new App().getName();
new AppB().getName();