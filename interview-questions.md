# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.
First, without external resources. Challenge yourself to answer from memory.
Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.



1. What is object-oriented programming? How is it different than functional programming?
Your answer: Object-oriented programming is the structure of Ruby in which literally everything is an object. Everything is treated like an object and therefore methods can be used on practically anything, and there are a seemingly endless amount of methods to choose from to use on those objects. In a language that utilizes functional programming such as JavaScript, you must manipulate components by creating functional logic around them, versus in Ruby where those components can serve to be the logic itself.
Researched answer: Object-oriented programming focuses on the objects of a language and how to manipulate them (such as with the methods I mentioned) and not so much on using functions or logic to make them work. OOP allows for code to be more developer friendly as well as more easily readable, reusable, and scalable. OOP is commonly broken down into four main principles, referred to as the four pillars which represent abstraction, encapsulation, inheritance, and polymorphism. Going through each of those elements respectively, abstraction serves to essentially simplify the code and create actions (methods!) that objects may perform, encapsulation focuses on trying to have the least amount of repeating code for readability purposes, inheritance refers to parent and child elements where the children INHERIT the properties of parent elements (hierarchical system), and lastly polymorphism means that the same methods can be called upon to different objects. Polymorphism goes in hand with when I said that there are a huge number of methods to use on everything in Ruby, since everything in Ruby is an object!



2. What is the difference between a Float and an Integer in Ruby?
Your answer: Integers represent whole numbers without decimals, whereas floats include decimals. Depending on whether integers or floats are utilized, you will come back with different answers. Integer example: 7/3=2 (rounds the number). Float example: 7.0/3=2.3333333. Even though both of those examples were effectively the same, since the float example had the decimal with the number 7, it provided its answer as a float and gave a more accurate response.
Researched answer: Integers correspond to whole numbers, but can also include zero and negative values (which I didn't mention). They can be referred to in Ruby as either int or more simply, i. For example, if a user is prompted to input a number, their input will be rendered as a string (even if they put down a real, whole number). We get around this by appending the gets object with a .to_i method, which turns their input data type from string to an integer! Floats can be either real or irrational numbers (example, pi) and are simply numbers with decimals included in Ruby. As noted in the example above, using an integer and a float in the same expression/equation will output a float data type. Integers and floats both fall under the number data type.



3. Ruby has an implicit return. What does that mean?
Your answer: Implicit return in Ruby means that methods (which can be thought of as the equivalent to JavaScript functions) don't need to have the explicit return keyword in their code block section (defined as being between the do/end keywords).
Researched answer: To slightly correct my answer, implicit return means that the last line of code within a method will be automatically returned without the "return" keyword. If you have code that spans multiple lines and you want to return more than just that last line of code, then you will need to explicitly type out the return keyword for all pieces of the code that you want to return, EXCEPT for that last line of code to be returned.



4. What is a block in Ruby?
Your answer: Ruby blocks are the equivalent to JavaScript higher-order functions (.forEach(), .map(), .filter()) in the sense that you can pass blocks (.each, .map, .select) to Ruby methods (as you would pass JS HOFs to functions). It allows for iteration through iterables (arrays, strings, objects in certain instances) and for us as developers to perform certain program functions.
Researched answer: Blocks are when you pass through anonymous functions to methods in Ruby, and those anonymous functions are either .each, .map, and .filter! These blocks are defined within the scope of do/end keywords if they span multiple lines, OR they can be wrapped up in a set of curly braces {} if occupying just one line. These blocks can accept certain parameters (key, value, or any other words that might be more suitable to input given a certain situation) that go within a set of.. PIPES ||, as opposed to a set of parentheses () like in JavaScript.



5. How do you extract a value in a Ruby hash?
Your answer: Extracting values in Ruby hashes could look like this. Going from memory, hopefully syntax isn't too off!
example_hash = {:first=>"sriracha", :second=>"tabasco", :third=>""}
example_hash.first   # -> [first: "sriracha"]
example_hash[:first]   $ -> "sriracha"
Researched answer: Slight correction to my output provided on line 35. The colon goes in front of the key and it is separated from the value with a comma. We should also note that there are two syntaxes available to developers. The first is provided in the example_items variable and the second is provided in the example_hashbrown variable. The example_hashbrown is an older syntax but is still commonplace within Ruby codes.
example_items = {bowl: "dish used for eating", fork: "utensil made to stab food", cutting_board: "provides a safe place to prepare ingredients"}
example_hashbrown = {:potato=>"crisps", :waffle=>"fries"}
example_hashbrown.potato   # -> [:potato, "crisps"]
example_hashbrown[:first]   # -> "crisps"




## Looking Ahead: Terms for Next Week
1. Class Inheritance: Follows the hierarchical order of parent/child elements, but applies to classes. Subclasses of other classes will inherit all of the characteristics (more specifically, properties) of the classes that they are nested underneath (that "parent" class is called a superclass).
2. RSpec: A testing tool and library made for Ruby (like yarn for JavaScript!). Stands for "Ruby Specification" and it is a domain specific language, only applicable for Ruby applications.
3. CRUD: An acronym (Create, Read, Update, Delete) for how to work with hashes in Ruby. Create new instances of data with the new keyword appended to Hash with a dot, read the has that you have created with a simple 'p' and the hash name, update your hashes by specifying which part of the hash you want updated (example_hash[:example_key]) and reassigning it, and delete hashes with delete keyword that takes in the argument in parentheses of what is to be deleted.
4. Test-driven development: Test-driven development is the process of developing code and testing it as developers write more and more code. It is based on writing those descriptive testing scenarios, like when we're testing with jest in JavaScript, and we write describe/it/expect statements.
5. HTTP: Hypertext transfer protocol is how the internet and web pages obtain data. It is a ruleset dictating how computers should go about transferring files (text, sound, video, images, etc.) through the web.