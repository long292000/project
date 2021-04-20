class ListModal {
    $formCreate;
    $txtAction;
    $btnCreate;
    $btnClose;
    $backdrop;

    constructor(){
        this.$backdrop=document.createElement("div");
        this.$backdrop.style.height="100vh";
        this.$backdrop.style.width="100vw";
        this.$backdrop.style.position="fixed"
        this.$backdrop.classList.add("centering");
        this.$backdrop.style.top="0"
        this.$backdrop.style.left="0"
        this.$backdrop.style.backgroundColor= "rgba(0,0,0,0.5)";
        this.$backdrop.style.display="none";

        this.$formCreate=document.createElement("form");
        this.$formCreate.addEventListener("submit",this.onSubmit);

        this.$txtAction=document.createElement("input");
        this.$txtAction.type="text";
        this.$txtAction.placeholder="Enter name";
        this.$txtAction.classList.add("form-input");

        this.$btnCreate=document.createElement("button");
        this.$btnCreate.type="submit";
        this.$btnCreate.innerHTML="Create";
        this.$btnCreate.classList.add("btn","btn-primary");

        this.$btnClose=document.createElement("button");
        this.$btnClose.type="button";
        this.$btnClose.innerHTML="Close";
        this.$btnClose.classList.add("btn","btn-primary");
        this.$btnClose.addEventListener("click", ()=>{
            this.setVisible(false);
        })
    }

    onSubmit=(event)=>{
        event.preventDefault();
        const name = this.$txtAction.value;
        const authUser = firebase.auth().currentUser;
        db.collection("actions").add({
            name : name,
            creator : authUser.email,
            users : [authUser.email],
        })
        .then(()=>{
            this.setVisible(false);
        })
    }

    setVisible= (value)=>{
        if(value==true){
            this.$backdrop.style.display="flex";
        }else{
            this.$backdrop.style.display="none";
        }
    };

    initRender= (container)=>{
        const div = document.createElement("div");
        div.style.padding="20px";
        div.style.backgroundColor="pink";
        div.classList.add("d-flex","flex-column", "justify-center");

        const title = document.createElement("h3");
        title.innerHTML="Create new conversation";
        title.style.textAlign="center";
        div.appendChild(title);

        div.appendChild(this.$txtConversationName);
        const btnContainer = document.createElement("div");
        btnContainer.classList.add("d-flex","justify-between","m-t-sm");
        btnContainer.appendChild(this.$btnCreate);
        btnContainer.appendChild(this.$btnClose);
        div.appendChild(btnContainer);


        this.$formCreate.appendChild(div);
        this.$backdrop.appendChild(this.$formCreate);
        container.appendChild(this.$backdrop);

    }
}
export default ListModal;