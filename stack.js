/* js 实现 stack */
function stack() {
    this.data = []; // 栈内数据存储
    this.top = 0; // 栈顶index，初始化为0
    this.push = push; //入栈
    this.pop = pop; // 出栈
    this.peek = peek; // 查看栈顶元素
    this.clear = clear; // 清空栈
    this.size = size; // 栈内存放元素的个数
    this.isEmpty = isEmpty; // 判断栈是否为空
}

function push(ele) {
    this.data[this.top++] = ele;
}

function pop(){
    return this.data[--this.top];
}

function peek(){
    return this.data[this.top-1];
}

function clear(){
    this.top = 0;
    this.data = [];
}

function size(){
    return this.top;
}

function isEmpty(){
    return this.top === 0;
}

// 初始化
var stack = new stack();
stack.push("1");
stack.push("2");
console.log(stack.size()); //2
console.log(stack.peek()); //2
var popele = stack.pop();
console.log(popele); //2
console.log(stack.peek()); //1