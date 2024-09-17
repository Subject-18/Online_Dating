using System;

namespace API.Entities;

public class AppUser
{
    public int Id { get; set; }         // to create a property. Also int is a primitive type, meaning its value by default is set to 0.
                                        // string type is reference type, so by default it is initializzed as null.
                                        //By default, entity framework calls the field named Id the primary key in the database
    public required string UserName { get; set; }  /* to set a nullable variable by default.
                                                 We can also use ? after the type or use the 'required' keyword before the type
                                                 but then we would have to assign a value to the UserName variable everytime we create an object.*/
    

}
