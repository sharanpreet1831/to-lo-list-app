// ====================== All Documentation
let inputTooltips         = document.querySelector(".input_tooltips") // main input tooltips
let addTask               = document.querySelector(".add_task")
let addTaskButton         = document.querySelector(".add_task_btn")
let list                  = document.querySelector(".list")
let completedTaskCount    = document.querySelector(".taskCompleted_count")
let totalTaskCount        = document.querySelector(".totalTask_count")
// ========= Default Count Number
let completedTaskNumber   = 0
let totalTaskNumber       = 0
// ========= for Slash
let slash                 = document.querySelector(".slash")
slash.innerHTML           = 0

// ====================== Adding Task in To Do List Part
addTaskButton.addEventListener("click", () => {

    // ================== Empty Input Tooltips 
    if (addTask.value == "") {
        inputTooltips     .style = "display:flex; block"
    }

    // ================== After Input Task
    else {
        // ============== Commmon Codes For Run
        totalTaskNumber++
        totalTaskCount        .innerHTML = totalTaskNumber
        completedTaskCount    .innerHTML = completedTaskNumber
        slash                 .innerHTML = "/"
        list                  .style = "display: block; display:flex"
        inputTooltips         .style = "display:none"
        
        // ============== Elenents Create 
        let main_listDiv      = document.createElement("div")
        let completeButton    = document.createElement("button", "i") // complete button
        let textInput         = document.createElement("input")
        let editButton        = document.createElement("button", "i") // edit task button
        let saveButton        = document.createElement("button", "i") // save task button
        let deleteButton      = document.createElement("button", "i") // delete task button
        let tooltips          = document.createElement("div") // tooltips
        let newInputTooltips  = document.createElement("div") // new task tooltips

        // ============== Append Child Create 
        list                  .appendChild(main_listDiv)
        main_listDiv          .appendChild(completeButton) // complete button
        main_listDiv          .appendChild(textInput)
        main_listDiv          .appendChild(editButton) // edit task button
        main_listDiv          .appendChild(saveButton) // save task button
        main_listDiv          .appendChild(deleteButton) // delete task button
        main_listDiv          .appendChild(tooltips) // tooltips 
        main_listDiv          .appendChild(newInputTooltips) // new task tooltips

        // ============== Class List Create 
        main_listDiv          .classList.add("main_list")
        completeButton        .classList.add("complete_btn", "fa-solid", "fa-square-check") // complete button
        textInput             .classList.add("new_input")
        editButton            .classList.add("edit_btn", "fa-solid", "fa-pencil") // edit task button
        saveButton            .classList.add("save_btn", "fa-regular", "fa-floppy-disk") // save task button
        deleteButton          .classList.add("delete_btn", "fa-solid", "fa-trash-can") // delete task button
        tooltips              .classList.add("tooltips") // tooltips 
        newInputTooltips      .classList.add("newInput_tooltips") // new task tooltips
 
        // ============== After Adding Task
        textInput   .setAttribute("readonly", "readonly")
        textInput   .style = "cursor: not-allowed"
        textInput   .value = addTask.value
        addTask     .value = ""

        // ============== Edit Task Button Event
        editButton.addEventListener("click", () => {

            editButton       .style = "display: none"
            saveButton       .style = "display: block"
            completeButton   .disabled = true // disable complete button
            completeButton   .style = "cursor: not-allowed"
            textInput        .removeAttribute("readonly", "readonly")
            textInput        .style = "cursor: pointer"
        })

        // ============== edit button tooltips
        editButton.addEventListener("mouseover", () => {
            tooltips     .style = "display:block; display:flex"
            tooltips     .innerHTML = "Edit Task"
        })

        editButton.addEventListener("mouseout", () => {
            tooltips     .style = "display:none"
        })

        // ============== Save Task Button Event
        saveButton.addEventListener("click", () => {

            // ========== if new task input is empty
            if (textInput.value == "") {
                
                newInputTooltips .style = "display: block; display: flex; left: 60px"
                newInputTooltips .innerHTML = "Please Write Somthing Here"
            } 

            // ========== save after edit task 
            else {
                editButton       .style = "display: block"
                saveButton       .style = "display: none"
                completeButton   .disabled = false // enable complete button
                completeButton   .style = "cursor: pointer"
                textInput        .setAttribute("readonly", "readonly")
                textInput        .style = "cursor: not-allowed"
                newInputTooltips .style = "display: none"
            }
        })

        // ============== save button tooltips
        saveButton.addEventListener("mouseover", () => {
            tooltips     .style = "display:block; display:flex"
            tooltips     .innerHTML = "Save Task"
        })

        saveButton.addEventListener("mouseout", () => {
            tooltips     .style = "display:none"
        })

        // ============== Delete Task Button Event 
        deleteButton.addEventListener("click", () => {
            
            totalTaskNumber--
            totalTaskCount    .innerHTML = totalTaskNumber
            main_listDiv      .remove()
            
            // ========== remove last task section
            let listClean = document.querySelectorAll(".main_list") // DOM from class list
            
            if (listClean.length === 0) {
                list                 .style = "display:none"
                totalTaskCount       .innerHTML = ""
                completedTaskCount   .innerHTML = ""
                slash                .innerHTML = 0
            }
        })
        
        // ============== delete button tooltips
        deleteButton.addEventListener("mouseover", () => {
            tooltips     .style = "display:block; display:flex; width: 100px; right: -40px"
            tooltips     .innerHTML = "Delete Task"
        })
        
        deleteButton.addEventListener("mouseout", () => {
            tooltips     .style = "display:none"
        })

        // ============== Complete Task Button Event
        let complete = true // for toggle work
        
        completeButton.addEventListener("click", () => {
        
            // ========== after action
            if (complete) {
                completedTaskNumber++
                completedTaskCount    .innerHTML = completedTaskNumber
                completeButton        .style = "color:#6f5253; transform: scale(1.3); transition: all linear 0.2s"
                editButton            .style = "color:#b39d9f; cursor: not-allowed"
                editButton            .disabled = true
                textInput             .style = "font-weight: 600; background-color: #ffd7d7; cursor: not-allowed; transition: all linear 0.2s"
        
                // ====== delete button event after complete task
                deleteButton.addEventListener("click", () => {

                    completedTaskNumber--
                    completedTaskCount    .innerHTML = completedTaskNumber
        
                    // == remove last task bar
                    let listClean = document.querySelectorAll(".main_list") // DOM from class list

                    if(listClean.length === 0){
                        completedTaskCount.innerHTML = ""
                    }
                })
            }
        
            // ========== reverse action 
            else {
                completedTaskNumber--
                completedTaskCount    .innerHTML = completedTaskNumber
                completeButton        .style = "none; transition: all linear 0.2s"
                editButton            .style = "none"
                editButton            .disabled = false
                textInput             .style = "font-weight:400; cursor: not-allowed; transition: all linear 0.2s"
        
                // ====== delete button event after incomplete task
                deleteButton.addEventListener("click", () => {

                    completedTaskNumber++
                    completedTaskCount    .innerHTML = completedTaskNumber
        
                    // == remove last task bar
                    let listClean = document.querySelectorAll(".main_list") // DOM from class list

                    if(listClean.length === 0){
                        completedTaskCount.innerHTML = ""
                    }
                })
            }
            complete = !complete // for toggle work
        })
        
        // ============== complete button tooltips
        completeButton.addEventListener("mouseover", () => {
            tooltips     .style = "display:block; display:flex; width: 120px; left: -20px"
            tooltips     .innerHTML = "Complete Task"
        })
        
        completeButton.addEventListener("mouseout", () => {
            tooltips     .style = "display:none"
        })
    }
})