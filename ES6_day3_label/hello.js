/**
 * Created by miaoce on 17/6/7.
 */
class Hello{
    constructor(name){
        this.name = name;
    }
    say(){
        let a = 10;
        const b = 20;
        console.log(a,b)
        var foo = ()=>{
            console.log(this)
        }
    }
    static eat(a=10,...other){
        let name = "李四";
        let obj = {
            name,
            foo(){

            }
        }
    }
}
var hello = new Hello("王五123");