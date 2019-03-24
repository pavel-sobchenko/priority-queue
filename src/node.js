class Node {

	constructor(data, priority, parent, left, right) {
        this.data = data || null;
        this.priority = priority || null;
        this.parent = parent || null;
        this.left = left || null; 
        this.right = right || null;
	}

	appendChild(node) {
        if(this.left == null){
            this.left = node;
            node.parent = this;
        } else if (this.right == null) {
            this.right = node;
            node.parent = this;
        }
	}

	removeChild(node) {
        if(this.left != null && node.data == this.left.data && node.priority == this.left.priority){
            this.left = null;
            node.parent = null;
        } else if (this.right != null && node.data == this.right.data && node.priority == this.right.priority){
            this.right = null;
            node.parent = null;
        } else {
            throw new Error();
        }
	}

	remove() {
        if(this.parent != null){
            this.removeChild(this.left);
            this.removeChild(this.right);
            this.data = null;
            this.parent = null;
            this.priority = null;
            this.left = null;
            this.right = null;
        } else {
            throw "e";
        }
	}

	swapWithParent() {
		if(this.parent != null){
            if(this.parent.right == this){
                this.parent.left.parent = this;
                this.parent = this;
            } else if (this.parent.right != null) {
                var root = this.parent;
               var left = this;
               this.right = root.right;
               this.parent.parent = this;
               this.parent.left = left.left; 
               this.parent.right = null;
                this.left = this.parent;
                this.parent = null;
//                this = left;
                //this.parent = root;              
            }
            else {
                if(this.parent.parent != null){
                    if(this.parent.parent.left == this.parent){
                        this.parent.parent.left = this;
                    } else if (this.parent.parent.right = this.parent){
                        this.parent.parent.right = this;
                    }
                }
                var temp = this.parent.parent;
                this.parent.parent = this;
                this.parent = temp;
            
            }
           
        }
	}
}


module.exports = Node;
