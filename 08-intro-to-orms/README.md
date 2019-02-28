## Object Relational Mapper (ORM)

+ Definition:



## Active Record Pattern
Let's do this Tomorrow

# CRUD REVIEW
What are the four ways we can interact with data?

* Create
SQL:  "INSERT INTO dogs"
Ruby:  Dog.new

* Read
SQL: "SELECT * FROM dogs"
Ruby:  Dog.all
SQL: "SELECT * FROM dogs WHERE name = 'scooby'"
Ruby:  Dog.find_by_name('scooby')


* Update
SQL: "UPDATE dogs SET (name = 'scrappy') WHERE id = 1"
Ruby:  dog.update({name: 'scrappy'})

* Destroy
SQL: "DELETE * FROM dogs WHERE id = 1"
Ruby: dog.destroy



## Domain Modeling and SQL Review

Draw out what your schema (structure of your tables and columns) would be for the following domains. Consider what tables are needed, what columns belong on which tables, and where the foreign keys belong.

1. Books and Authors where each book has a single author. Books should have a title and authors should have a name


book belongs_to an author
books
id | title                  | author_id
10   "POODR"                      2
12  "99 Bottles of OOP"           2
13  "Secrets of the JS Ninja"     1

author has_many books
authors
id | name         
1    "John Resig"    
2   "Sandi Metz"     


Q: Write the SQL to find all books written by a certain author given the author's id.
5
SELECT * FROM books WHERE author_id = 5

Q: Write the SQL to find all books written by a certain author given the author's name.
SELECT * FROM books
JOIN authors
ON authors.id = books.author_id
WHERE authors.name = "name"


2. Books and Authors where each book can have one or multiple authors. Books should have a title and authors should have a name

book has many book_authors
book has many authors, through book_authors
books
id | title                    
10   "POODR"                      
12  "99 Bottles of OOP"           
13  "Secrets of the JS Ninja"
14 "Ruby & JS Together"          

book_author belongs to an author
book_author belongs to a book
book_authors
id | author_id | book_id
1       2         10
2       2         12
3       1         13
4       1         14
5       2         14


author has many book_authors
author has many books, through book_authors
authors
id | name         |
1   "John Resig"    
2   "Sandi Metz"     





Q: Write the SQL to find all books written by a certain author given their name

SELECT * FROM books
JOIN book_authors
ON books.id = book_authors.book_id
JOIN authors
ON authors.id = book_authors.author_id
WHERE authors.name = "Authors name"

3. Twitter where Tweets can have Tags (i.e. '#fun', '#learnlovecode', '#tbt'). A tweet can have multiple tags, many tweets can be tagged with the same tag. Tweets have a message and user_id; tags have a name.

tweets
id | message
1

tweet_tags
id | tweet_id | tag_id
1       1         1
1       2         1
1       2        2

tags
id | tag
1     "learnlovecode"
2      "tbt"




Q: Write the SQL to find all the tweets tagged '#tbt'


4. After completing the questions above, is there a rule you can determine about which table the foreign key belongs on given two associated tables?


Foreign key will always be on the belongs to table

=> user = User.new('coffee_dad')
=> Tweet.new("msg", user)


## Lecture Notes
