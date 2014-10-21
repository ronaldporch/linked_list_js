#Doubly Linked List Javascript
This app is an implementation of a Doubly Linked List written in Javascript. It takes advantage of typical methods that a Doubly Linked List would use, like deleting a node, searching, adding, etc.

##Use
To make a new Linked List, simply declare a new variable with a value of "new LinkedList();".

```javascript
var myLinkedList = new LinkedList();
```
Once you have made a new Linked List, you can use the ".insert(val)" function to add a Node to it.

```javascript
myLinkedList.insert("Eleanor Rigby");
myLinkedList.insert("John Lennon");
myLinkedList.insert("Hello Goodbye");
```
Each Node knows of its next Node and Previous Node.

At this point, you are able to take advantage of two more functions: ".to_s()" and ".size()".

```javascript
myLinkedList.to_s(); // Hello Goodbye, John Lennon, Eleanor Rigby
myLinkedList.size(); // 3
```
And with Nodes in your Linked List, you can ".search()" for them and ".remove()" them.

```javascript
myLinkedList.search("Eleanor Rigby"); // Eleanor Rigby Found at Node 3
myLinkedList.search("Alice in Chains"); // Alice in Chains not Found
myLinkedList.remove("Eleanor Rigby"); // Removed Eleanor Rigby from Node 3
myLinkedList.remove("The guy who used to play drums for the Beatles"); The guy who used to play drums for the Beatles was not deleted: Node not found.
```
