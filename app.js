let input = prompt("What would you like to do?");
const todos = ["soda lana hai", "khana khana hai", "safai karni hai"]
while (input !== "quit" && input !== "q")
{
    if (input === "list")
    {
        console.log("***************");
        for (let i = 0; i < todos.length; i++)
        {
            console.log(i + " : " + todos[i]);
        }
        console.log("***************");
    }
    else if (input === "new")
    {
        const newTodo = prompt("OK, what do you want to add?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    }
    else if (input === "delete")
    {
        const index = parseInt(prompt("OK, enter a index to delete:"));
        if (!Number.isNaN(index) && index >= 0 && index < todos.length)
        {
            const deleted = todos.splice(index, 1);
            console.log(`OK, succesfully deleted ${deleted}`);            
        }
        else
        {
            console.log(index);
            console.log("Invalid index");
        }


    }
    input = prompt("What would you like to do?");

}
console.log("OK BRO KHUDA HAFIZZ");