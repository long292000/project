class ListOfAction {
    $actionContainer;
    activeAction;
    actionListener;

    constructor() {
        this.$actionContainer = document.createElement("div");
        this.$actionContainer.classList.add("d-flex", "flex-column-reverse","grow-1","item","overflow-y");
        this.$actionContainer.style.height="0px";
    }

    setActiveAction=(action)=>{
        this.activeAction=action;
        this.$actionContainer.innerHTML="";
        this.setUpActionListener();
    }

    setUpActionListener = () => {
        if(this.actionListener){
            this.actionListener();
        }
        this.actionListener = db.collection("List Action")
        .where("actionId","==",this.activeAction.id)
        .orderBy("sentAt", "asc")
        .onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if(change.type==="added"){
                    const p= document.createElement("p");

                    const creator = document.createElement("div");
                    creator.innerHTML= change.doc.data().sender+ ":"

                    const content = document.createElement("div");
                    content.innerHTML = change.doc.data().content

                    p.appendChild(creator);
                    p.appendChild(content);
                    this.$messagesContainer.prepend(p);
                }
                
            })
        })
    }

    initRender = (container) => {

        container.appendChild(this.$actionContainer);
    }
}
export default ListOfAction;