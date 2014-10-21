function LinkedList(){
  this.head = null;
  this.size = 0;
}

LinkedList.prototype.createNode = function(value){
    var node = {
        value: value,
        nexxt: null,
        previous: null
    };
    return node;
};

LinkedList.prototype.insert = function(value){
    var node = this.createNode(value);
    if(this.size === 0){
        this.head = node;
    }else{
        this.head.previous = node;
        node.nexxt = this.head;
        this.head = node;
    };
    this.size++;
    return node;
};

LinkedList.prototype.size = function(){
    return this.size;
};

LinkedList.prototype.search = function(value){
    current = this.head;
    counter = 1;
    while(current){
        if(current.value === value){
            return current.value + " Found at Node " + counter + ".";
        }else{
            console.log(current);
            current = current.nexxt;
            counter++;
        };
    };
    if(current === null){
        return value + " was not found.";
    };
};

LinkedList.prototype.remove = function(node) {
    current = this.head;
    counter = 2;
    if(current.value === node){
        value = current.value;
        this.head = current.nexxt;
        this.size--;
        return "Removed " + value + " From Node " + 1 + ".";
    }else{
        while(current && current.nexxt && current.nexxt.value !== node){
            current = current.nexxt;
            counter++;
        };
        if(current && current.nexxt){
            value = current.nexxt.value;
            current.nexxt = current.nexxt.nexxt;
            if(current.nexxt){
                current.nexxt.previous = current;
            };
            this.size--;
            return "Removed " + value + " From Node " + counter + ".";
        }else{
            return node + " was not deleted: Node not found.";
        };
    };
};

LinkedList.prototype.to_s = function(){
    current = this.head;
    var list;
    while(current){
        if(list === undefined){
            list = current.value;
            current = current.nexxt;
        }else{
            list += ", " + current.value;
            current = current.nexxt;
        };
    };
    return list;
};

var ll = new LinkedList();
ll.insert("Hello, Goodbye");
ll.insert("I Want to Hold Your Hand");
ll.insert("John Lennon");
ll.insert("Ringo Starr");
console.log(ll.size);
console.log(ll.search("Hello, Goodbye"));
console.log(ll.search("Eleanor Rigby"));
console.log(ll.remove("Ringo Starr"));
console.log(ll.remove("Alice in Chains"));
console.log(ll);
console.log(ll.to_s());
