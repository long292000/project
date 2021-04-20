import ActionList from "./main/actionList.js";
import ListOfAction from "./main/listOfAction.js";
class Main{ 
    actionList;
    listOfAction;

    constructor(){
        this.actionList = new ActionList((action) => {
            this.setActiveAction(action);
        });
        this.listOfAction = new ListOfAction();

    }
    initRender = (container) => {
        const div = document.createElement("div");
        div.classList.add("d-flex", "item");
        div.style.height = "100vh"

        const content = document.createElement("div");
        content.classList.add("item", "grow-1", "d-flex", "flex-column");
        this.title.initRender(content);

        const div2 = document.createElement("div");
        div2.classList.add("item", "grow-1", "d-flex");

        const div3 = document.createElement("div");
        div3.classList.add("grow-1", "item", "d-flex", "flex-column");

        this.listOfAction.initRender(div3);

        div2.appendChild(div3);

        content.appendChild(div2);

        this.actionList.initRender(div);

        div.appendChild(content);

        container.appendChild(div);
    }
}

export default Main;