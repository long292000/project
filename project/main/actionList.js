import ListModal from "./listModal"
class ActionList{
    $btnCreateAction
    createActionModal;
    $actionListContainer;

    actionList;
    activeAction;
    onChangeActiveAction;
    
    constructor(onChangeActiveAction){
        this.$btnCreateAction= document.createElement("button");
        this.$btnCreateAction.innerHTML="New Action";
        this.$btnCreateAction.addEventListener("click",this.openCreateModal)
        this.$btnCreateAction.classList.add("btn-secondary", "m-b-sm", "btn","m-t-sm");


        this.$actionListContainer=document.createElement("div");

        this.createActionModal= new ListModal();
        this.setUpActionListener();

        this.actionList=[];

        this.onChangeActiveAction= onChangeActiveAction;
    }

    // setUpActionListener=()=>{
    //     db.collection("actions").where("users","array-contains",firebase.auth().currentUser.email)
    //     .onSnapshot((snapshot)=>{
    //         snapshot.docChanges().forEach((change)=>{
    //             if(change.type==="added"){
    //                 const conversation = new Conversation(
    //                     change.doc.id,
    //                     change.doc.data().name,
    //                     change.doc.data().users,
    //                     (conversation)=>{
    //                         this.onChangeActiveConversation(conversation);
    //                     }
    //                 );
    //                 this.conversationList.push(conversation);
    //                 conversation.initRender(this.$conversationListContainer);
    //             }
    //             if(change.type==="modified"){
    //                 const conversation = this.conversationList.find((item)=>{
    //                     return item.id===change.doc.id
    //                 })
    //                 conversation.updateData(change.doc.data());
    //             }
                
    //         });
    //     });
    // };

    openCreateModal=()=>{
        this.createActionModal.setVisible(true);
    };

    setActiveAction=(action)=>{
        if(this.activeAction){
            this.activeAction.setActive(false);
        }
        this.activeAction=action;
        this.activeAction.setActive(true);
    }

    initRender = (container)=>{
        const div = document.createElement("div");
        div.classList.add("item","overflow-y");
        div.style.width="300px";
        div.style.backgroundColor="lightpink"

        div.appendChild(this.$btnCreateAction);
        div.appendChild(this.$actionListContainer);
        this.createActionModal.initRender(div);
        

        container.appendChild(div);
        
    };
}
export default ActionList;