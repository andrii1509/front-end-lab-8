// var rootNode = document.getElementById("root");

var rootNode = document.getElementById("root");
var list = document.createElement("ul");
rootNode.appendChild(list);
function folderTree(str, maintree) {
	for (var i = 1; i <= str.length; i++) {
		var li = document.createElement("li");
    maintree.appendChild(li);
    var list2 = document.createElement("list");
    list2.className = "stylelist2";
    var img = document.createElement("i")
    img.className = "material-icons";
    img.innerHTML = "folder";
    var p = document.createElement("p");
    p.innerHTML = str[i].title;
    if (str[i].folder) {
    	li.appendChild(img);
   	 	li.appendChild(p);
    	li.appendChild(list2);
    	li.onclick = function (click){
    		click.stopPropagation();
    		if (this.childNodes[2].textContent == "") {
       		var nofile = document.createElement("i");
          nofile.innerHTML = "<span>No file's</span>" ; 
          this.children[2].style.display = "block";
          this.children[0].innerHTML = "folder_open"
          this.children[2].style.padding = "0px";
          this.childNodes[2].appendChild(nofile);
          }
          else {
          	if (this.children[2].style.display == "block") { 
            	this.children[2].style.display = "none"
              this.childNodes[0].innerHTML = "folder"
              }
              else {
                this.children[2].style.display = "block"
                this.childNodes[0].innerHTML = "folder_open"
              }  
            }
                
          }
     		folderTree(str[i].children, list2)
        }
        else {
        	var fim = document.createElement("p")
          fim.className = "material-icons"
          fim.innerHTML = "insert_drive_file";
          li.appendChild(fim)
          li.appendChild(p)
        }
    }       
}
folderTree(structure, list);





