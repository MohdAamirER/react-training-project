import React, { useState } from "react";

export class ToDoListComponent extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            userInputValue: "",
            errorMessage: "",
            list: [{ id: 1, value: "Learn Java" }, { id: 2, value: "Learn React" },
            { id: 1, value: "Learn Java" },
            { id: 3, value: "MicroService" }, { id: 4, value: "Learn Hibernate" }]
        }

    }
    addNewToDo() {
        if (this.state.userInputValue == null || this.state.userInputValue == "") {
            this.setState({ errorMessage: "Please enter some todo in input box" });
        } else {
            let userInputValue = { id: Math.random, value: this.state.userInputValue };
            const newlist = this.state.list;
            newlist.push(userInputValue);

            //reset the userInputValue 
            this.setState({
                list: newlist,
                userInputValue: ""
            })

        }
    }
    deletedToDo = (id) => {
        const list = this.state.list;
        let updatedList = list.filter((item) => item.id != id);
        this.setState({ list: updatedList });
    }
    updateTodo(value) {
        this.setState({ userInputValue: value })
    }
    render() {

        let jsonArray = this.state.list.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.value} <span><button onClick={() => this.deletedToDo(item.id)}>Delete TODO</button></span></td>
                </tr>

            );
        });

        return (
            <div className="app-div">
                <fieldset>
                    <legend>TO DO List</legend>

                    Please Enter ToDO:: <input type="text" value={this.state.userInputValue} onChange={(item) => this.updateTodo(item.target.value)}></input>
                    <button onClick={() => this.addNewToDo()}>Add New TODO</button>
                    <br />
                    <span style={{ color: "red" }}>{this.state.errorMessage}</span>

                    <div>

                        <table border="3.0">
                            <tr>
                                {jsonArray}
                            </tr>
                        </table>

                    </div>
                </fieldset>
            </div>
        );
    }


}
export default ToDoListComponent;