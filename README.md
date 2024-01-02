---------------------------------------------------------------------TODO--------------------------------------------------------------
Hii, I build a Todo Web app Using React in which you can add what you want to achive on that specific day to keep yourself productive and accountable.


-----------------------------------------------------------Functionalities--------------------------------------------------------
AddTodo ->You can Todos what you want to achieve today.
DeleteTodo->You can delete todo which u  have completed
IscompletedTodo ->this will check whether the todo is completed or not
edittodo->Sometimes we want to edit our todo , this web app will provide this functonality.




----------------------------------------------------------------Components--------------------------------------------------------------
It will have two components
1.input
    inputcard ->which will have input box to write down the todo and one add button to add it in todos
    --Input Box
    --add button

2.displayTodocard
       Card->this is the todo which we want to achive and it has functionalities like edit,completed,deleted
       ---checkbox
       ---input(disable or not depend on the edit functionality)
       ----button(to edit the todo)
       ----button(to delete the todo)



--------------------------------------------------------------------------Context API---------------------------------------------------

i am storing an array(all todos) of object(id:"some unique value i take like Date.now()",todomsg: todo message,iscompleted :  its boolean whether my todo completed or not) and we have four methods (1.addTodo,2.deletetodo,3.edittodo,4.completedornot)




-----------------------------------------------------------LocalStorage-----------------------------------------------------------------
I am storing all the todos in the localstorage if i refresh my webpage or i mistakenly close my tab, i will get my data back when i came back


